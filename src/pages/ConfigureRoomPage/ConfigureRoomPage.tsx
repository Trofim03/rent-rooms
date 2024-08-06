import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRoomCanvasArray, getRoomScheme, renderFormInput } from '../../utils';
import './ConfigureRoomPage.scss';
import { Button } from '../../components';
import { useDispatch } from 'react-redux';
import { addRoom } from '../../store/roomsSlice/roomsSlice';
import { useNavigate } from 'react-router-dom';
import { defaultRoomState, CreateRoomFormInputs } from './constants';
import { CreateRoomForm } from './types';

export const ConfigureRoomPage: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [roomState, setRoomState] = useState(defaultRoomState);
	const [canvasState, setCanvasState] = useState<Array<Array<boolean>>>([[false]]);

	const { register, handleSubmit, watch, formState } = useForm<CreateRoomForm>({
		defaultValues: defaultRoomState,
	});

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const titleValue = value.title ?? '';
			const widthValue = Number(value.width ?? 1);
			const heightValue = Number(value.height ?? 1);

			setRoomState({
				...value,
				title: titleValue,
				width: widthValue,
				height: heightValue,
			});

			if (name === 'width' || name === 'height') {
				setCanvasState(getRoomCanvasArray(widthValue, heightValue));
			}
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const handleOnClick = (row: number, cell: number) => {
		const newArr = JSON.parse(JSON.stringify(canvasState));
		newArr[row][cell] = !canvasState[row][cell];

		setCanvasState(newArr);
	};

	const handleOnSubmit = () => {
		dispatch(
			addRoom({
				id: Math.random().toString(),
				width: roomState.width,
				height: roomState.height,
				title: roomState.title,
				isActive: roomState.isActive ?? false,
				scheme: canvasState,
			}),
		);

		navigate('/rooms');
	};

	const renderInputs = () => {
		return CreateRoomFormInputs.map((input) => renderFormInput<CreateRoomForm>(input, register, formState, watch));
	};

	const renderCanvas = () => {
		return getRoomScheme(canvasState, handleOnClick);
	};

	const style = {
		'--width': roomState.width,
		'--height': roomState.height,
	} as React.CSSProperties;

	return (
		<>
			<div className="headerContent">
				<h3>Создать комнату:</h3>
			</div>
			<form className="headerContent" id="createRoomForm">
				{renderInputs()}
				<Button text="Создать" onClick={handleSubmit(handleOnSubmit)} type="button" />
			</form>
			<div className="roomCanvas" style={style}>
				{renderCanvas()}
			</div>
		</>
	);
};
