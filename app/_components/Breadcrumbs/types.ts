export type BreadcrumbsProps = {
  crumbs: string[];
  root?: string;
  rootLabel?: string;
  sys?: {
    publishedAt?: string;
    firstPublishedAt?: string;
  };
};
