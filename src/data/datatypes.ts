
export interface LibraryItem {
  id?: number;
  name: string;
  displayName?: string;
  content?: string;
  children?: Array<LibraryItem>;
}

export type TreeItemData = LibraryItem;

export interface LibraryContent {
  title: string;
  content: string;
}

