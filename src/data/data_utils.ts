import { LibraryItem } from "./datatypes";

export const isLibraryItemsEqualed = (lib1: LibraryItem, lib2: LibraryItem) => {
  if (lib1.id && lib2.id) {
    return lib1.id === lib2.id;
  } 
  if (!lib1.id && !lib2.id) {
    return lib1.name === lib2.name;
  }
  return false;
}

