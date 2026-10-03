import type { DebugConfig } from "./types";

export const parseDebugConfig = (configString: string): DebugConfig | null => {
  try {
    const parsedConfig = JSON.parse(configString);
    if (typeof parsedConfig !== "object" || parsedConfig === null) {
      return null;
    }
    return parsedConfig as DebugConfig;
  } catch {
    return null;
  }
};
