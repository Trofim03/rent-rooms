import { InputType } from "../../utils";
import { CreateRoomForm, DefaultRoomStateType } from "./types";

export const CreateRoomFormInputs: InputType<CreateRoomForm>[] = [
	{
		label: 'Название',
		type: 'text',
		id: 'title',
		required: true,
	},
	{
		label: 'Ширина комнаты',
		type: 'number',
		id: 'width',
		min: 1,
		required: true,
	},
	{
		label: 'Длина комнаты',
		type: 'number',
		id: 'height',
		min: 1,
		required: true,
	},
	{
		label: 'Комната активна',
		type: 'checkbox',
		id: 'isActive',
	},
];

export const defaultRoomState: DefaultRoomStateType = {
	height: 1,
	width: 1,
	isActive: false,
	title: '',
};