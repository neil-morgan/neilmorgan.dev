declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_DELIVERY_TOKEN: string;
    CONTENTFUL_PREVIEW_TOKEN: string;
    NEXT_PUBLIC_APOLLO_SERVER_URL: string;
    NEXT_PUBLIC_APOLLO_SERVER_TOKEN: string;
  }
}
