export type PostTemplateProps = {
  content:
    | {
        likes: number | null | undefined;
        __typename?: "Post" | undefined;
        title?: string | null | undefined;
        description?: string | null | undefined;
        date?: any;
        slug?: string | null | undefined;
        category?: string | null | undefined;
        sys: {
          __typename?: "Sys" | undefined;
          id: string;
        };
        body?:
          | {
              __typename?: "PostBody" | undefined;
              json: any;
              links: {
                __typename?: "PostBodyLinks" | undefined;
                assets: {
                  __typename?: "PostBodyAssets" | undefined;
                  block: ({
                    __typename?: "Asset" | undefined;
                    url?: string | null | undefined;
                    description?: string | null | undefined;
                    sys: {
                      __typename?: "Sys" | undefined;
                      id: string;
                    };
                  } | null)[];
                };
              };
            }
          | null
          | undefined;
      }
    | undefined;
};
