"use server";
import { cookies } from "next/headers";
import { parseDebugConfig } from "./parse-debug-config";
import { safeDraftModeCheck } from "./safe-draft-mode-check";
import { type DebugConfig } from "./types";

export const updateDebugConfig = async (config: Partial<DebugConfig>) => {
  const isDraftModeEnabled = await safeDraftModeCheck();
  if (!isDraftModeEnabled) throw new Error("Draft mode is not enabled");
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
