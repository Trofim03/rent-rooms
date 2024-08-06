export type CreateRoomForm = {
	title: string;
	isActive: boolean;
	width: number;
	height: number;
};

export type DefaultRoomStateType = {
	title: string;
	isActive?: boolean;
	width: number;
	height: number;
};