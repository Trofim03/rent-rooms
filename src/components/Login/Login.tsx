import { FC } from 'react';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { ILogin, LoginForm } from './types';
import { LoginFormInputs } from './constants';
import { renderFormInput } from '../../utils';

export const Login: FC<ILogin> = ({ className, changeForm }) => {
	const { register, handleSubmit, watch, formState } = useForm<LoginForm>();

	const handleOnSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

	const renderInputs = () => {
		return LoginFormInputs.map((input) => renderFormInput<LoginForm>(input, register, formState, watch));
	};

	const renderErrors = () => {
		const errorsArr: (string | number)[] = [];

		const errorText: { [key: string]: string } = {
			validate: 'Пароли не совпадают',
			required: 'Заполните необходимые поля',
		};

		return Object.keys(formState.errors).map((error) => {
			const errorType = formState.errors[error as keyof FieldErrors<LoginForm>]?.type;

			if (errorType && !errorsArr.includes(errorType)) {
				errorsArr.push(errorType);
				return (
					<span className="errorText" key={errorType}>
						{errorText[errorType]}
					</span>
				);
			}
		});
	};

	return (
		<form className={className}>
			<h4>Войдите</h4>
			<div>{renderInputs()}</div>
			{renderErrors()}
			<Button text={'Войти'} onClick={handleSubmit(handleOnSubmit)} type="button" />
			<span className="toSignUp">
				Впервые?
				<button type="button" onClick={changeForm}>
					Зарегистрируйтесь
				</button>
			</span>
		</form>
	);
};
