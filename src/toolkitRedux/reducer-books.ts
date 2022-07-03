import { createReducer, createSlice } from "@reduxjs/toolkit";
import { Items } from "./type-foundBooks/type-foundBooks";


type SlicState = {
    foundBooks: Array<Items> | [],
    oneBook: Items | null,
    startIndex: number
}

const reducerBooks =  createSlice({
    name: "books",
    initialState: {
        foundBooks: [],
        oneBook: null,
        startIndex: 0
    } as SlicState,
    reducers: {
        setFoundBooks(state, action) {
            state.foundBooks = action.payload        
        },
        setOneBook(state, action) {
            state.oneBook = action.payload
        },
        getPageBooks(state, action) {
            state.foundBooks = [...state.foundBooks, ...action.payload]
        }
    }
})

export default reducerBooks.reducer
export const { setFoundBooks, setOneBook, getPageBooks } = reducerBooks.actions