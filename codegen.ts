import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import { CONTENTFUL_BASE_URL } from "./constants";

loadEnvConfig(process.cwd());

const dbSchema = {
  [process.env.NEXT_PUBLIC_APOLLO_SERVER_URL]: {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_APOLLO_SERVER_TOKEN,
    },
  },
};

const cmsSchema = {
  [`${CONTENTFUL_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}`]: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    },
  },
};

const config: CodegenConfig = {
  overwrite: true,
  // hooks: { afterAllFileWrite: ["prettier --write"] },
  schema: [cmsSchema, dbSchema],
  documents: "**/*.graphql",
  generates: {
    "graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        avoidOptionals: true,
      },
    },
  },
};

export default config;
