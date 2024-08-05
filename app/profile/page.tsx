import { draftMode } from "next/headers";
import { styled } from "@/lib/stitches";
import { Container } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";

const ProfilePage = async () => {
  const { isEnabled: preview } = draftMode();
  const breadcrumbs = [LOCATIONS.home, { label: "Profile" }];

  return (
    <Container>
      <PageHeader
        title="Hey, I'm Neil"
        kicker="Profile"
        body="Nice to meet you, welcome to my profile."
        breadcrumbs={breadcrumbs}
        image={{
          url: "https://images.ctfassets.net/96c2x2gvt3wj/5NlBTVFAYRy3FzsWeJsJh/e5be2d9f53b646dbe624b06b84f867f7/orbtal-media-Esq0ovRY-Zs-unsplash.jpg",
          description:
            "A ships steering wheel - photo by orbtalmedia on Unsplash",
          blurDataUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AKHCv/j/99/s46G3rQDLxJzKsI2roIGyspEAGhkVIxwPEQwAAgQA4YMScEvOSokAAAAASUVORK5CYII=",
        }}
      />
    </Container>
  );
};

export default ProfilePage;
