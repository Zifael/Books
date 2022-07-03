import { createReducer, createSlice } from "@reduxjs/toolkit";


type SlicState = {foundBooks: Array<any>}

const reducerBooks =  createSlice({
    name: "books",
    initialState: {
        foundBooks: []
    } as SlicState,
    reducers: {
        
    }
})

export default reducerBooks.reducer