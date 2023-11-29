"use client";

import { getCookies } from "cookies-next";

export const getLikes = () => {
  const cookies = getCookies();
  let obj = {} as { [key: string]: number };
  Object.keys(cookies).forEach(cookie => {
    const key = cookie.split("-")[1];
    obj[key] = Number(cookies[cookie]);
  });
  return obj;
};
