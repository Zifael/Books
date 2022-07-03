import { RootState } from "../../toolkitRedux/reducer";

export const foundBooks = (state: RootState) => state.books.foundBooks
export const oneBook = (state: RootState) => state.books.oneBook?.volumeInfo