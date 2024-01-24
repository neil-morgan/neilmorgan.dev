import { Container, Text, Button } from "@/components/atoms";

export const metadata = {
  title: "Not found",
};

const NotFound = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <Text as="h2" size={9} color="$white">
        404 - Oh&nbsp;no!
      </Text>
      <Text size={5}>
        Sorry, nothing to see here. The page you&apos;re trying to visit
        doesn&apos;t exist on neilmorgan.dev.
      </Text>
      <Button css={{ marginTop: "$8" }} href="/" rightIcon="ArrowRight">
        Go to home
      </Button>
    </Container>
  );
};

export default NotFound;
