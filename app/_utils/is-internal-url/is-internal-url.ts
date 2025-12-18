import { SITE_BASE_URL } from "@/config";

const base = new URL(SITE_BASE_URL);

export const isInternalUrl = (url: string): boolean => {
  try {
    return new URL(url, base).hostname === base.hostname;
  } catch {
    return false;
  }
};
