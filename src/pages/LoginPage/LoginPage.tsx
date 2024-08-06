import { FC, useState } from 'react';
import { Login, SignUp } from '../../components';
import './LoginPage.scss';
import cn from 'classnames';

enum ACTIVE_FORM {
	LOGIN,
	SIGN_UP,
}

export const LoginPage: FC = () => {
	const [activeForm, setActiveForm] = useState(ACTIVE_FORM.LOGIN);

	const isLoginActive = activeForm === ACTIVE_FORM.LOGIN;
	const isSignUpActive = activeForm === ACTIVE_FORM.SIGN_UP;

	const loginClassNames = cn('login', { active: isLoginActive });
	const signUpClassNames = cn('signUp', { active: isSignUpActive });

	const pageClassNames = cn('loginPage', { active: isLoginActive });

	const handleChangeActiveForm = () => {
		if (activeForm === ACTIVE_FORM.LOGIN) {
			setActiveForm(ACTIVE_FORM.SIGN_UP);
		}
		if (activeForm === ACTIVE_FORM.SIGN_UP) {
			setActiveForm(ACTIVE_FORM.LOGIN);
		}
	};

	return (
		<div className={pageClassNames}>
			<Login className={loginClassNames} changeForm={handleChangeActiveForm} />
			<SignUp className={signUpClassNames} changeForm={handleChangeActiveForm} />
		</div>
	);
};
