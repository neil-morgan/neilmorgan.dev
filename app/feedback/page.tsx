import { draftMode } from "next/headers";
import { FeedbackAuthor, FeedbackHeader } from "./styles";
import { fetchContent } from "@/helpers";
import { AllFeedbackDocument } from "@/service";
import {
  Container,
  ContentButton,
  MasonryGrid,
  Text,
  Separator,
} from "@/components/atoms";
import { PageHeader, Richtext, AuthorImage } from "@/components/molecules";
import { NoticePage } from "@/components/templates";
import { LOCATIONS } from "@/lib/site";
import { formatDate } from "@/utils";

export const revalidate = 5;

const FeedbackPage = async () => {
  const { isEnabled: preview } = draftMode();

  const { feedbackCollection } = await fetchContent({
    document: AllFeedbackDocument,
    preview,
  });

  if (feedbackCollection && feedbackCollection?.items.length < 3) {
    return <NoticePage noticeType="noContent" />;
  }

  const breadcrumbs = [LOCATIONS.home, { label: "Feedback" }];

  return (
    <Container as="section">
      <PageHeader
        breadcrumbs={breadcrumbs}
        kicker="Feedback"
        heading="The thoughts and opinions of others"
        body="Improvement begins with I"
      />
      <MasonryGrid gutter={6}>
        {feedbackCollection?.items.map((feedback, i) => (
          <ContentButton key={i} href="/">
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
