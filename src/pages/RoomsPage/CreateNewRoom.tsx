import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PlusIcon } from '../../img';

export const CreateNewRoom: FC = () => {
	return (
		<NavLink to={'/rooms/createNew'} className="roomsContent_el">
			<PlusIcon />
		</NavLink>
	);
};
