import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerBooks from "./reducer-books";


const rootReducer = combineReducers({
    books: reducerBooks
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store