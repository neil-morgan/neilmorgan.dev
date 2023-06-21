import * as Types from "./types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type GetDbPostByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["ID"]["input"]>;
}>;

export type GetDbPostByIdQuery = {
  __typename?: "Query";
  post?: {
    __typename?: "Post";
    _id?: string | null;
    likes?: number | null;
  } | null;
};

export const GetDbPostByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDbPostById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "post" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "likes" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDbPostByIdQuery, GetDbPostByIdQueryVariables>;
