
export interface LibraryItem {
  id?: number;
  name: string;
  displayName?: string;
  content?: string;
  children?: Array<LibraryItem>;
}

