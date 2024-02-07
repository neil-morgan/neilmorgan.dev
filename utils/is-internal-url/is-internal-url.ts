import { SITE_BASE_URL } from "@/lib/site";

const base = new URL(SITE_BASE_URL);

export const isInternalUrl = (url: string): boolean =>
  new URL(url, base).hostname === base.hostname;
