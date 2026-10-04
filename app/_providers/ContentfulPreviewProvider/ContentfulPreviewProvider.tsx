"use client";

import { type PropsWithChildren } from "react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export const ContentfulPreviewProvider = ({ children }: PropsWithChildren) => (
  <ContentfulLivePreviewProvider
    locale="en-US"
    space={process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}
    environment={process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}
    enableInspectorMode
    enableLiveUpdates
    debugMode
  >
    {children}
  </ContentfulLivePreviewProvider>
);
