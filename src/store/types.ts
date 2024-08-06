import { RoomsStateType } from "./roomsSlice/types";
import { UserStateType } from "./userSlice/types";

export type RootState = {
    userReducer: UserStateType,
    roomsReducer: RoomsStateType,
}