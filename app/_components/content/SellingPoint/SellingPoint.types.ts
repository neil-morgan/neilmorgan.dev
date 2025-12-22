import type { IconNameType } from "@/app/_components";
import type { SellingPointFragment } from "@/app/_graphql";

export type SellingPointProps = SellingPointFragment & {
  icon: IconNameType;
};
