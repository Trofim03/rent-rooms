export interface ILogin {
	className: string;
	changeForm: () => void;
}

export type LoginForm = {
	email: string;
	password: string;
};
