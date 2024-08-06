import { createSlice } from "@reduxjs/toolkit"
import { initialRoomsState } from "./constants"
import { RoomsStateType, RoomType } from "./types"

export const roomsSlice = createSlice({
    name: 'counter',
    initialState: initialRoomsState,
    reducers: {
        setRoomsState: (store, {payload}: {payload: RoomsStateType}) => {
          store = payload
      },
        addRoom: (store, {payload}: {payload: RoomType}) => {
          store.push(payload)
      }
    }
  })
  
  export const { setRoomsState, addRoom } = roomsSlice.actions