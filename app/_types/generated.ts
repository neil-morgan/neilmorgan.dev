import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  contentGroupCollection: Maybe<ContentGroupCollection>;
  entryCollection: Maybe<EntryCollection>;
  feedbackCollection: Maybe<FeedbackCollection>;
  postCollection: Maybe<PostCollection>;
  projectCollection: Maybe<ProjectCollection>;
  skillCollection: Maybe<SkillCollection>;
};


export type AssetLinkingCollectionsContentGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsFeedbackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsSkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroup = Entry & _Node & {
  __typename?: 'ContentGroup';
  _id: Scalars['ID']['output'];
  body: Maybe<ContentGroupBody>;
  contentfulMetadata: ContentfulMetadata;
  heading: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  kicker: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ContentGroupLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupBodyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupHeadingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupKickerArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/contentGroup) */
export type ContentGroupUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentGroupBody = {
  __typename?: 'ContentGroupBody';
  json: Scalars['JSON']['output'];
  links: ContentGroupBodyLinks;
};

export type ContentGroupBodyAssets = {
  __typename?: 'ContentGroupBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentGroupBodyEntries = {
  __typename?: 'ContentGroupBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentGroupBodyLinks = {
  __typename?: 'ContentGroupBodyLinks';
  assets: ContentGroupBodyAssets;
  entries: ContentGroupBodyEntries;
  resources: ContentGroupBodyResources;
};

export type ContentGroupBodyResources = {
  __typename?: 'ContentGroupBodyResources';
  block: Array<ContentGroupBodyResourcesBlock>;
  hyperlink: Array<ContentGroupBodyResourcesHyperlink>;
  inline: Array<ContentGroupBodyResourcesInline>;
};

export type ContentGroupBodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentGroupBodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentGroupBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentGroupBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentGroupBodyResourcesInline = ResourceLink & {
  __typename?: 'ContentGroupBodyResourcesInline';
  sys: ResourceSys;
};

