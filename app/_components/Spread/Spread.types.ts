export type ContentPresentationProps = {
  title: string | null;
  description: string | null;
  date?: string | null;
  reverse?: boolean;
  slug?: string;
  kicker?: string;
  image: {
    url: string;
    description: string;
    blurDataUrl: string;
  };
};
