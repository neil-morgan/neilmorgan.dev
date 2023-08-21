import { type SocialItem } from "@/graphql";

export type GetHeaderContentReturnType = {
  social: SocialItem[];
  navigation: (
    | {
        title: string;
        slug: string;
        list: {
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
          options: {
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
