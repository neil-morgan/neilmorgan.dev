"use client";

import { type PostTemplateProps } from "./types";
import { UpdatePostLikesByIdDocument } from "@/graphql/db";

import { useCallback, useState } from "react";
import { useMutation } from "@apollo/client";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  const [mutate, { data, loading, error }] = useMutation(
    UpdatePostLikesByIdDocument,
  );

  // need to refetch likes, or use local state to increment

  const handleClick = useCallback(async () => {
    if (content && content.likes) {
      mutate({
        variables: { id: content?.sys.id, likes: content.likes + 1 },
      });
    }
  }, [mutate, content]);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <pre>{JSON.stringify(content, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};
