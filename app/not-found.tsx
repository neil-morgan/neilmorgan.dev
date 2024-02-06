import { Container } from "@/components/atoms";
import { InfoMessage } from "@/components/molecules";
import { INFO_MESSAGES } from "@/lib/site";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <InfoMessage {...INFO_MESSAGES.pageNotFound} />
    </Container>
  );
}
