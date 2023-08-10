import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any };
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any };
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars["String"]["output"]>;
  fileName: Maybe<Scalars["String"]["output"]>;
  height: Maybe<Scalars["Int"]["output"]>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
  url: Maybe<Scalars["String"]["output"]>;
  width: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  transform: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height: InputMaybe<Scalars["Int"]["input"]>;
  height_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt: InputMaybe<Scalars["Int"]["input"]>;
  height_gte: InputMaybe<Scalars["Int"]["input"]>;
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt: InputMaybe<Scalars["Int"]["input"]>;
  height_lte: InputMaybe<Scalars["Int"]["input"]>;
  height_not: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size: InputMaybe<Scalars["Int"]["input"]>;
  size_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt: InputMaybe<Scalars["Int"]["input"]>;
  size_gte: InputMaybe<Scalars["Int"]["input"]>;
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt: InputMaybe<Scalars["Int"]["input"]>;
  size_lte: InputMaybe<Scalars["Int"]["input"]>;
  size_not: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url: InputMaybe<Scalars["String"]["input"]>;
  url_contains: InputMaybe<Scalars["String"]["input"]>;
  url_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains: InputMaybe<Scalars["String"]["input"]>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width: InputMaybe<Scalars["Int"]["input"]>;
  width_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt: InputMaybe<Scalars["Int"]["input"]>;
  width_gte: InputMaybe<Scalars["Int"]["input"]>;
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt: InputMaybe<Scalars["Int"]["input"]>;
  width_lte: InputMaybe<Scalars["Int"]["input"]>;
  width_not: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsPostCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetLinkingCollectionsPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id: Maybe<Scalars["String"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPostData: Maybe<PostData>;
  deletePostData: Maybe<PostData>;
  updatePostData: Maybe<PostData>;
};

