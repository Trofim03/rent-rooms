import cn from 'classnames';

export const getRoomScheme = (
	schemeState: Array<Array<boolean>>,
	handleOnClick?: null | ((rowIndex: number, elIndex: number) => void),
	id: string | number = '',
) => {
	// отрисовываем строку
	return schemeState.map((schemeRow, rowIndex) =>
		// отрисовываем элемент строки
		schemeRow.map((schemeEl, elIndex) => (
			<div
				className={cn({ active: schemeEl })}
				key={`${id}-${rowIndex}-${elIndex}`}
				aria-hidden="true"
				onClick={() => {
					handleOnClick && handleOnClick(rowIndex, elIndex);
				}}
			/>
		)),
	);
};
