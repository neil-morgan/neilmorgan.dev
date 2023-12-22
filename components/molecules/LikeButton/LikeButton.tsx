"use client";

import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { type LikeButtonProps } from "./types";
import { Wrapper } from "./styles";
import { LikesContext } from "@/providers";
import { UpdatePostDataDocument } from "@/graphql";
import { IconButton, Text } from "@/components/atoms";

export const LikeButton = ({ id, likes }: LikeButtonProps) => {
  const { addLiked, removeLiked, likedItems } = useContext(LikesContext);
  const [mutate] = useMutation(UpdatePostDataDocument);

  const item = likedItems?.find(item => item.id === id);
  const isLiked = item?.liked;
  const value = item?.likes || likes;

  const handleClick = () => {
    if (isLiked && value) {
      removeLiked(id, value);
      mutate({
        variables: { id, likes: value - 1 },
      });
      return;
    }

    if (!isLiked && value) {
      addLiked(id, value + 1);
      mutate({
        variables: { id, likes: value + 1 },
      });
    }
  };

  return (
    <Wrapper>
      <IconButton
        icon="Heart"
        onClick={() => handleClick()}
        priority={isLiked ? "primary" : "default"}
      />
      {value && <Text size={1}>{value}</Text>}
    </Wrapper>
  );
};
