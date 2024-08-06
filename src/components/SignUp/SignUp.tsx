import { FC } from 'react';
import { ISignUp, SignUpForm } from './types';
import { SignUpFormInputs } from './constants';
import { renderFormInput } from '../../utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';

export const SignUp: FC<ISignUp> = ({ className, changeForm }) => {
	const { register, handleSubmit, watch, formState } = useForm<SignUpForm>();

	const handleOnSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);

	const renderInputs = () => {
		return SignUpFormInputs.map((input) => renderFormInput<SignUpForm>(input, register, formState, watch));
	};

	return (
		<form className={className}>
			<h4>Зарегистрируйтесь</h4>
			<div>{renderInputs()}</div>
			<Button text={'Регистрация'} onClick={handleSubmit(handleOnSubmit)} type="button" />
			<span className="toSignUp">
				Уже есть аккаунт?
				<button type="button" onClick={changeForm}>
					Войдите
				</button>
			</span>
		</form>
	);
};
