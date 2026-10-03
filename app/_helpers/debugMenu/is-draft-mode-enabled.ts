"use server";
import { cookies } from "next/headers";
import { parseDebugConfig } from "./parse-debug-config";
import { safeDraftModeCheck } from "./safe-draft-mode-check";

const disabledPreviewMode = {
  previewMode: process.env.CONTENTFUL_PREVIEW_ENABLED === "true",
};

export const isDraftModeEnabled = async () => {
  try {
    const isEnabled = await safeDraftModeCheck();
    if (!isEnabled) return null;
    const cookieStore = await cookies();
    const debugCookie = cookieStore.get("nm_debug");
    if (!debugCookie) return null;

    return parseDebugConfig(debugCookie.value) ?? disabledPreviewMode;
  } catch {
    return disabledPreviewMode;
  }
};
