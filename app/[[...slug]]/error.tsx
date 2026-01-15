"use client";

import { Notice } from "./_templates/Notice";

export const metadata = {
  title: "An error occurred",
};

export default function Error() {
  return (
    <main>
      <Notice title="Error" message="An error occurred" />
    </main>
  );
}
