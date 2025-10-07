import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSideBarState: false
}


const menuBarSlice = createSlice({
    name: "menuBar",
    initialState,
    reducers: {
        openSideBar: (state) => {
            state.openSideBarState = !state.openSideBarState
        }
    }

})  


export const { openSideBar } = menuBarSlice.actions;

export default menuBarSlice.reducer;


