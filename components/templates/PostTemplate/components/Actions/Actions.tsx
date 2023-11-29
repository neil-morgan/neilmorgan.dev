"use client";

import { LinkedinShareButton } from "react-share";
import { Wrapper } from "./styles";
import type { ActionsProps } from "./types";
import { Popover, Icon, IconButton } from "@/components/atoms";
import { LikeButton } from "@/components/molecules";

export const Actions = ({ likes, id }: ActionsProps) => (
  <Wrapper>
    <Popover trigger={<IconButton size="md" icon="Share" />}>
      <LinkedinShareButton url={"https://www.example.com"}>
        <Icon name="LinkedIn" />
      </LinkedinShareButton>
    </Popover>
    <LikeButton likes={likes} id={id} />
  </Wrapper>
);
