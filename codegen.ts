import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import { CONTENTFUL_BASE_URL } from "./constants";

loadEnvConfig(process.cwd());

const cmsDocument = "graphql/cms/**/*.graphql";
const cmsSchema = {
  [`${CONTENTFUL_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}`]: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    },
  },
};

const dbDocument = "graphql/db/**/*.graphql";
const dbSchema = { [`http://localhost:3000/api`]: {} };

const config: CodegenConfig = {
  overwrite: true,
  hooks: { afterAllFileWrite: ["prettier --write"] },

  generates: {
    "graphql/cms/types.generated.ts": {
      schema: cmsSchema,
      documents: cmsDocument,
      plugins: ["typescript"],
      config: {
        avoidOptionals: true,
      },
    },
    "graphql/cms/": {
      schema: cmsSchema,
      documents: cmsDocument,
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        avoidOptionals: true,
      },
    },
    "graphql/db/types.generated.ts": {
      schema: dbSchema,
      documents: dbDocument,
      plugins: ["typescript"],
      config: {
        avoidOptionals: true,
      },
    },
    "graphql/db/": {
      schema: dbSchema,
      documents: dbDocument,
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      config: {
        avoidOptionals: true,
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
