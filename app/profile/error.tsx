"use client"

import { NoticePage } from "@/components/templates";

export const metadata = {
  title: "Not found",
};

export default function Error() {
  return <NoticePage noticeType="errorOccurred" />;
}
