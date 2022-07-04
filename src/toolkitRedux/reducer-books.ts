import { createSlice } from "@reduxjs/toolkit";
import { Items } from "./type-foundBooks/type-foundBooks";

type SlicState = { 
    valueQuery: string,       
    foundBooks: Array<Items> | [],
    oneBook: Items | null,
    startIndex: number,
    totalItems: number | null
}



const reducerBooks =  createSlice({
    name: "books",
    initialState: {  
        valueQuery: '',               
        foundBooks: [],
        oneBook: null,
        startIndex: 0,
        totalItems: null
    } as SlicState,
    reducers: {  
        setValueQuery (state, action) {
            state.valueQuery = action.payload
        },
        setTotalItems (state, action) {
            state.totalItems = action.payload
        },  
        setFoundBooks (state, action) {            
            state.foundBooks = action.payload        
        },
        setOneBook (state, action) {
            state.oneBook = action.payload
        },
        getPageBooks (state, action) {            
            state.foundBooks = [...state.foundBooks, ...action.payload]
        },
        setStartIndex (state, action) {
            state.startIndex = action.payload                      
        }
    },
    
})



export default reducerBooks.reducer
export const { setValueQuery, setTotalItems, setFoundBooks, setOneBook, getPageBooks, setStartIndex} = reducerBooks.actions