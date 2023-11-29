"use client";

import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { type LikeButtonProps } from "./types";
import { Wrapper } from "./styles";
import { LikesContext } from "@/contexts";
import { UpdatePostDataDocument } from "@/graphql";
import { IconButton, Text } from "@/components/atoms";

export const LikeButton = ({ id, likes }: LikeButtonProps) => {
  const { addLiked, removeLiked, likedItems } = useContext(LikesContext);
  const [mutate] = useMutation(UpdatePostDataDocument);

  const value = likedItems[id];

  const handleClick = () => {
    if (value) {
      removeLiked(id);
      mutate({
        variables: { id, likes: value - 1 },
      });
      return;
    }

    if (!value) {
      console.log("called");
      addLiked(id, 1);
      mutate({
        variables: { id, likes: value + 1 },
      });
    }
  };

  return (
    <Wrapper>
      <IconButton
        size="md"
        icon="Heart"
        onClick={() => handleClick()}
        priority={value ? "primary" : "default"}
      />
      <Text size={1}>{likes}</Text>
    </Wrapper>
  );
};
