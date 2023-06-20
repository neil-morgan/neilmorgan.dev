import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,

  schema: [
    {
      "http://localhost:3000/api": {},
    },
    {
      "https://graphql.contentful.com/content/v1/spaces/96c2x2gvt3wj": {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer afQzP5h4u_FQ6U2_HN4dNZMmv0GwZKrNSzJgFBntUps`,
        },
      },
    },
  ],
  documents: ["graphql/**/*.graphql"],
  hooks: { afterAllFileWrite: ["prettier --write"] },
  generates: {
    "graphql/types.generated.ts": { plugins: ["typescript"] },
    "graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
