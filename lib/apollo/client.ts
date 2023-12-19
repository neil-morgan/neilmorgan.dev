import { HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { CONTENTFUL_BASE_URL, APOLLO_CLIENTS } from "@/lib/site";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN } = process.env;

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
      },
    }),
  });
});