export type MutationCreatePostDataArgs = {
  _id: InputMaybe<Scalars["ID"]["input"]>;
  likes: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeletePostDataArgs = {
  _id: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdatePostDataArgs = {
  _id: InputMaybe<Scalars["ID"]["input"]>;
  likes: InputMaybe<Scalars["Int"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type Post = Entry & {
  __typename?: "Post";
  body: Maybe<PostBody>;
  category: Maybe<PostCategory>;
  contentfulMetadata: ContentfulMetadata;
  date: Maybe<Scalars["DateTime"]["output"]>;
  description: Maybe<Scalars["String"]["output"]>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<PostLinkingCollections>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostBodyArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostCategoryArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<PostCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostDateArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/post) */
export type PostTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type PostBody = {
  __typename?: "PostBody";
  json: Scalars["JSON"]["output"];
  links: PostBodyLinks;
};

export type PostBodyAssets = {
  __typename?: "PostBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostBodyEntries = {
  __typename?: "PostBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostBodyLinks = {
  __typename?: "PostBodyLinks";
  assets: PostBodyAssets;
  entries: PostBodyEntries;
  resources: PostBodyResources;
};

export type PostBodyResources = {
  __typename?: "PostBodyResources";
  block: Array<ResourceLink>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategory = Entry & {
  __typename?: "PostCategory";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<PostCategoryLinkingCollections>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategorySlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/postCategory) */
export type PostCategoryTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type PostCategoryCollection = {
  __typename?: "PostCategoryCollection";
  items: Array<Maybe<PostCategory>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PostCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<PostCategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostCategoryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostCategoryLinkingCollections = {
  __typename?: "PostCategoryLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};

export type PostCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostCategoryLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<PostCategoryLinkingCollectionsPostCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PostCategoryLinkingCollectionsPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum PostCategoryOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PostCollection = {
  __typename?: "PostCollection";
  items: Array<Maybe<Post>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PostData = {
  __typename?: "PostData";
  _id: Maybe<Scalars["ID"]["output"]>;
  likes: Maybe<Scalars["Int"]["output"]>;
};

export type PostFilter = {
  AND: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostFilter>>>;
  body_contains: InputMaybe<Scalars["String"]["input"]>;
  body_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains: InputMaybe<Scalars["String"]["input"]>;
  category: InputMaybe<CfPostCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostLinkingCollections = {
  __typename?: "PostLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PostOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type Project = Entry & {
  __typename?: "Project";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ProjectLinkingCollections>;
  skillsCollection: Maybe<ProjectSkillsCollection>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ProjectSkillsCollectionOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<SkillFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/project) */
export type ProjectTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectCollection = {
  __typename?: "ProjectCollection";
  items: Array<Maybe<Project>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ProjectFilter = {
  AND: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  skills: InputMaybe<CfSkillNestedFilter>;
  skillsCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ProjectLinkingCollections = {
  __typename?: "ProjectLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ProjectSkillsCollection = {
  __typename?: "ProjectSkillsCollection";
  items: Array<Maybe<Skill>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum ProjectSkillsCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Query = {
  __typename?: "Query";
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  post: Maybe<Post>;
  postCategory: Maybe<PostCategory>;
  postCategoryCollection: Maybe<PostCategoryCollection>;
  postCollection: Maybe<PostCollection>;
  postData: Maybe<PostData>;
  postsData: Maybe<Array<Maybe<PostData>>>;
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

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<AssetFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<EntryFilter>;
};

export type QueryPostArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPostCategoryArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPostCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<PostCategoryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<PostCategoryFilter>;
};

export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<PostFilter>;
};

export type QueryPostDataArgs = {
  _id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryProjectArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ProjectFilter>;
};

export type QuerySkillArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySkillCategoryArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySkillCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<SkillCategoryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<SkillCategoryFilter>;
};

export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<SkillFilter>;
};

export type QuerySnippetArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySnippetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<SnippetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<SnippetFilter>;
};

export type QuerySocialItemArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySocialItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<SocialItemOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<SocialItemFilter>;
};

export type ResourceLink = {
  __typename?: "ResourceLink";
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type Skill = Entry & {
  __typename?: "Skill";
  category: Maybe<SkillCategory>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<SkillLinkingCollections>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillCategoryArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<SkillCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skill) */
export type SkillTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategory = Entry & {
  __typename?: "SkillCategory";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<SkillCategoryLinkingCollections>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategorySlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/skillCategory) */
export type SkillCategoryTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type SkillCategoryCollection = {
  __typename?: "SkillCategoryCollection";
  items: Array<Maybe<SkillCategory>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SkillCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<SkillCategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SkillCategoryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SkillCategoryLinkingCollections = {
  __typename?: "SkillCategoryLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  skillCollection: Maybe<SkillCollection>;
};

export type SkillCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SkillCategoryLinkingCollectionsSkillCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<SkillCategoryLinkingCollectionsSkillCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SkillCategoryLinkingCollectionsSkillCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SkillCategoryOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type SkillCollection = {
  __typename?: "SkillCollection";
  items: Array<Maybe<Skill>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SkillFilter = {
  AND: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  category: InputMaybe<CfSkillCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SkillLinkingCollections = {
  __typename?: "SkillLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  projectCollection: Maybe<ProjectCollection>;
};

export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SkillLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<
    Array<InputMaybe<SkillLinkingCollectionsProjectCollectionOrder>>
  >;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SkillLinkingCollectionsProjectCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SkillOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type Snippet = Entry & {
  __typename?: "Snippet";
  code: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars["String"]["output"]>;
  language: Maybe<Scalars["String"]["output"]>;
  linkedFrom: Maybe<SnippetLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetCodeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetLanguageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/snippet) */
export type SnippetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SnippetCollection = {
  __typename?: "SnippetCollection";
  items: Array<Maybe<Snippet>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SnippetFilter = {
  AND: InputMaybe<Array<InputMaybe<SnippetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SnippetFilter>>>;
  code: InputMaybe<Scalars["String"]["input"]>;
  code_contains: InputMaybe<Scalars["String"]["input"]>;
  code_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  code_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  code_not: InputMaybe<Scalars["String"]["input"]>;
  code_not_contains: InputMaybe<Scalars["String"]["input"]>;
  code_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  language: InputMaybe<Scalars["String"]["input"]>;
  language_contains: InputMaybe<Scalars["String"]["input"]>;
  language_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  language_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  language_not: InputMaybe<Scalars["String"]["input"]>;
  language_not_contains: InputMaybe<Scalars["String"]["input"]>;
  language_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
};

export type SnippetLinkingCollections = {
  __typename?: "SnippetLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type SnippetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SnippetOrder {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  LanguageAsc = "language_ASC",
  LanguageDesc = "language_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItem = Entry & {
  __typename?: "SocialItem";
  contentfulMetadata: ContentfulMetadata;
  href: Maybe<Scalars["String"]["output"]>;
  linkedFrom: Maybe<SocialItemLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemHrefArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/96c2x2gvt3wj/content_types/socialItem) */
export type SocialItemTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type SocialItemCollection = {
  __typename?: "SocialItemCollection";
  items: Array<Maybe<SocialItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SocialItemFilter = {
  AND: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  href: InputMaybe<Scalars["String"]["input"]>;
  href_contains: InputMaybe<Scalars["String"]["input"]>;
  href_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  href_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  href_not: InputMaybe<Scalars["String"]["input"]>;
  href_not_contains: InputMaybe<Scalars["String"]["input"]>;
  href_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SocialItemLinkingCollections = {
  __typename?: "SocialItemLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type SocialItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum SocialItemOrder {
  HrefAsc = "href_ASC",
  HrefDesc = "href_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id: InputMaybe<Scalars["String"]["input"]>;
  id_contains: InputMaybe<Scalars["String"]["input"]>;
  id_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains: InputMaybe<Scalars["String"]["input"]>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedVersion_lt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

export type CfPostCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfPostCategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfPostCategoryNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfSkillCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSkillCategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSkillCategoryNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfSkillNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
  category_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostCategoryContentFragmentFragment = {
  __typename?: "PostCategory";
  title: string | null;
  slug: string | null;
};

export type PostContentFragment = {
  __typename?: "Post";
  title: string | null;
  description: string | null;
  date: any | null;
  slug: string | null;
  sys: { __typename?: "Sys"; id: string };
  category: {
    __typename?: "PostCategory";
    title: string | null;
    slug: string | null;
  } | null;
  image: {
    __typename?: "Asset";
    title: string | null;
    description: string | null;
    url: string | null;
  } | null;
  body: {
    __typename?: "PostBody";
    json: any;
    links: {
      __typename?: "PostBodyLinks";
      entries: {
        __typename?: "PostBodyEntries";
        inline: Array<
          | {
              __typename: "Post";
              title: string | null;
              slug: string | null;
              sys: { __typename?: "Sys"; id: string };
            }
          | {
              __typename: "PostCategory";
              sys: { __typename?: "Sys"; id: string };
            }
          | { __typename: "Project"; sys: { __typename?: "Sys"; id: string } }
          | { __typename: "Skill"; sys: { __typename?: "Sys"; id: string } }
          | {
              __typename: "SkillCategory";
              sys: { __typename?: "Sys"; id: string };
            }
          | { __typename: "Snippet"; sys: { __typename?: "Sys"; id: string } }
          | {
              __typename: "SocialItem";
              sys: { __typename?: "Sys"; id: string };
            }
          | null
        >;
        block: Array<
          | {
              __typename: "Post";
              title: string | null;
              slug: string | null;
              description: string | null;
              category: {
                __typename?: "PostCategory";
                title: string | null;
                slug: string | null;
              } | null;
              sys: { __typename?: "Sys"; id: string };
            }
          | {
              __typename: "PostCategory";
              sys: { __typename?: "Sys"; id: string };
            }
          | { __typename: "Project"; sys: { __typename?: "Sys"; id: string } }
          | { __typename: "Skill"; sys: { __typename?: "Sys"; id: string } }
          | {
              __typename: "SkillCategory";
              sys: { __typename?: "Sys"; id: string };
            }
          | {
              __typename: "Snippet";
              description: string | null;
              language: string | null;
              code: string | null;
              sys: { __typename?: "Sys"; id: string };
            }
          | {
              __typename: "SocialItem";
              sys: { __typename?: "Sys"; id: string };
            }
          | null
        >;
      };
      assets: {
        __typename?: "PostBodyAssets";
        block: Array<{
          __typename?: "Asset";
          url: string | null;
          description: string | null;
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      };
    };
  } | null;
};

export type CreatePostDataByIdMutationVariables = Exact<{
  likes: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type CreatePostDataByIdMutation = {
  __typename?: "Mutation";
  createPostData: {
    __typename?: "PostData";
    likes: number | null;
    _id: string | null;
  } | null;
};

export type UpdatePostLikesByIdMutationVariables = Exact<{
  id: InputMaybe<Scalars["ID"]["input"]>;
  likes: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type UpdatePostLikesByIdMutation = {
  __typename?: "Mutation";
  updatePostData: {
    __typename?: "PostData";
    likes: number | null;
    _id: string | null;
  } | null;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsQuery = {
  __typename?: "Query";
  postCollection: {
    __typename?: "PostCollection";
    items: Array<{
      __typename?: "Post";
      title: string | null;
      description: string | null;
      date: any | null;
      slug: string | null;
      sys: { __typename?: "Sys"; id: string };
      category: {
        __typename?: "PostCategory";
        title: string | null;
        slug: string | null;
      } | null;
    } | null>;
  } | null;
};

export type AllPostsDataQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsDataQuery = {
  __typename?: "Query";
  postsData: Array<{
    __typename?: "PostData";
    _id: string | null;
    likes: number | null;
  } | null> | null;
};

export type AllPostsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsSlugsQuery = {
  __typename?: "Query";
  postCollection: {
    __typename?: "PostCollection";
    items: Array<{
      __typename?: "Post";
      slug: string | null;
      category: {
        __typename?: "PostCategory";
        title: string | null;
        slug: string | null;
      } | null;
    } | null>;
  } | null;
};

export type CategoryBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type CategoryBySlugQuery = {
  __typename?: "Query";
  postCategoryCollection: {
    __typename?: "PostCategoryCollection";
    items: Array<{
      __typename?: "PostCategory";
      title: string | null;
      slug: string | null;
    } | null>;
  } | null;
};

export type CategoryPageQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type CategoryPageQuery = {
  __typename?: "Query";
  postCollection: {
    __typename?: "PostCollection";
    items: Array<{
      __typename?: "Post";
      title: string | null;
      description: string | null;
      date: any | null;
      slug: string | null;
      category: {
        __typename?: "PostCategory";
        title: string | null;
        slug: string | null;
      } | null;
    } | null>;
  } | null;
  postCategoryCollection: {
    __typename?: "PostCategoryCollection";
    items: Array<{
      __typename?: "PostCategory";
      title: string | null;
      slug: string | null;
    } | null>;
  } | null;
};

export type GetLayoutQueryVariables = Exact<{ [key: string]: never }>;

export type GetLayoutQuery = {
  __typename?: "Query";
  postCategoryCollection: {
    __typename?: "PostCategoryCollection";
    items: Array<{
      __typename?: "PostCategory";
      title: string | null;
      slug: string | null;
    } | null>;
  } | null;
  socialItemCollection: {
    __typename?: "SocialItemCollection";
    items: Array<{
      __typename?: "SocialItem";
      title: string | null;
      href: string | null;
    } | null>;
  } | null;
};

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type PostBySlugQuery = {
  __typename?: "Query";
  postCollection: {
    __typename?: "PostCollection";
    items: Array<{
      __typename?: "Post";
      title: string | null;
      description: string | null;
      date: any | null;
      slug: string | null;
      sys: { __typename?: "Sys"; id: string };
      category: {
        __typename?: "PostCategory";
        title: string | null;
        slug: string | null;
      } | null;
      image: {
        __typename?: "Asset";
        title: string | null;
        description: string | null;
        url: string | null;
      } | null;
      body: {
        __typename?: "PostBody";
        json: any;
        links: {
          __typename?: "PostBodyLinks";
          entries: {
            __typename?: "PostBodyEntries";
            inline: Array<
              | {
                  __typename: "Post";
                  title: string | null;
                  slug: string | null;
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "PostCategory";
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "Project";
                  sys: { __typename?: "Sys"; id: string };
                }
              | { __typename: "Skill"; sys: { __typename?: "Sys"; id: string } }
              | {
                  __typename: "SkillCategory";
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "Snippet";
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "SocialItem";
                  sys: { __typename?: "Sys"; id: string };
                }
              | null
            >;
            block: Array<
              | {
                  __typename: "Post";
                  title: string | null;
                  slug: string | null;
                  description: string | null;
                  category: {
                    __typename?: "PostCategory";
                    title: string | null;
                    slug: string | null;
                  } | null;
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "PostCategory";
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "Project";
                  sys: { __typename?: "Sys"; id: string };
                }
              | { __typename: "Skill"; sys: { __typename?: "Sys"; id: string } }
              | {
                  __typename: "SkillCategory";
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "Snippet";
                  description: string | null;
                  language: string | null;
                  code: string | null;
                  sys: { __typename?: "Sys"; id: string };
                }
              | {
                  __typename: "SocialItem";
                  sys: { __typename?: "Sys"; id: string };
                }
              | null
            >;
          };
          assets: {
            __typename?: "PostBodyAssets";
            block: Array<{
              __typename?: "Asset";
              url: string | null;
              description: string | null;
              sys: { __typename?: "Sys"; id: string };
            } | null>;
          };
        };
      } | null;
    } | null>;
  } | null;
};

export type PostCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type PostCategoriesQuery = {
  __typename?: "Query";
  postCategoryCollection: {
    __typename?: "PostCategoryCollection";
    items: Array<{
      __typename?: "PostCategory";
      title: string | null;
      slug: string | null;
    } | null>;
  } | null;
};

export type PostDataByIdQueryVariables = Exact<{
  id: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type PostDataByIdQuery = {
  __typename?: "Query";
  postData: {
    __typename?: "PostData";
    _id: string | null;
    likes: number | null;
  } | null;
};

export type PostsByCategoryQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type PostsByCategoryQuery = {
  __typename?: "Query";
  postCollection: {
    __typename?: "PostCollection";
    items: Array<{
      __typename?: "Post";
      title: string | null;
      description: string | null;
      date: any | null;
      slug: string | null;
      category: {
        __typename?: "PostCategory";
        title: string | null;
        slug: string | null;
      } | null;
    } | null>;
  } | null;
};

export const PostCategoryContentFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostCategoryContentFragmentFragment, unknown>;
export const PostContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Post" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sys" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PostCategoryContentFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "json" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "entries" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "inline" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "__typename" },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Post" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "slug" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "block" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "__typename" },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Snippet" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "description",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "language",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "code" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Post" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "slug" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "description",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "category",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: {
                                                  kind: "Name",
                                                  value:
                                                    "PostCategoryContentFragment",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "assets" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "block" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostContentFragment, unknown>;
export const CreatePostDataByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreatePostDataById" },
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
      name: { kind: "Name", value: "UpdatePostLikesById" },
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
export const AllPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllPosts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "date_DESC" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "10" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "PostCategoryContentFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllPostsQuery, AllPostsQueryVariables>;
export const AllPostsDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllPostsData" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postsData" },
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
} as unknown as DocumentNode<AllPostsDataQuery, AllPostsDataQueryVariables>;
export const AllPostsSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllPostsSlugs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_exists" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "PostCategoryContentFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllPostsSlugsQuery, AllPostsSlugsQueryVariables>;
export const CategoryBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CategoryBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCategoryCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "slug" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "PostCategoryContentFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryBySlugQuery, CategoryBySlugQueryVariables>;
export const CategoryPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CategoryPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "category" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug_contains" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "PostCategoryContentFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "postCategoryCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "slug" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "PostCategoryContentFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryPageQuery, CategoryPageQueryVariables>;
export const GetLayoutDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetLayout" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCategoryCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "PostCategoryContentFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialItemCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "href" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLayoutQuery, GetLayoutQueryVariables>;
export const PostBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "preview" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          defaultValue: { kind: "BooleanValue", value: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "slug" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "preview" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PostContent" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Post" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sys" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PostCategoryContentFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "json" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "entries" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "inline" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "__typename" },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Post" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "slug" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "block" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "__typename" },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Snippet" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "description",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "language",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "code" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "Post" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "slug" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "description",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "category",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: {
                                                  kind: "Name",
                                                  value:
                                                    "PostCategoryContentFragment",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "assets" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "block" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sys" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostBySlugQuery, PostBySlugQueryVariables>;
export const PostCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostCategories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCategoryCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "PostCategoryContentFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostCategoriesQuery, PostCategoriesQueryVariables>;
export const PostDataByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostDataById" },
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
} as unknown as DocumentNode<PostDataByIdQuery, PostDataByIdQueryVariables>;
export const PostsByCategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostsByCategory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "category" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug_contains" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "PostCategoryContentFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostCategoryContentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PostCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PostsByCategoryQuery,
  PostsByCategoryQueryVariables
>;
