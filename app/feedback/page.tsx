import { draftMode } from "next/headers";
import { FeedbackItem } from "./styles";
import { fetchContent } from "@/helpers";
import { AllFeedbackDocument } from "@/service";
import {
  Container,
  ContentButton,
  MasonryGrid,
  Masonry,
  Link,
  Text,
} from "@/components/atoms";
import { PageHeader, Card } from "@/components/molecules";
import { NoticePage } from "@/components/templates";
import { LOCATIONS } from "@/lib/site";

const FeedbackPage = async () => {
  const { isEnabled: preview } = draftMode();

  const { feedbackCollection } = await fetchContent({
    document: AllFeedbackDocument,
    preview,
  });

  if (feedbackCollection && feedbackCollection?.items.length === 0) {
    return <NoticePage noticeType="noContent" />;
  }

  const breadcrumbs = [LOCATIONS.home, { label: "Feedback" }];

  return (
    <>
      <Container as="section">
        <PageHeader
          breadcrumbs={breadcrumbs}
          kicker="Feedback"
          heading="The thoughts and opinions of others"
          body="Improvement begins with I"
        />
        <MasonryGrid gutter={6}>
          {feedbackCollection?.items.map((feedback, i) => {
            return (
              <ContentButton key={i} href="/">
                <Text as="p">{feedback?.body}</Text>
                <Text size={4}>asd</Text>
              </ContentButton>
            );
          })}
        </MasonryGrid>
      </Container>
    </>
  );
};

export default FeedbackPage;