export type ContentGroupCollection = {
  __typename?: 'ContentGroupCollection';
  items: Array<Maybe<ContentGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentGroupFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentGroupFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentGroupFilter>>>;
  body_contains: InputMaybe<Scalars['String']['input']>;
  body_exists: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  heading: InputMaybe<Scalars['String']['input']>;
  heading_contains: InputMaybe<Scalars['String']['input']>;
  heading_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not: InputMaybe<Scalars['String']['input']>;
  heading_not_contains: InputMaybe<Scalars['String']['input']>;
  heading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon: InputMaybe<Scalars['String']['input']>;
  icon_contains: InputMaybe<Scalars['String']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_not: InputMaybe<Scalars['String']['input']>;
  icon_not_contains: InputMaybe<Scalars['String']['input']>;
  icon_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kicker: InputMaybe<Scalars['String']['input']>;
  kicker_contains: InputMaybe<Scalars['String']['input']>;
  kicker_exists: InputMaybe<Scalars['Boolean']['input']>;
  kicker_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kicker_not: InputMaybe<Scalars['String']['input']>;
  kicker_not_contains: InputMaybe<Scalars['String']['input']>;
  kicker_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentGroupLinkingCollections = {
  __typename?: 'ContentGroupLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ContentGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContentGroupOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  KickerAsc = 'kicker_ASC',
  KickerDesc = 'kicker_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars['Boolean']['input']>;
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/embeddedIframe) */
export type EmbeddedIframe = Entry & _Node & {
  __typename?: 'EmbeddedIframe';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<EmbeddedIframeLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/embeddedIframe) */
export type EmbeddedIframeLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/embeddedIframe) */
export type EmbeddedIframeTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/embeddedIframe) */
export type EmbeddedIframeUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmbeddedIframeCollection = {
  __typename?: 'EmbeddedIframeCollection';
  items: Array<Maybe<EmbeddedIframe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EmbeddedIframeFilter = {
  AND: InputMaybe<Array<InputMaybe<EmbeddedIframeFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EmbeddedIframeFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EmbeddedIframeLinkingCollections = {
  __typename?: 'EmbeddedIframeLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type EmbeddedIframeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EmbeddedIframeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type Feedback = Entry & _Node & {
  __typename?: 'Feedback';
  _id: Scalars['ID']['output'];
  author: Maybe<Scalars['String']['output']>;
  authorImage: Maybe<Asset>;
  authorRole: Maybe<Scalars['String']['output']>;
  comments: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date: Maybe<Scalars['DateTime']['output']>;
  linkedFrom: Maybe<FeedbackLinkingCollections>;
  sys: Sys;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackAuthorArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackAuthorImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackAuthorRoleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackCommentsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCollection = {
  __typename?: 'FeedbackCollection';
  items: Array<Maybe<Feedback>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeedbackFilter = {
  AND: InputMaybe<Array<InputMaybe<FeedbackFilter>>>;
  OR: InputMaybe<Array<InputMaybe<FeedbackFilter>>>;
  author: InputMaybe<Scalars['String']['input']>;
  authorImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  authorRole: InputMaybe<Scalars['String']['input']>;
  authorRole_contains: InputMaybe<Scalars['String']['input']>;
  authorRole_exists: InputMaybe<Scalars['Boolean']['input']>;
  authorRole_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorRole_not: InputMaybe<Scalars['String']['input']>;
  authorRole_not_contains: InputMaybe<Scalars['String']['input']>;
  authorRole_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_contains: InputMaybe<Scalars['String']['input']>;
  author_exists: InputMaybe<Scalars['Boolean']['input']>;
  author_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not: InputMaybe<Scalars['String']['input']>;
  author_not_contains: InputMaybe<Scalars['String']['input']>;
  author_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  comments: InputMaybe<Scalars['String']['input']>;
  comments_contains: InputMaybe<Scalars['String']['input']>;
  comments_exists: InputMaybe<Scalars['Boolean']['input']>;
  comments_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  comments_not: InputMaybe<Scalars['String']['input']>;
  comments_not_contains: InputMaybe<Scalars['String']['input']>;
  comments_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeedbackLinkingCollections = {
  __typename?: 'FeedbackLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  sectionCollection: Maybe<SectionCollection>;
};


export type FeedbackLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type FeedbackLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FeedbackLinkingCollectionsSectionCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FeedbackLinkingCollectionsSectionCollectionOrder {
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FeedbackOrder {
  AuthorRoleAsc = 'authorRole_ASC',
  AuthorRoleDesc = 'authorRole_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/link) */
export type Link = Entry & _Node & {
  __typename?: 'Link';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LinkLinkingCollections>;
  sys: Sys;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/link) */
export type LinkIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/link) */
export type LinkLabelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/link) */
export type LinkUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkFilter = {
  AND: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  icon: InputMaybe<Scalars['String']['input']>;
  icon_contains: InputMaybe<Scalars['String']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_not: InputMaybe<Scalars['String']['input']>;
  icon_not_contains: InputMaybe<Scalars['String']['input']>;
  icon_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LinkOrder {
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  category: Maybe<Scalars['String']['output']>;
  content: Maybe<PageContent>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageLinkingCollections>;
  metaTitle: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageCategoryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageMetaTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/page) */
export type PageTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContent = {
  __typename?: 'PageContent';
  json: Scalars['JSON']['output'];
  links: PageContentLinks;
};

export type PageContentAssets = {
  __typename?: 'PageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageContentEntries = {
  __typename?: 'PageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageContentLinks = {
  __typename?: 'PageContentLinks';
  assets: PageContentAssets;
  entries: PageContentEntries;
  resources: PageContentResources;
};

export type PageContentResources = {
  __typename?: 'PageContentResources';
  block: Array<PageContentResourcesBlock>;
  hyperlink: Array<PageContentResourcesHyperlink>;
  inline: Array<PageContentResourcesInline>;
};

export type PageContentResourcesBlock = ResourceLink & {
  __typename?: 'PageContentResourcesBlock';
  sys: ResourceSys;
};

export type PageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageContentResourcesInline = ResourceLink & {
  __typename?: 'PageContentResourcesInline';
  sys: ResourceSys;
};

export type PageFilter = {
  AND: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageFilter>>>;
  category: InputMaybe<Scalars['String']['input']>;
  category_contains: InputMaybe<Scalars['String']['input']>;
  category_exists: InputMaybe<Scalars['Boolean']['input']>;
  category_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not: InputMaybe<Scalars['String']['input']>;
  category_not_contains: InputMaybe<Scalars['String']['input']>;
  category_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_contains: InputMaybe<Scalars['String']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type Post = Entry & _Node & {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  body: Maybe<PostBody>;
  category: Maybe<PostCategory>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<PostLinkingCollections>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tagsCollection: Maybe<PostTagsCollection>;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostBodyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostCategoryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PostCategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostTagsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostTagsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SkillFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostBody = {
  __typename?: 'PostBody';
  json: Scalars['JSON']['output'];
  links: PostBodyLinks;
};

export type PostBodyAssets = {
  __typename?: 'PostBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostBodyEntries = {
  __typename?: 'PostBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostBodyLinks = {
  __typename?: 'PostBodyLinks';
  assets: PostBodyAssets;
  entries: PostBodyEntries;
  resources: PostBodyResources;
};

export type PostBodyResources = {
  __typename?: 'PostBodyResources';
  block: Array<PostBodyResourcesBlock>;
  hyperlink: Array<PostBodyResourcesHyperlink>;
  inline: Array<PostBodyResourcesInline>;
};

export type PostBodyResourcesBlock = ResourceLink & {
  __typename?: 'PostBodyResourcesBlock';
  sys: ResourceSys;
};

export type PostBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'PostBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type PostBodyResourcesInline = ResourceLink & {
  __typename?: 'PostBodyResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategory = Entry & _Node & {
  __typename?: 'PostCategory';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<PostCategoryLinkingCollections>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategorySlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategoryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCategoryCollection = {
  __typename?: 'PostCategoryCollection';
  items: Array<Maybe<PostCategory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PostCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<PostCategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostCategoryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostCategoryLinkingCollections = {
  __typename?: 'PostCategoryLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};


export type PostCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type PostCategoryLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostCategoryLinkingCollectionsPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PostCategoryLinkingCollectionsPostCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PostCategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PostFilter = {
  AND: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostFilter>>>;
  body_contains: InputMaybe<Scalars['String']['input']>;
  body_exists: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains: InputMaybe<Scalars['String']['input']>;
  category: InputMaybe<CfPostCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  tags: InputMaybe<CfSkillNestedFilter>;
  tagsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PostOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PostTagsCollection = {
  __typename?: 'PostTagsCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PostTagsCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ProficiencyAsc = 'proficiency_ASC',
  ProficiencyDesc = 'proficiency_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type Project = Entry & _Node & {
  __typename?: 'Project';
  _id: Scalars['ID']['output'];
  body: Maybe<ProjectBody>;
  categories: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  demoLink: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  githubLink: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<ProjectLinkingCollections>;
  skillsUsedCollection: Maybe<ProjectSkillsUsedCollection>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectBodyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectCategoriesArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectDemoLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectGithubLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSkillsUsedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ProjectSkillsUsedCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SkillFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectBody = {
  __typename?: 'ProjectBody';
  json: Scalars['JSON']['output'];
  links: ProjectBodyLinks;
};

export type ProjectBodyAssets = {
  __typename?: 'ProjectBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProjectBodyEntries = {
  __typename?: 'ProjectBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProjectBodyLinks = {
  __typename?: 'ProjectBodyLinks';
  assets: ProjectBodyAssets;
  entries: ProjectBodyEntries;
  resources: ProjectBodyResources;
};

export type ProjectBodyResources = {
  __typename?: 'ProjectBodyResources';
  block: Array<ProjectBodyResourcesBlock>;
  hyperlink: Array<ProjectBodyResourcesHyperlink>;
  inline: Array<ProjectBodyResourcesInline>;
};

export type ProjectBodyResourcesBlock = ResourceLink & {
  __typename?: 'ProjectBodyResourcesBlock';
  sys: ResourceSys;
};

export type ProjectBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ProjectBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ProjectBodyResourcesInline = ResourceLink & {
  __typename?: 'ProjectBodyResourcesInline';
  sys: ResourceSys;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectFilter = {
  AND: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  body_contains: InputMaybe<Scalars['String']['input']>;
  body_exists: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains: InputMaybe<Scalars['String']['input']>;
  categories_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  demoLink: InputMaybe<Scalars['String']['input']>;
  demoLink_contains: InputMaybe<Scalars['String']['input']>;
  demoLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  demoLink_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  demoLink_not: InputMaybe<Scalars['String']['input']>;
  demoLink_not_contains: InputMaybe<Scalars['String']['input']>;
  demoLink_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  githubLink: InputMaybe<Scalars['String']['input']>;
  githubLink_contains: InputMaybe<Scalars['String']['input']>;
  githubLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  githubLink_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  githubLink_not: InputMaybe<Scalars['String']['input']>;
  githubLink_not_contains: InputMaybe<Scalars['String']['input']>;
  githubLink_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  skillsUsed: InputMaybe<CfSkillNestedFilter>;
  skillsUsedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ProjectOrder {
  DemoLinkAsc = 'demoLink_ASC',
  DemoLinkDesc = 'demoLink_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubLinkAsc = 'githubLink_ASC',
  GithubLinkDesc = 'githubLink_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProjectSkillsUsedCollection = {
  __typename?: 'ProjectSkillsUsedCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProjectSkillsUsedCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ProficiencyAsc = 'proficiency_ASC',
  ProficiencyDesc = 'proficiency_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  contentGroup: Maybe<ContentGroup>;
  contentGroupCollection: Maybe<ContentGroupCollection>;
  embeddedIframe: Maybe<EmbeddedIframe>;
  embeddedIframeCollection: Maybe<EmbeddedIframeCollection>;
  entryCollection: Maybe<EntryCollection>;
  feedback: Maybe<Feedback>;
  feedbackCollection: Maybe<FeedbackCollection>;
  link: Maybe<Link>;
  linkCollection: Maybe<LinkCollection>;
  page: Maybe<Page>;
  pageCollection: Maybe<PageCollection>;
  post: Maybe<Post>;
  postCategory: Maybe<PostCategory>;
  postCategoryCollection: Maybe<PostCategoryCollection>;
  postCollection: Maybe<PostCollection>;
  project: Maybe<Project>;
  projectCollection: Maybe<ProjectCollection>;
  section: Maybe<Section>;
  sectionCollection: Maybe<SectionCollection>;
  skill: Maybe<Skill>;
  skillCollection: Maybe<SkillCollection>;
  snippet: Maybe<Snippet>;
  snippetCollection: Maybe<SnippetCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryContentGroupArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentGroupOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentGroupFilter>;
};


export type QueryEmbeddedIframeArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEmbeddedIframeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EmbeddedIframeOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<EmbeddedIframeFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryFeedbackArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeedbackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FeedbackOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<FeedbackFilter>;
};


export type QueryLinkArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PageFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCategoryArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostCategoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PostCategoryFilter>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PostFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ProjectFilter>;
};


export type QuerySectionArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SectionFilter>;
};


export type QuerySkillArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SkillFilter>;
};


export type QuerySnippetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySnippetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SnippetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SnippetFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type Section = Entry & _Node & {
  __typename?: 'Section';
  _id: Scalars['ID']['output'];
  contentCollection: Maybe<SectionContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth: Maybe<Scalars['Boolean']['output']>;
  layout: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SectionLinkingCollections>;
  metaTitle: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SectionContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionFullWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionLayoutArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionMetaTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/section) */
export type SectionTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection';
  items: Array<Maybe<SectionContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionContentFilter = {
  AND: InputMaybe<Array<InputMaybe<SectionContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SectionContentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type SectionContentItem = Feedback | Skill;

export type SectionFilter = {
  AND: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  fullWidth: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not: InputMaybe<Scalars['Boolean']['input']>;
  layout: InputMaybe<Scalars['String']['input']>;
  layout_contains: InputMaybe<Scalars['String']['input']>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  layout_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not: InputMaybe<Scalars['String']['input']>;
  layout_not_contains: InputMaybe<Scalars['String']['input']>;
  layout_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SectionOrder {
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type Skill = Entry & _Node & {
  __typename?: 'Skill';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  date: Maybe<Scalars['DateTime']['output']>;
  icon: Maybe<Asset>;
  linkedFrom: Maybe<SkillLinkingCollections>;
  proficiency: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillProficiencyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type SkillCollection = {
  __typename?: 'SkillCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SkillFilter = {
  AND: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  proficiency: InputMaybe<Scalars['String']['input']>;
  proficiency_contains: InputMaybe<Scalars['String']['input']>;
  proficiency_exists: InputMaybe<Scalars['Boolean']['input']>;
  proficiency_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proficiency_not: InputMaybe<Scalars['String']['input']>;
  proficiency_not_contains: InputMaybe<Scalars['String']['input']>;
  proficiency_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SkillLinkingCollections = {
  __typename?: 'SkillLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
  projectCollection: Maybe<ProjectCollection>;
  sectionCollection: Maybe<SectionCollection>;
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type SkillLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type SkillLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsProjectCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type SkillLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsSectionCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SkillLinkingCollectionsPostCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SkillLinkingCollectionsProjectCollectionOrder {
  DemoLinkAsc = 'demoLink_ASC',
  DemoLinkDesc = 'demoLink_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubLinkAsc = 'githubLink_ASC',
  GithubLinkDesc = 'githubLink_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SkillLinkingCollectionsSectionCollectionOrder {
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SkillOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ProficiencyAsc = 'proficiency_ASC',
  ProficiencyDesc = 'proficiency_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type Snippet = Entry & _Node & {
  __typename?: 'Snippet';
  _id: Scalars['ID']['output'];
  code: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  language: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SnippetLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetCodeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetLanguageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SnippetCollection = {
  __typename?: 'SnippetCollection';
  items: Array<Maybe<Snippet>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SnippetFilter = {
  AND: InputMaybe<Array<InputMaybe<SnippetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SnippetFilter>>>;
  code: InputMaybe<Scalars['String']['input']>;
  code_contains: InputMaybe<Scalars['String']['input']>;
  code_exists: InputMaybe<Scalars['Boolean']['input']>;
  code_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code_not: InputMaybe<Scalars['String']['input']>;
  code_not_contains: InputMaybe<Scalars['String']['input']>;
  code_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Scalars['String']['input']>;
  language_contains: InputMaybe<Scalars['String']['input']>;
  language_exists: InputMaybe<Scalars['Boolean']['input']>;
  language_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_not: InputMaybe<Scalars['String']['input']>;
  language_not_contains: InputMaybe<Scalars['String']['input']>;
  language_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type SnippetLinkingCollections = {
  __typename?: 'SnippetLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SnippetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SnippetOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfPostCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfPostCategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfPostCategoryNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSkillNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  proficiency: InputMaybe<Scalars['String']['input']>;
  proficiency_contains: InputMaybe<Scalars['String']['input']>;
  proficiency_exists: InputMaybe<Scalars['Boolean']['input']>;
  proficiency_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proficiency_not: InputMaybe<Scalars['String']['input']>;
  proficiency_not_contains: InputMaybe<Scalars['String']['input']>;
  proficiency_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type AllPageSlugsQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AllPageSlugsQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, category: string | null } | null> } | null };

export type PageContentLinksFragment = { __typename?: 'PageContentLinks', entries: { __typename?: 'PageContentEntries', block: Array<
      | { __typename?: 'ContentGroup', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'EmbeddedIframe', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Feedback', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Post', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'PostCategory', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Project', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Skill', sys: { __typename?: 'Sys', id: string } }
      | { __typename?: 'Snippet', sys: { __typename?: 'Sys', id: string } }
     | null> }, assets: { __typename?: 'PageContentAssets', block: Array<{ __typename?: 'Asset', url: string | null, description: string | null, sys: { __typename?: 'Sys', id: string } } | null> } };

export type PageContentBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageContentBySlugQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, title: string | null, description: string | null, metaTitle: string | null, content: { __typename?: 'PageContent', json: any, links: { __typename?: 'PageContentLinks', entries: { __typename?: 'PageContentEntries', block: Array<
              | { __typename?: 'ContentGroup', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'EmbeddedIframe', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Feedback', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Post', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'PostCategory', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Project', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Skill', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Snippet', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'PageContentAssets', block: Array<{ __typename?: 'Asset', url: string | null, description: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type CategoryContentFragment = { __typename?: 'Page', slug: string | null, category: string | null, description: string | null, title: string | null };

export type CategoryQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  category: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, category: string | null, description: string | null, title: string | null } | null> } | null };

export type FeedbackFragment = { __typename: 'Feedback', author: string | null, authorRole: string | null, date: any | null, comments: string | null, url: string | null, sys: { __typename?: 'Sys', id: string }, authorImage: { __typename?: 'Asset', url: string | null, description: string | null } | null };

export type SectionFragmentFragment = { __typename?: 'Section', title: string | null, layout: string | null, fullWidth: boolean | null, contentCollection: { __typename?: 'SectionContentCollection', items: Array<
      | { __typename: 'Feedback', author: string | null, authorRole: string | null, date: any | null, comments: string | null, url: string | null, sys: { __typename?: 'Sys', id: string }, authorImage: { __typename?: 'Asset', url: string | null, description: string | null } | null }
      | { __typename: 'Skill', title: string | null, date: any | null, proficiency: string | null, slug: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', url: string | null, description: string | null } | null }
     | null> } | null };

export type SectionContentQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
}>;


export type SectionContentQuery = { __typename?: 'Query', section: { __typename?: 'SectionCollection', items: Array<{ __typename?: 'Section', title: string | null, layout: string | null, fullWidth: boolean | null, contentCollection: { __typename?: 'SectionContentCollection', items: Array<
          | { __typename: 'Feedback', author: string | null, authorRole: string | null, date: any | null, comments: string | null, url: string | null, sys: { __typename?: 'Sys', id: string }, authorImage: { __typename?: 'Asset', url: string | null, description: string | null } | null }
          | { __typename: 'Skill', title: string | null, date: any | null, proficiency: string | null, slug: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', url: string | null, description: string | null } | null }
         | null> } | null } | null> } | null };

export type SiteFooterContentQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteFooterContentQuery = { __typename?: 'Query', social: { __typename?: 'LinkCollection', items: Array<{ __typename?: 'Link', label: string | null, url: string | null } | null> } | null };

export type HeaderLinkFragment = { __typename?: 'Link', label: string | null, url: string | null };

export type CategoryFragment = { __typename?: 'Page', category: string | null };

export type UniquePageFragment = { __typename?: 'Page', metaTitle: string | null, slug: string | null };

export type HeaderContentQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderContentQuery = { __typename?: 'Query', social: { __typename?: 'LinkCollection', items: Array<{ __typename?: 'Link', label: string | null, url: string | null } | null> } | null, categories: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', category: string | null } | null> } | null, uniquePages: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', metaTitle: string | null, slug: string | null } | null> } | null };

export type SkillFragment = { __typename: 'Skill', title: string | null, date: any | null, proficiency: string | null, slug: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', url: string | null, description: string | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const PageContentLinksFragmentDoc = new TypedDocumentString(`
    fragment PageContentLinks on PageContentLinks {
  entries {
    block {
      sys {
        id
      }
      ... on Section {
        __typename
        sys {
          id
        }
      }
      ... on Skill {
        __typename
        sys {
          id
        }
      }
    }
  }
  assets {
    block {
      sys {
        id
      }
      url
      description
    }
  }
}
    `, {"fragmentName":"PageContentLinks"}) as unknown as TypedDocumentString<PageContentLinksFragment, unknown>;
export const CategoryContentFragmentDoc = new TypedDocumentString(`
    fragment CategoryContent on Page {
  slug
  category
  description
  title
}
    `, {"fragmentName":"CategoryContent"}) as unknown as TypedDocumentString<CategoryContentFragment, unknown>;
export const FeedbackFragmentDoc = new TypedDocumentString(`
    fragment Feedback on Feedback {
  __typename
  sys {
    id
  }
  author
  authorRole
  authorImage {
    url
    description
  }
  date
  comments
  url
}
    `, {"fragmentName":"Feedback"}) as unknown as TypedDocumentString<FeedbackFragment, unknown>;
export const SkillFragmentDoc = new TypedDocumentString(`
    fragment Skill on Skill {
  __typename
  sys {
    id
  }
  title
  date
  proficiency
  slug
  icon {
    url
    description
  }
}
    `, {"fragmentName":"Skill"}) as unknown as TypedDocumentString<SkillFragment, unknown>;
export const SectionFragmentFragmentDoc = new TypedDocumentString(`
    fragment SectionFragment on Section {
  title
  layout
  fullWidth
  contentCollection(limit: 100) {
    items {
      ... on Feedback {
        ...Feedback
      }
      ... on Skill {
        ...Skill
      }
    }
  }
}
    fragment Feedback on Feedback {
  __typename
  sys {
    id
  }
  author
  authorRole
  authorImage {
    url
    description
  }
  date
  comments
  url
}
fragment Skill on Skill {
  __typename
  sys {
    id
  }
  title
  date
  proficiency
  slug
  icon {
    url
    description
  }
}`, {"fragmentName":"SectionFragment"}) as unknown as TypedDocumentString<SectionFragmentFragment, unknown>;
export const HeaderLinkFragmentDoc = new TypedDocumentString(`
    fragment HeaderLink on Link {
  label
  url
}
    `, {"fragmentName":"HeaderLink"}) as unknown as TypedDocumentString<HeaderLinkFragment, unknown>;
export const CategoryFragmentDoc = new TypedDocumentString(`
    fragment Category on Page {
  category
}
    `, {"fragmentName":"Category"}) as unknown as TypedDocumentString<CategoryFragment, unknown>;
export const UniquePageFragmentDoc = new TypedDocumentString(`
    fragment UniquePage on Page {
  metaTitle
  slug
}
    `, {"fragmentName":"UniquePage"}) as unknown as TypedDocumentString<UniquePageFragment, unknown>;
export const AllPageSlugsDocument = new TypedDocumentString(`
    query AllPageSlugs($preview: Boolean = false) {
  pageCollection(limit: 100, preview: $preview) {
    items {
      slug
      category
    }
  }
}
    `) as unknown as TypedDocumentString<AllPageSlugsQuery, AllPageSlugsQueryVariables>;
export const PageContentBySlugDocument = new TypedDocumentString(`
    query PageContentBySlug($slug: String, $preview: Boolean = false) {
  pageCollection(preview: $preview, where: {slug: $slug}, limit: 1) {
    items {
      slug
      title
      description
      metaTitle
      content {
        json
        links {
          ...PageContentLinks
        }
      }
    }
  }
}
    fragment PageContentLinks on PageContentLinks {
  entries {
    block {
      sys {
        id
      }
      ... on Section {
        __typename
        sys {
          id
        }
      }
      ... on Skill {
        __typename
        sys {
          id
        }
      }
    }
  }
  assets {
    block {
      sys {
        id
      }
      url
      description
    }
  }
}`) as unknown as TypedDocumentString<PageContentBySlugQuery, PageContentBySlugQueryVariables>;
export const CategoryDocument = new TypedDocumentString(`
    query Category($preview: Boolean = false, $category: String) {
  pageCollection(where: {category: $category}, limit: 100, preview: $preview) {
    items {
      ...CategoryContent
    }
  }
}
    fragment CategoryContent on Page {
  slug
  category
  description
  title
}`) as unknown as TypedDocumentString<CategoryQuery, CategoryQueryVariables>;
export const SectionContentDocument = new TypedDocumentString(`
    query SectionContent($preview: Boolean = false, $id: String!) {
  section: sectionCollection(limit: 1, where: {sys: {id: $id}}, preview: $preview) {
    items {
      ...SectionFragment
    }
  }
}
    fragment Feedback on Feedback {
  __typename
  sys {
    id
  }
  author
  authorRole
  authorImage {
    url
    description
  }
  date
  comments
  url
}
fragment SectionFragment on Section {
  title
  layout
  fullWidth
  contentCollection(limit: 100) {
    items {
      ... on Feedback {
        ...Feedback
      }
      ... on Skill {
        ...Skill
      }
    }
  }
}
fragment Skill on Skill {
  __typename
  sys {
    id
  }
  title
  date
  proficiency
  slug
  icon {
    url
    description
  }
}`) as unknown as TypedDocumentString<SectionContentQuery, SectionContentQueryVariables>;
export const SiteFooterContentDocument = new TypedDocumentString(`
    query SiteFooterContent {
  social: linkCollection(where: {label_in: ["LinkedIn", "Github"]}) {
    items {
      label
      url
    }
  }
}
    `) as unknown as TypedDocumentString<SiteFooterContentQuery, SiteFooterContentQueryVariables>;
export const HeaderContentDocument = new TypedDocumentString(`
    query HeaderContent {
  social: linkCollection(where: {label_in: ["LinkedIn", "Github"]}) {
    items {
      ...HeaderLink
    }
  }
  categories: pageCollection(where: {category_exists: true}) {
    items {
      ...Category
    }
  }
  uniquePages: pageCollection(where: {category_exists: false, slug_not: "/"}) {
    items {
      ...UniquePage
    }
  }
}
    fragment HeaderLink on Link {
  label
  url
}
fragment Category on Page {
  category
}
fragment UniquePage on Page {
  metaTitle
  slug
}`) as unknown as TypedDocumentString<HeaderContentQuery, HeaderContentQueryVariables>;