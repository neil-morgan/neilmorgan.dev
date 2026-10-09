import type { PreviewConfig } from "./types";

export const parsePreviewConfig = (
  configString: string,
): PreviewConfig | null => {
  try {
    const parsedConfig = JSON.parse(configString);
    if (typeof parsedConfig !== "object" || parsedConfig === null) {
      return null;
    }
    return parsedConfig as PreviewConfig;
  } catch {
    return null;
  }
};
