"use server";
import { cookies, draftMode } from "next/headers";
import { parseDebugConfig } from "./parse-debug-config";
import { safeDraftModeCheck } from "./safe-draft-mode-check";
import { type DebugConfig } from "./types";

export const updateDebugConfig = async (config: Partial<DebugConfig>) => {
  const isDraftModeEnabled = await safeDraftModeCheck();
  if (!isDraftModeEnabled) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Draft mode is not enabled");
    }
    const draft = await draftMode();
    draft.enable();
  }
  const cookieStore = await cookies();
  const currentConfig = parseDebugConfig(
    cookieStore.get("nm_debug")?.value ?? "{}",
  );
  const newConfig = { ...currentConfig, ...config } as DebugConfig;
  cookieStore.set("nm_debug", JSON.stringify(newConfig), {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    path: "/",
  });
  return newConfig;
};
