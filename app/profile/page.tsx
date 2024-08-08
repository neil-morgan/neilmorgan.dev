import { draftMode } from "next/headers";
import { Introduction } from "./styles";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import {
  Container,
  AspectImage,
  Separator,
  Text,
  Link,
} from "@/components/atoms";
import { PageHeader, Richtext } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";
import {
  ProfilePageDocument,
  type ContentGroup,
  type ContentGroupBody,
} from "@/service";

const tags = ["content"];
export const revalidate = 5;
export const maxDuration = 30;

const ProfilePage = async () => {
  const { isEnabled: preview } = draftMode();
  const breadcrumbs = [LOCATIONS.home, { label: "Profile" }];

  const pageData = await fetchContent({
    document: ProfilePageDocument,
    tags,
    preview,
  });

  const header = pageData.header as ContentGroup;
  const base64Map = await extractImagesToBase64Map({
    pageData,
  });

  return (
    <Container>
      {header.title && (
        <PageHeader
          kicker={header.kicker}
          title={header.title}
          heading={header.heading}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      <Introduction>
        {header.image?.title &&
          header.image.description &&
          header.image.url && (
            <AspectImage
              width={300}
              ratio={1}
              url={header.image.url}
              description={header.image.description}
              blurDataUrl={base64Map[header.image.title]}
            />
          )}
        <Richtext
          content={pageData.header?.body as ContentGroupBody}
          css={{
            "@md": { alignSelf: "center" },
          }}
        />
      </Introduction>

      <Separator size="xl" />

      <Text
        size={5}
        as="h3"
        weight={400}
        color="$white"
        css={{ margin: "$4 0" }}>
        Experience
      </Text>

      <Text>
        Section coming soon{" "}
        <Link
          href="https://www.linkedin.com/in/neil-morgan-/details/experience/"
          target="_blank">
          for now see here
        </Link>
      </Text>
    </Container>
  );
};

export default ProfilePage;
