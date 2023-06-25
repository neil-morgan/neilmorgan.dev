"use client";

import { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import { useMutation } from "@apollo/client";
import { UpdatePostLikesByIdDocument } from "@/graphql/db";
import { type LikeButtonProps } from "./like-button.types";

export const LikeButton = ({ likes, id }: LikeButtonProps) => {
  const [likeCount, setLikeCount] = useState(likes as number);
  const [mutate] = useMutation(UpdatePostLikesByIdDocument);

  const handleClick = () => {
    setLikeCount(likeCount + 1);
  };

  const updateLikes = useMemo(
    () =>
      debounce((newLikes: number) => {
        mutate({
          variables: { id, likes: newLikes },
        });
      }, 1000),
    [id, mutate],
  );

  useEffect(() => {
    if (likes === likeCount) {
      return;
    }

    updateLikes(likeCount);

    return () => {
      updateLikes.cancel();
    };
  }, [likes, likeCount, updateLikes]);

  if (!likes) {
    return null;
  }

  return (
    <button onClick={() => handleClick()} disabled={likeCount === likes + 10}>
      {likeCount}
    </button>
  );
};
