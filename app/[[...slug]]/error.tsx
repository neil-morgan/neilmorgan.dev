"use client";

import { Notice } from "./_templates/Notice";

export const metadata = {
  title: "An error occurred",
};

export default function Error() {
  return (
    <Notice
      title="Error"
      message="Sorry! An error occurred. Please try again later."
    />
  );
}
