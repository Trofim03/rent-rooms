export interface ISignUp {
	className: string;
	changeForm: () => void;
}

export type SignUpForm = {
	email: string;
	password: string;
	repeatPassword: string;
};