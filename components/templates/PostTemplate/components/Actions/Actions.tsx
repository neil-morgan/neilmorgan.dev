"use client";

import type { SetStateAction } from "react";
import { LinkedinShareButton } from "react-share";
import { Wrapper } from "./styles";
import { Popover, Icon, IconButton } from "@/components/atoms";
import { LikeButton } from "@/components/molecules";

export const Actions = ({
  likes,
  id,
  liked,
}: {
  likes?: number | null;
  id: string;
  liked: boolean;
}) => (
  <Wrapper>
    <Popover trigger={<IconButton size="md" icon="Share" />}>
      <LinkedinShareButton url={"https://www.example.com"}>
        <Icon name="LinkedIn" />
      </LinkedinShareButton>
    </Popover>
    <LikeButton likes={likes} id={id} liked={liked} />
  </Wrapper>
);
