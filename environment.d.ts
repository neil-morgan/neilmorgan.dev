declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_DELIVERY_TOKEN: string;
    CONTENTFUL_PREVIEW_TOKEN: string;
  }
}

declare namespace globalThis {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}
