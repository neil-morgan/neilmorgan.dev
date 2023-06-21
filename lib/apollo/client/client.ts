import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { CONTENTFUL_BASE_URL, APOLLO_CLIENTS } from "@/constants";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN, APOLLO_SERVER_URL } =
  process.env;

const db = new HttpLink({
  uri: "http://localhost:3000/api",
});

const cms = new HttpLink({
  uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
  },
});

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.split(
        operation => operation.getContext().clientName === APOLLO_CLIENTS.CMS,
        cms,
        db,
      ),
    }),
);
