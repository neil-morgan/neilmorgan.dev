import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
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
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

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
export type Feedback = Entry & {
  __typename?: 'Feedback';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<FeedbackLinkingCollections>;
  name: Maybe<Scalars['String']['output']>;
  role: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/feedback) */
export type FeedbackRoleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role: InputMaybe<Scalars['String']['input']>;
  role_contains: InputMaybe<Scalars['String']['input']>;
  role_exists: InputMaybe<Scalars['Boolean']['input']>;
  role_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not: InputMaybe<Scalars['String']['input']>;
  role_not_contains: InputMaybe<Scalars['String']['input']>;
  role_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type FeedbackLinkingCollections = {
  __typename?: 'FeedbackLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type FeedbackLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeedbackOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
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

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  body: Maybe<PostBody>;
  category: Maybe<PostCategory>;
  contentfulMetadata: ContentfulMetadata;
  date: Maybe<Scalars['DateTime']['output']>;
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
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostCategoryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PostCategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostTagsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostTagsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SkillFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategory = Entry & {
  __typename?: 'PostCategory';
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
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategoryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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
};


export type PostCategoryLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostCategoryLinkingCollectionsPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PostCategoryLinkingCollectionsPostCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
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
  date: InputMaybe<Scalars['DateTime']['input']>;
  date_exists: InputMaybe<Scalars['Boolean']['input']>;
  date_gt: InputMaybe<Scalars['DateTime']['input']>;
  date_gte: InputMaybe<Scalars['DateTime']['input']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt: InputMaybe<Scalars['DateTime']['input']>;
  date_lte: InputMaybe<Scalars['DateTime']['input']>;
  date_not: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
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
};

export enum PostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
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
export type Project = Entry & {
  __typename?: 'Project';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ProjectLinkingCollections>;
  skillsCollection: Maybe<ProjectSkillsCollection>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ProjectSkillsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SkillFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  skills: InputMaybe<CfSkillNestedFilter>;
  skillsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
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
};

export enum ProjectOrder {
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

export type ProjectSkillsCollection = {
  __typename?: 'ProjectSkillsCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProjectSkillsCollectionOrder {
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
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  feedback: Maybe<Feedback>;
  feedbackCollection: Maybe<FeedbackCollection>;
  post: Maybe<Post>;
  postCategory: Maybe<PostCategory>;
  postCategoryCollection: Maybe<PostCategoryCollection>;
  postCollection: Maybe<PostCollection>;
  project: Maybe<Project>;
  projectCollection: Maybe<ProjectCollection>;
  skill: Maybe<Skill>;
  skillCategory: Maybe<SkillCategory>;
  skillCategoryCollection: Maybe<SkillCategoryCollection>;
  skillCollection: Maybe<SkillCollection>;
  snippet: Maybe<Snippet>;
  snippetCollection: Maybe<SnippetCollection>;
  socialItem: Maybe<SocialItem>;
  socialItemCollection: Maybe<SocialItemCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryFeedbackArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeedbackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FeedbackOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<FeedbackFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCategoryArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostCategoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostCategoryFilter>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProjectFilter>;
};


export type QuerySkillArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillCategoryArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillCategoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SkillCategoryFilter>;
};


export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SkillFilter>;
};


export type QuerySnippetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySnippetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SnippetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SnippetFilter>;
};


