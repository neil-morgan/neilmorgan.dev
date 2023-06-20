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

if (process.env.NODE_ENV === "development") {
  setVerbosity("debug");
  loadDevMessages();
  loadErrorMessages();
}

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.APOLLO_SERVER_URL as string,
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

export const ApolloProvider = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider
    makeClient={makeClient}
    makeSuspenseCache={makeSuspenseCache}>
    {children}
  </ApolloNextAppProvider>
);
