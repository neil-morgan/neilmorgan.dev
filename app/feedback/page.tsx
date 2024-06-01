import { draftMode } from "next/headers";
import { FeedbackAuthor, FeedbackHeader } from "./styles";
import { fetchContent } from "@/helpers";
import { AllFeedbackDocument, FeedbackPageDocument } from "@/service";
import {
  Container,
  ContentButton,
  MasonryGrid,
  Text,
  Separator,
} from "@/components/atoms";
import { PageHeader, Richtext, AuthorImage } from "@/components/molecules";
import { NoticePage } from "@/components/templates";
import { LOCATIONS, PAGE_TITLE_PREFIX } from "@/lib/site";
import { formatDate } from "@/utils";

export const revalidate = 5;

export const metadata = {
  title: `Feedback | ${PAGE_TITLE_PREFIX}`,
};

const FeedbackPage = async () => {
  const { isEnabled: preview } = draftMode();

  const feedbackData = await fetchContent({
    document: AllFeedbackDocument,
    preview,
  });

  const pageData = await fetchContent({
    document: FeedbackPageDocument,
    preview,
  });

  const [{ feedbackCollection }, { header }] = await Promise.all([
    feedbackData,
    pageData,
  ]);

  if (feedbackCollection && feedbackCollection?.items.length < 3) {
    return <NoticePage noticeType="noContent" />;
  }

  const breadcrumbs = [LOCATIONS.home, { label: "Feedback" }];

  return (
    <Container as="section">
      {header?.title && (
        <PageHeader
          title={header.title}
          kicker={header.kicker}
          body={header.body}
          breadcrumbs={breadcrumbs}
        />
      )}

      <MasonryGrid gutter={6}>
        {feedbackCollection?.items.map((feedback, i) => (
          <ContentButton key={i} href={feedback?.url}>
            <FeedbackHeader>
              <AuthorImage
                url={feedback?.authorImageUrl}
                name={feedback?.author}
              />
              <FeedbackAuthor>
                <Text size={3} color="$white" weight={500}>
                  {feedback?.author}
                </Text>
                <Text size={1} color="$secondary1">
                  {feedback?.authorRole}
                </Text>
                <Text size={0}>
                  {formatDate(feedback?.date, "space", "monthYear")}
                </Text>
              </FeedbackAuthor>
            </FeedbackHeader>
            <Separator />
            {feedback?.comments && <Richtext content={feedback?.comments} />}
          </ContentButton>
        ))}
      </MasonryGrid>
    </Container>
  );
};

export default FeedbackPage;
