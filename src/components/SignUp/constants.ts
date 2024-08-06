import { UseFormWatch } from "react-hook-form";
import { SignUpForm } from "./types";
import { InputType } from "../../utils";

export const SignUpFormInputs: InputType<SignUpForm>[] = [
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
	},
	{
		label: 'Повторите пароль',
		type: 'password',
		id: 'repeatPassword',
		required: true,
		validate: (watch: UseFormWatch<SignUpForm>) => (val: string) => {
			if (watch('password') != val) {
				return 'validate is failed';
			}
		},
	},
];