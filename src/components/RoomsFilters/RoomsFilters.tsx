import { FC, useEffect } from 'react';
import { renderFormInput } from '../../utils';
import { useForm, WatchObserver } from 'react-hook-form';
import './RoomsFilters.scss';
import { FiltersFormInputs } from './constants';
import { FIltersForm } from './types';

interface IRoomsFilters {
	onFiltersChange: WatchObserver<FIltersForm>;
}

export const RoomsFilters: FC<IRoomsFilters> = ({ onFiltersChange }) => {
	const { register, watch, formState } = useForm<FIltersForm>();

	useEffect(() => {
		const subscription = watch(onFiltersChange);
		return () => subscription.unsubscribe();
	}, [watch, onFiltersChange]);

	const renderInputs = () => {
		return FiltersFormInputs.map((input) => renderFormInput<FIltersForm>(input, register, formState, watch));
	};

	return (
		<div>
			<h4>Фильтры</h4>
			<div className="filtersContent">{renderInputs()}</div>
		</div>
	);
};
