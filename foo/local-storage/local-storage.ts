"use client";

export const addIdToLocalStorage = (id: string, location: string) => {
  const ids = getIdsFromLocalStorage(location);
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem(location, JSON.stringify(ids));
  }
};

export const removeIdFromLocalStorage = (id: string, location: string) => {
  const ids = getIdsFromLocalStorage(location);
  if (ids.includes(id)) {
    localStorage.setItem(
      location,
      JSON.stringify(ids.filter(item => item !== id)),
    );
  }
};

export const getIdsFromLocalStorage = (location: string): string[] => {
  const store = localStorage.getItem(location);
  return store ? JSON.parse(store) : [];
};
