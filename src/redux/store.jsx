import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "./MenuBarSlice/MenuBarSlice"
import gamesApiSliceReducer from "./gameSlice/GameSlice"


export const store = configureStore({
    reducer: {
        menuBar: menuBarReducer,
        gamesApiSlice: gamesApiSliceReducer
    }
})