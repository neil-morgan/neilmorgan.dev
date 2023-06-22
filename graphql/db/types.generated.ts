export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  createPostData?: Maybe<PostData>;
  deletePostData?: Maybe<PostData>;
  updatePostData?: Maybe<PostData>;
};

export type MutationCreatePostDataArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
  likes?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeletePostDataArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdatePostDataArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
  likes?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostData = {
  __typename?: "PostData";
  _id?: Maybe<Scalars["ID"]["output"]>;
  likes?: Maybe<Scalars["Int"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  postData?: Maybe<PostData>;
  postsData?: Maybe<Array<Maybe<PostData>>>;
};

export type QueryPostDataArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
};
