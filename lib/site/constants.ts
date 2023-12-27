export const SITE_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.neilmorgan.dev";

export const CONTENTFUL_BASE_URL =
  "https://graphql.contentful.com/content/v1/spaces/";

export const LOCATIONS = {
  posts: "/posts",
};

export const BREAKPOINTS = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
