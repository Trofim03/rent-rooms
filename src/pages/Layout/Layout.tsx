import { FC, ReactElement } from 'react';
import { Navigation } from '../../components';
import './Layout.scss';

interface ILayout {
	children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className="layout">
			<Navigation />
			<div className="content">{children}</div>
		</div>
	);
};
