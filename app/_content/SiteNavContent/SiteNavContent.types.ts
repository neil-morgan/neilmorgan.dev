import { ReactNode } from "react";

import { IconNameType } from "@/app/_components/common/Icon";

export type SiteNavContentData = {
  allLinks: Array<{ label: string; href: string }>;
  social: Array<{ label: string; url: string; icon: IconNameType }>;
};

export type SiteNavContentProps = {
  children: ReactNode | ((props: SiteNavContentData) => ReactNode);
};
