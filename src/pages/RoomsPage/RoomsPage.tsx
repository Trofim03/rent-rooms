import { FC, useState } from 'react';
import './RoomsPage.scss';
import { CreateNewRoom } from './CreateNewRoom';
import { useTypedSelector } from '../../utils';
import { RoomBlock } from './RoomBlock';
import { RoomsFilters } from '../../components';
import { WatchObserver } from 'react-hook-form';
import { FIltersForm } from '../../components/RoomsFilters/types';
import { RoomsStateType } from '../../store/roomsSlice/types';

interface IFilters {
	roomType?: string | undefined;
	title?: string | undefined;
}

export const RoomsPage: FC = () => {
	const [filters, setFilters] = useState<IFilters>();
	const rooms = useTypedSelector((store) => store.roomsReducer);

	const renderRooms = () => {
		let currentRooms = JSON.parse(JSON.stringify(rooms)) as RoomsStateType;

		if (filters) {
			const { title, roomType } = filters;

			if (title) {
				currentRooms = currentRooms.filter((room) => room.title.match(new RegExp(title, 'g')));
			}

			if (roomType && typeof JSON.parse(roomType) === 'boolean') {
				const typeStatus = JSON.parse(roomType);

				currentRooms = currentRooms.filter((room) => room.isActive === typeStatus);
			}
		}

		return currentRooms.map((room) => <RoomBlock room={room} key={room.id} />);
	};

	const handleOnFiltersChange: WatchObserver<FIltersForm> = (value) => {
		setFilters(value);
	};

	return (
		<>
			<div className="headerContent">
				<h3>Ваши комнаты:</h3>
			</div>
			<div className="headerContent">
				<RoomsFilters onFiltersChange={handleOnFiltersChange} />
			</div>
			<div className="roomsContent">
				<CreateNewRoom />
				{renderRooms()}
			</div>
		</>
	);
};
