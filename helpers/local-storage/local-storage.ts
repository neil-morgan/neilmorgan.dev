"use client";

import type { LocalStorageLocations } from "@/lib/site";

export const addIdToLocalStorage = (
  id: string,
  location: LocalStorageLocations,
) => {
  const ids = getIdsFromLocalStorage(location);
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem(location, JSON.stringify(ids));
  }
};

export const removeIdFromLocalStorage = (
  id: string,
  location: LocalStorageLocations,
) => {
  const ids = getIdsFromLocalStorage(location);
  if (ids.includes(id)) {
    localStorage.setItem(
      location,
      JSON.stringify(ids.filter(item => item !== id)),
    );
  }
};

export const getIdsFromLocalStorage = (
  location: LocalStorageLocations,
): string[] => {
  const store = localStorage.getItem(location);
  return store ? JSON.parse(store) : [];
};
