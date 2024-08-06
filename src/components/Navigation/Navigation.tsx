import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ExitIcon, ProfileIcon, RoomsIcon } from '../../img';
import { useDispatch } from 'react-redux';
import { setUserState } from '../../store/userSlice/userSlice';

const NAVIGATION_LINKS = [
	{
		title: 'Профиль',
		link: '/profile',
		icon: <ProfileIcon />,
	},
	{
		title: 'Мои комнаты',
		link: '/rooms',
		icon: <RoomsIcon />,
	},
];

const ExitBtn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOnClick = () => {
		dispatch(setUserState(null));
		navigate('/');
	};

	return (
		<button onClick={handleOnClick}>
			<span className="link-icon">
				<ExitIcon />
			</span>
			<span className="link-title">Выйти</span>
		</button>
	);
};

export const Navigation: FC = () => {
	const renderNavigationEl = () => {
		return NAVIGATION_LINKS.map((link) => (
			<NavLink to={link.link} key={link.link}>
				<span className="link-icon">{link.icon}</span>
				<span className="link-title">{link.title}</span>
			</NavLink>
		));
	};

	return (
		<div className="navigation">
			{renderNavigationEl()}
			<ExitBtn />
		</div>
	);
};
