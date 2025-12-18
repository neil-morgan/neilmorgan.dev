import type {
  LinkFragment,
  CategoryFragment,
  UniquePageFragment,
} from "@/app/_graphql";

export type SiteHeaderProps = {
  links: ({
    label?: string | null;
    href: string;
  } | null)[];

  social?:
    | ({
        label: string;
        url: string;
      } | null)[]
    | undefined;
};
