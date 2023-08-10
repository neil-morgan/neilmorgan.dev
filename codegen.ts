import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import { CONTENTFUL_BASE_URL } from "./constants";

loadEnvConfig(process.cwd());

const dbSchema = { [`http://localhost:3000/api`]: {} };
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
  hooks: { afterAllFileWrite: ["prettier --write"] },
  schema: [cmsSchema, dbSchema],
  documents: "./graphql/**/*.graphql",
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
