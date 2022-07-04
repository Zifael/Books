import { RootState } from "../../toolkitRedux";

export const foundBooks = (state: RootState) => state.books.foundBooks
export const oneBook = (state: RootState) => state.books.oneBook?.volumeInfo
export const totalItems = (state: RootState) => state.books.totalItems
export const startIndex = (state: RootState) => state.books.startIndex
export const valueQuery = (state: RootState) => state.books.valueQuery