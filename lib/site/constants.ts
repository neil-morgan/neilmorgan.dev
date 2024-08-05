export const SITE_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.neilmorgan.dev";

export const CONTENTFUL_BASE_URL = "https://graphql.contentful.com";
export const CONTENTFUL_SPACE_URL = `${CONTENTFUL_BASE_URL}/content/v1/spaces/`;

export const PAGE_TITLE_PREFIX = "Neil Morgan";

export const LOCATIONS = {
  home: { label: "Home", slug: "/" },
  posts: { label: "Posts", slug: "/posts" },
  profile: { label: "Profile", slug: "/profile" },
  projects: { label: "Projects", slug: "/projects" },
  feedback: { label: "Feedback", slug: "/feedback" },
};

export const BREAKPOINTS: {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
} = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 1082,
  xl: 1280,
  "2xl": 1536,
};

export const INFO_MESSAGES = {
  pageRemoved: {
    heading: "Page not available.",
    message: "Sorry! This page has been either moved or deleted.",
    action: {
      label: "Return home",
      href: "/",
    },
  },
  pageNotFound: {
    heading: "404 - Oh no!",
    message:
      "Sorry, nothing to see here. The page you're trying to visit doesn't exist on neilmorgan.dev.",
    action: {
      label: "Return home",
      href: "/",
    },
  },
  errorOccurred: {
    heading: "Oh no! An error occurred.",
    message: "Please try again later.",
  },
  noContent: {
    heading: "Sorry, there isn't any content yet.",
    message: "I am yet to add content to this page, please check back soon!",
    action: {
      label: "Return home",
      href: "/",
    },
  },
};
