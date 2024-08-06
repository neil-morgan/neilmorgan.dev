import { draftMode } from "next/headers";
import { styled } from "@/lib/stitches";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { Container, AspectImage } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";
import { ProfilePageDocument, type ContentGroup } from "@/service";

const tags = ["content"];
export const revalidate = 5;
export const maxDuration = 30;

const ProfilePage = async () => {
  const { isEnabled: preview } = draftMode();
  const breadcrumbs = [LOCATIONS.home, { label: "Profile" }];

  const profileData = await fetchContent({
    document: ProfilePageDocument,
    tags,
    preview,
  });

  const header = profileData.header as ContentGroup;
  const base64Map = await extractImagesToBase64Map({
    header,
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
      {profileData.profileImage?.title &&
        profileData.profileImage.description &&
        profileData.profileImage.url && (
          <AspectImage
            width={300}
            ratio={1}
            url={profileData.profileImage.url}
            description={profileData.profileImage.description}
            blurDataUrl={base64Map[profileData.profileImage.title]}
          />
        )}
    </Container>
  );
};

export default ProfilePage;
