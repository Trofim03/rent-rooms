import { createSlice } from "@reduxjs/toolkit"
import { initialRoomsState } from "./constants"
import { RoomsStateType } from "./types"

export const roomsSlice = createSlice({
    name: 'counter',
    initialState: initialRoomsState,
    reducers: {
        setRoomsState: (store, {payload}: {payload: RoomsStateType}) => {
          store = payload
      }
    }
  })
  
  export const { setRoomsState } = roomsSlice.actions