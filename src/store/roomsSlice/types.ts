export type RoomType = {
    id: string;
    width: number,
    height: number;
    title: string,
    isActive: boolean,
    scheme: Array<Array<boolean>>
} 

export type RoomsStateType = Array<RoomType>