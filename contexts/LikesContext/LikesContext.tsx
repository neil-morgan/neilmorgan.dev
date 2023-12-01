"use client";

import {
  type ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useQuery } from "@apollo/client";
import type { LikedItemType } from "./types";
import { LocalStorageLocation } from "@/lib/site";
import { PostsDataByIdsDocument } from "@/graphql";
import {
  addIdToLocalStorage,
  removeIdFromLocalStorage,
  getIdsFromLocalStorage,
} from "@/foo";

export const LikesContext = createContext({
  likedItems: [] as LikedItemType[] | undefined,
  addLiked: (id: string, count: number) => {},
  removeLiked: (id: string, count: number) => {},
});

export const LikesConsumer = LikesContext.Consumer;

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState<LikedItemType[]>();

  useQuery(PostsDataByIdsDocument, {
    variables: { ids: getIdsFromLocalStorage(LocalStorageLocation.Likes) },
    onCompleted: data => {
      const res = data.postsDataByIds?.map(post => ({
        id: post?._id,
        likes: post?.likes,
        liked: true,
      }));

      if (res) {
        setLikedItems(prev => (prev ? [...res, ...prev] : [...res]));
      }
    },
  });

  const addLiked = useCallback((id: string, count: number) => {
    setLikedItems(prev => {
      if (prev?.find(item => item.id === id)) {
        return prev?.map(item => {
          if (item.id === id) {
            return { ...item, likes: count, liked: true };
          }
          return item;
        });
      }
    });
    addIdToLocalStorage(id, LocalStorageLocation.Likes);
  }, []);

  const removeLiked = useCallback((id: string, count: number) => {
    setLikedItems(prev => {
      return prev?.map(item => {
        if (item.id === id) {
          return { ...item, likes: count - 1, liked: false };
        }
        return item;
      });
    });
    removeIdFromLocalStorage(id, LocalStorageLocation.Likes);
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
