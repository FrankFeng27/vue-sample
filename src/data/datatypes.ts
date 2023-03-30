
export interface LibraryItem {
  id?: number;
  name: string;
  displayName?: string;
  content?: string;
  children?: Array<LibraryItem>;
}

export interface TreeItemData {
  id?: number;
  name: string;
  children?: Array<TreeItemData>;
  content?: string;
}

