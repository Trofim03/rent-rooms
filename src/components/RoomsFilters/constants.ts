import { InputType } from "../../utils";
import { FIltersForm } from "./types";

export const FiltersFormInputs: InputType<FIltersForm>[] = [
	{
		label: 'Тип комнаты',
		type: 'select',
		id: 'roomType',
		required: false,
		options: [
			{
				title: 'Активные',
				value: true,
			},
			{
				title: 'Неактивные',
				value: false,
			},
			{
				title: 'Выберите',
				value: null,
			},
		],
	},
	{
		label: 'Название комнаты',
		type: 'text',
		id: 'title',
		required: false,
	},
];