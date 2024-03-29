import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import { CONTENTFUL_SPACE_URL } from "./lib/site/constants";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${CONTENTFUL_SPACE_URL}${process.env.CONTENTFUL_SPACE_ID}`]: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
      },
    },
  },
  documents: "**/*.graphql",
  generates: {
    "service/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        documentMode: "string",
        avoidOptionals: true,
      },
    },
  },
};

export default config;
