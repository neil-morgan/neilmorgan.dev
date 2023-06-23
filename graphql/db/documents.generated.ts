import * as Types from "./types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type GetPostDataByIdQueryVariables = Types.Exact<{
  id: Types.InputMaybe<Types.Scalars["ID"]["input"]>;
}>;

export type GetPostDataByIdQuery = {
  __typename?: "Query";
  postData: { __typename?: "PostData"; _id: string; likes: number };
};

export type CreatePostDataByIdMutationVariables = Types.Exact<{
  likes: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  id: Types.InputMaybe<Types.Scalars["ID"]["input"]>;
}>;

export type CreatePostDataByIdMutation = {
  __typename?: "Mutation";
  createPostData: { __typename?: "PostData"; likes: number; _id: string };
};

export type UpdatePostLikesByIdMutationVariables = Types.Exact<{
  id: Types.InputMaybe<Types.Scalars["ID"]["input"]>;
  likes: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export type UpdatePostLikesByIdMutation = {
  __typename?: "Mutation";
  updatePostData: { __typename?: "PostData"; likes: number; _id: string };
};

export const GetPostDataByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPostDataById" },
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
            name: { kind: "Name", value: "postData" },
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
} as unknown as DocumentNode<
  GetPostDataByIdQuery,
  GetPostDataByIdQueryVariables
>;
export const CreatePostDataByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createPostDataById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "likes" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
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
            name: { kind: "Name", value: "createPostData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "likes" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "likes" },
                },
              },
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
                { kind: "Field", name: { kind: "Name", value: "likes" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePostDataByIdMutation,
  CreatePostDataByIdMutationVariables
>;
export const UpdatePostLikesByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updatePostLikesById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "likes" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatePostData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "likes" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "likes" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "likes" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePostLikesByIdMutation,
  UpdatePostLikesByIdMutationVariables
>;
