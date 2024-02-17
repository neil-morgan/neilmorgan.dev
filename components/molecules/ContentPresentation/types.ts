export type ContentPresentationProps = {
  title: string;
  body: string;
  reverse?: boolean;
  cta: {
    label: string;
    href: string;
  };
  label: string;
  image: {
    alt: string;
    src: string;
  };
};
