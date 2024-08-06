import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RoomType } from '../../store';
import cn from 'classnames';

interface IRoomBlock {
	room: RoomType;
}

export const RoomBlock: FC<IRoomBlock> = ({ room }) => {
	const { height, width, id, isActive, scheme, title } = room;

	const style = {
		'--width': width,
		'--height': height,
	} as React.CSSProperties;

	const statusClassName = cn('status', { active: isActive });

	const renderRoomScheme = () => {
		// отрисовываем строку
		return scheme.map((schemeRow, rowIndex) =>
			// отрисовываем элемент строки
			schemeRow.map((schemeEl, elIndex) => (
				<div className={cn({ active: schemeEl })} key={`${id}-${rowIndex}-${elIndex}`} />
			)),
		);
	};

	return (
		<NavLink to={`/rooms/${id}`} className="roomsContent_el">
			<div className="roomTitle">
				<span>
					{width}x{height}
				</span>
				<span>{title}</span>
				<span className={statusClassName}></span>
			</div>
			<div className="roomScheme">
				<div className="scheme" style={style}>
					{renderRoomScheme()}
				</div>
			</div>
		</NavLink>
	);
};
