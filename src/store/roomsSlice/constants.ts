import { RoomsStateType } from "./types";

export const initialRoomsState: RoomsStateType = [
    {
        id: '123',
        width: 5,
        height: 4,
        title: 'тест',
        isActive: true,
        scheme: [
            [true, true, true, true, true],
            [true, true, false, false, false],
            [true, true, false, false, false],
            [true, true, true, true, true],
        ]
    },
    {
        id: '456',
        width: 3,
        height: 6,
        title: 'тест 2',
        isActive: false,
        scheme: [
            [true, true, true],
            [true, false, true],
            [true, false, true],
            [true, false, true],
            [true, true, true],
            [true, true, true],
        ]
    },
]