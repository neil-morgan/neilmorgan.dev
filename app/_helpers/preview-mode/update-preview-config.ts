"use server";
import { cookies, draftMode } from "next/headers";
import { parsePreviewConfig } from "./parse-preview-config";
import { safeDraftModeCheck } from "./safe-draft-mode-check";
import { type PreviewConfig } from "./types";

export const updatePreviewConfig = async (config: Partial<PreviewConfig>) => {
  const isDraftModeEnabled = await safeDraftModeCheck();
  if (!isDraftModeEnabled) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Draft mode is not enabled");
    }
    const draft = await draftMode();
    draft.enable();
  }
  const cookieStore = await cookies();
  const currentConfig = parsePreviewConfig(
    cookieStore.get("nm_preview")?.value ?? "{}",
  );
  const newConfig = { ...currentConfig, ...config } as PreviewConfig;
  cookieStore.set("nm_preview", JSON.stringify(newConfig), {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    path: "/",
  });
  return newConfig;
};
