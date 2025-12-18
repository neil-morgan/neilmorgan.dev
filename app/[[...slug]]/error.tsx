"use client";

import { NoticePage } from "@/app/_components";

export const metadata = {
  title: "An error occurred",
};

export default function Error() {
  return (
    <main>
      <NoticePage title="Error" message="An error occurred" />
    </main>
  );
}
