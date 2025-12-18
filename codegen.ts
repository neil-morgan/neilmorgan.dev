import { loadEnvConfig } from "@next/env";

import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        },
      },
  },
  documents: "**/*.graphql",
  generates: {
    "app/_graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        documentMode: "string",
        avoidOptionals: true,
      },
    },
  },
};

export default config;
