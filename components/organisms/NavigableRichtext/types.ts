import type { RichtextType } from "@/types";
import type { Maybe, Asset } from "@/graphql";

export type NavigableRichtextProps = {
  content: RichtextType;
  titleImage: Maybe<Asset>;
};
