import cn from 'classnames';
import { FieldValues, FormState, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';

export type InputType<FormType extends FieldValues> = {
	label: string;
	type: string;
	id: keyof FormType;
	required?: boolean;
	options?: Array<{
		value: string | boolean | null;
		title: string;
	}>;
	validate?: (watch: UseFormWatch<FormType>) => (val: string) => string | undefined;
};

export const renderFormInput = <FormType extends FieldValues>(
	input: InputType<FormType>,
	register: UseFormRegister<FormType>,
	formState: FormState<FormType>,
	watch: UseFormWatch<FormType>,
) => {
	const { label, required, type, validate, options } = input;
	const id = input.id as Path<FormType>;

	if (type === 'select') {
		return (
			<div key={id}>
				<label htmlFor={id}>{label}</label>
				<select
					className={cn({ incorrect: formState.errors[id] })}
					id={id}
					{...register(id, {
						required: required,
						validate: validate && validate(watch),
					})}
				>
					{options &&
						options.map((option) => (
							<option value={String(option.value)} key={String(option.value)}>
								{option.title}
							</option>
						))}
				</select>
			</div>
		);
	}

	return (
		<div key={id}>
			<label htmlFor={id}>{label}</label>
			<input
				className={cn({ incorrect: formState.errors[id] })}
				type={type}
				id={id}
				{...register(id, {
					required: required,
					validate: validate && validate(watch),
				})}
			/>
		</div>
	);
};
