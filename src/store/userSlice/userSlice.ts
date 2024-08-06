import { createSlice } from "@reduxjs/toolkit"
import { initialUserState } from "./constants"

export const userSlice = createSlice({
    name: 'counter',
    initialState: initialUserState,
    reducers: {
        setUserState: (store, {payload}: {payload: string | null}) => {
            store.id = payload
        }
    }
  })
  
  export const { setUserState } = userSlice.actions