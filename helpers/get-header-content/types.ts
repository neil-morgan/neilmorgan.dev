import { type SocialItem } from "@/graphql";

export type GetHeaderContentReturnType = {
  social: SocialItem[];
  navigation: (
    | {
        title: string;
        slug: string;
        list: {
          columns: "2" | "1";
          options: {
            title: string;
            slug: string;
          }[];
        };
      }
    | {
        title: string;
        slug: string;
        list: {
          columns: "2" | "1";
          options: {
            icon: string;
            title: string;
            slug: string;
            description: string;
          }[];
        };
      }
    | {
        title: string;
        slug: string;
        list?: undefined;
      }
  )[];
};
