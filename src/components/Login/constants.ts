import { InputType } from "../../utils";
import { LoginForm } from "./types";

export const LoginFormInputs: InputType<LoginForm>[] = [
	{
		label: 'Email',
		type: 'email',
		id: 'email',
		required: true,
	},
	{
		label: 'Пароль',
		type: 'password',
		id: 'password',
		required: true,
	}
];