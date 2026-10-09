"use server";
import { cookies } from "next/headers";
import { parsePreviewConfig } from "./parse-preview-config";
import { safeDraftModeCheck } from "./safe-draft-mode-check";

const disabledPreviewMode = {
  previewMode: false,
};

export const isDraftModeEnabled = async () => {
  try {
    const isEnabled = await safeDraftModeCheck();
    if (!isEnabled) return null;
    const cookieStore = await cookies();
    const previewCookie = cookieStore.get("nm_preview");
    if (!previewCookie) return null;

    return parsePreviewConfig(previewCookie.value) ?? disabledPreviewMode;
  } catch {
    return disabledPreviewMode;
  }
};
