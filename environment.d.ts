declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_DELIVERY_TOKEN: string;
    CONTENTFUL_PREVIEW_TOKEN: string;
    CONTENTFUL_PREVIEW_SECRET: string;
    CONTENTFUL_REVALIDATE_SECRET: string;
  }
}