export type QuerySocialItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySocialItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SocialItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SocialItemFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type Skill = Entry & {
  __typename?: 'Skill';
  category: Maybe<SkillCategory>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<SkillLinkingCollections>;
  proficiency: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillCategoryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SkillCategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillProficiencyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategory = Entry & {
  __typename?: 'SkillCategory';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<SkillCategoryLinkingCollections>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategorySlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategoryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SkillCategoryCollection = {
  __typename?: 'SkillCategoryCollection';
  items: Array<Maybe<SkillCategory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SkillCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<SkillCategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SkillCategoryFilter>>>;
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

export type SkillCategoryLinkingCollections = {
  __typename?: 'SkillCategoryLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  skillCollection: Maybe<SkillCollection>;
};


export type SkillCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SkillCategoryLinkingCollectionsSkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillCategoryLinkingCollectionsSkillCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SkillCategoryLinkingCollectionsSkillCollectionOrder {
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

export enum SkillCategoryOrder {
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
  category: InputMaybe<CfSkillCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
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
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SkillLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SkillLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsProjectCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SkillLinkingCollectionsPostCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
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

export enum SkillOrder {
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
export type Snippet = Entry & {
  __typename?: 'Snippet';
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
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetLanguageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItem = Entry & {
  __typename?: 'SocialItem';
  contentfulMetadata: ContentfulMetadata;
  href: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SocialItemLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemHrefArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SocialItemCollection = {
  __typename?: 'SocialItemCollection';
  items: Array<Maybe<SocialItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SocialItemFilter = {
  AND: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  href: InputMaybe<Scalars['String']['input']>;
  href_contains: InputMaybe<Scalars['String']['input']>;
  href_exists: InputMaybe<Scalars['Boolean']['input']>;
  href_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not: InputMaybe<Scalars['String']['input']>;
  href_not_contains: InputMaybe<Scalars['String']['input']>;
  href_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialItemLinkingCollections = {
  __typename?: 'SocialItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SocialItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SocialItemOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
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

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
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

export type CfSkillCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSkillCategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSkillCategoryNestedFilter>>>;
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
  category_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
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

export type PostCategoryFragmentFragment = { __typename?: 'PostCategory', title: string | null, slug: string | null };

export type SkillCategoryFragmentFragment = { __typename?: 'SkillCategory', title: string | null, slug: string | null };

export type AllFeedbackQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFeedbackQuery = { __typename?: 'Query', allFeedback: { __typename?: 'FeedbackCollection', items: Array<{ __typename?: 'Feedback', name: string | null } | null> } | null };

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title: string | null, description: string | null, date: any | null, slug: string | null, sys: { __typename?: 'Sys', id: string }, tagsCollection: { __typename?: 'PostTagsCollection', items: Array<{ __typename?: 'Skill', title: string | null, slug: string | null } | null> } | null, category: { __typename?: 'PostCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type AllPostsCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AllPostsCategoryQuery = { __typename?: 'Query', posts: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title: string | null, description: string | null, date: any | null, slug: string | null, tagsCollection: { __typename?: 'PostTagsCollection', items: Array<{ __typename?: 'Skill', title: string | null } | null> } | null, category: { __typename?: 'PostCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { __typename?: 'Query', allProjects: { __typename?: 'ProjectCollection', items: Array<{ __typename?: 'Project', title: string | null } | null> } | null };

export type AllSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSkillsQuery = { __typename?: 'Query', allSkills: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', title: string | null, proficiency: string | null, category: { __typename?: 'SkillCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type AllSkillsCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AllSkillsCategoryQuery = { __typename?: 'Query', skills: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', title: string | null, proficiency: string | null, category: { __typename?: 'SkillCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type CategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', skill: { __typename?: 'SkillCategoryCollection', items: Array<{ __typename?: 'SkillCategory', title: string | null, slug: string | null } | null> } | null, post: { __typename?: 'PostCategoryCollection', items: Array<{ __typename?: 'PostCategory', title: string | null, slug: string | null } | null> } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', postCategories: { __typename?: 'PostCategoryCollection', items: Array<{ __typename?: 'PostCategory', title: string | null, slug: string | null } | null> } | null, skillCategories: { __typename?: 'SkillCategoryCollection', items: Array<{ __typename?: 'SkillCategory', title: string | null, slug: string | null } | null> } | null, socialItems: { __typename?: 'SocialItemCollection', items: Array<{ __typename?: 'SocialItem', title: string | null, href: string | null } | null> } | null };

export type PostQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title: string | null, description: string | null, date: any | null, slug: string | null, sys: { __typename?: 'Sys', id: string }, tagsCollection: { __typename?: 'PostTagsCollection', items: Array<{ __typename?: 'Skill', title: string | null } | null> } | null, category: { __typename?: 'PostCategory', title: string | null, slug: string | null } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, url: string | null } | null, body: { __typename?: 'PostBody', json: any, links: { __typename?: 'PostBodyLinks', entries: { __typename?: 'PostBodyEntries', inline: Array<{ __typename: 'Feedback', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Post', title: string | null, slug: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'PostCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Project', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Skill', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SkillCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Snippet', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SocialItem', sys: { __typename?: 'Sys', id: string } } | null>, block: Array<{ __typename: 'Feedback', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Post', title: string | null, slug: string | null, description: string | null, category: { __typename?: 'PostCategory', title: string | null, slug: string | null } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'PostCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Project', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Skill', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SkillCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Snippet', description: string | null, language: string | null, code: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'SocialItem', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'PostBodyAssets', block: Array<{ __typename?: 'Asset', url: string | null, description: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type PostSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostSlugsQuery = { __typename?: 'Query', postSlugs: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string | null, category: { __typename?: 'PostCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type ProjectQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename?: 'ProjectCollection', items: Array<{ __typename?: 'Project', title: string | null, slug: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type ProjectSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectSlugsQuery = { __typename?: 'Query', projectSlugs: { __typename?: 'ProjectCollection', items: Array<{ __typename?: 'Project', slug: string | null } | null> } | null };

export type SkillQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SkillQuery = { __typename?: 'Query', skill: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', title: string | null, slug: string | null, proficiency: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, slugs: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', slug: string | null, category: { __typename?: 'SkillCategory', title: string | null, slug: string | null } | null } | null> } | null };

export type SkillSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillSlugsQuery = { __typename?: 'Query', skillSlugs: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', slug: string | null } | null> } | null };

export const PostCategoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<PostCategoryFragmentFragment, unknown>;
export const SkillCategoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<SkillCategoryFragmentFragment, unknown>;
export const AllFeedbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllFeedback"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allFeedback"},"name":{"kind":"Name","value":"feedbackCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AllFeedbackQuery, AllFeedbackQueryVariables>;
export const AllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"posts"},"name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"date_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tagsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AllPostsQuery, AllPostsQueryVariables>;
export const AllPostsCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPostsCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"posts"},"name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tagsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AllPostsCategoryQuery, AllPostsCategoryQueryVariables>;
export const AllProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allProjects"},"name":{"kind":"Name","value":"projectCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<AllProjectsQuery, AllProjectsQueryVariables>;
export const AllSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allSkills"},"name":{"kind":"Name","value":"skillCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"proficiency"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AllSkillsQuery, AllSkillsQueryVariables>;
export const AllSkillsCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSkillsCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"skills"},"name":{"kind":"Name","value":"skillCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"proficiency"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AllSkillsCategoryQuery, AllSkillsCategoryQueryVariables>;
export const CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Category"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"skill"},"name":{"kind":"Name","value":"skillCategoryCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCategoryFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"post"},"name":{"kind":"Name","value":"postCategoryCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;
export const HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"postCategories"},"name":{"kind":"Name","value":"postCategoryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"skillCategories"},"name":{"kind":"Name","value":"skillCategoryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCategoryFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"socialItems"},"name":{"kind":"Name","value":"socialItemCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"post"},"name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tagsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snippet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
export const PostSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"postSlugs"},"name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<PostSlugsQuery, PostSlugsQueryVariables>;
export const ProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Project"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"project"},"name":{"kind":"Name","value":"projectCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectQuery, ProjectQueryVariables>;
export const ProjectSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"projectSlugs"},"name":{"kind":"Name","value":"projectCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectSlugsQuery, ProjectSlugsQueryVariables>;
export const SkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Skill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"skill"},"name":{"kind":"Name","value":"skillCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"proficiency"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"skillCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCategoryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkillCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<SkillQuery, SkillQueryVariables>;
export const SkillSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SkillSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"skillSlugs"},"name":{"kind":"Name","value":"skillCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<SkillSlugsQuery, SkillSlugsQueryVariables>;