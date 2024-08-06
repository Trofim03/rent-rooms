import './Button.scss';
import { FC } from 'react';

interface IButton {
	text: string;
	onClick: () => void;
	type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<IButton> = ({ text, onClick, type }) => {
	return (
		<button onClick={onClick} className="customBtn" type={type}>
			{text}
		</button>
	);
};
