import type { ColorObject } from "./types";

export const getColorValues = (
  object: ColorObject,
  newPrefix: string,
): ColorObject => {
  const result: ColorObject = {};
  const regex = /^(.*?)(\d+)$/;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const matches = key.match(regex);
      if (matches) {
        const numericPart = matches[2];
        const newKey = newPrefix + numericPart;
        result[newKey] = object[key];
      }
    }
  }
  return result;
};
