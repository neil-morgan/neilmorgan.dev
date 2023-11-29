"use client";

import {
  type ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { deleteCookie, setCookie } from "cookies-next";
import { getLikes } from "./helpers";
import { COOKIE_PREFIX } from "@/lib/site";

export const LikesContext = createContext({
  likedItems: {} as { [key: string]: number },
  addLiked: (id: string, count: number) => {},
  removeLiked: (id: string) => {},
});
export const LikesConsumer = LikesContext.Consumer;

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState(getLikes());

  const expiryDate = useMemo(() => new Date(), []);
  expiryDate.setDate(expiryDate.getDate() + 30);

  const addLiked = useCallback(
    (id: string, count: number) => {
      setLikedItems({ ...likedItems, [id]: count });
      setCookie(`${COOKIE_PREFIX}${id}`, count + 1, { expires: expiryDate });
    },
    [expiryDate, likedItems],
  );

  const removeLiked = useCallback((id: string) => {
    setLikedItems(prev => {
      const newLikedItems = { ...prev };
      delete newLikedItems[id];
      return newLikedItems;
    });
    deleteCookie(`${COOKIE_PREFIX}-${id}`);
  }, []);

  const value = useMemo(
    () => ({
      likedItems,
      addLiked,
      removeLiked,
    }),
    [addLiked, likedItems, removeLiked],
  );

  return (
    <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
  );
};
