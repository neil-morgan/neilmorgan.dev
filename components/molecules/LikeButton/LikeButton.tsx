"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { deleteCookie, setCookie } from "cookies-next";
import { type LikeButtonProps } from "./types";
import { Wrapper } from "./styles";
import { UpdatePostDataDocument } from "@/graphql";
import { IconButton, Icon, Text } from "@/components/atoms";

export const LikeButton = ({ likes, id, liked = false }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes as number);
  const [mutate] = useMutation(UpdatePostDataDocument);

  const handleClick = (prev: boolean) => {
    if (prev) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
      mutate({
        variables: { id, likes: likeCount - 1 },
      });
      deleteCookie(`nm-${id}`);
    }

    if (!prev) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      mutate({
        variables: { id, likes: likeCount + 1 },
      });

      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);

      setCookie(`nm-${id}`, true, { expires: expiryDate });
    }
  };

  return (
    <Wrapper>
      <IconButton
        size="md"
        icon="Heart"
        onClick={() => handleClick(isLiked)}
        priority={isLiked ? "primary" : "default"}
      />
      <Text size="sm">{likeCount}</Text>
    </Wrapper>
  );
};
