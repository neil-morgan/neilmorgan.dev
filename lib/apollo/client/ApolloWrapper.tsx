"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { setVerbosity } from "ts-invariant";

// TODO: Why is env var not working?
const { APOLLO_SERVER_URL, NODE_ENV } = process.env;

if (NODE_ENV === "development") {
  setVerbosity("debug");
  loadDevMessages();
  loadErrorMessages();
}

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "http://localhost:3000/api",
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};

const makeSuspenseCache = () => new SuspenseCache();

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider
    makeClient={makeClient}
    makeSuspenseCache={makeSuspenseCache}>
    {children}
  </ApolloNextAppProvider>
);
