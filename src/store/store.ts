import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { roomsSlice } from "./roomsSlice";

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        roomsReducer: roomsSlice.reducer
    }
  })