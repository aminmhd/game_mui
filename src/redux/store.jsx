import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "./MenuBarSlice/MenuBarSlice"
import gamesApiSliceReducer from "./gameSlice/GameSlice"
import testQuerySliceReducer from "./testSlice/TestSlice"


export const store = configureStore({
    reducer: {
        menuBar: menuBarReducer,
        gamesApiSlice: gamesApiSliceReducer,
        testQuerySlice: testQuerySliceReducer
    }
})