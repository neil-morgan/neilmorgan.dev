"use server";
import { draftMode } from "next/headers";

export const safeDraftModeCheck = async () => {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
};
