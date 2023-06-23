"use client";

import { type PostTemplateProps } from "./types";
import { LikeButton } from "@/components/like-button/like-button";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content) return null;

  return (
    <div>
      <LikeButton likes={content?.likes} id={content?.sys.id} />
    </div>
  );
};
