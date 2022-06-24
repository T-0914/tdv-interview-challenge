import classNames from 'classnames';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { mapperFormData } from '../../core/mapper';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { BoxTitle } from '../../components/Title';
import {
	CREATE_NEW_ACTIVITY_SUBMIT_BUTTON,
	CREATE_NEW_ACTIVITY_TITLE,
	ERROR_MISSING_TITLE,
	PLACEHOLDER_DESCRIPTION,
	PLACEHOLDER_TITLE,
} from '../../utils/constants';
import { IActivity, IFormData } from '../../core/types';
import { ErrorMessage } from '../../components/ErrorMessage';
import { isNotEmptyString } from '../../core/validate';

export interface ActivityCreateProps {
	isShown: boolean;
	onSubmit?: (activity: IActivity) => void;
}

export const ActivityCreate: FC<ActivityCreateProps> = ({
	isShown,
	onSubmit,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const _onSubmit = (formData: FieldValues) => {
		if (onSubmit) {
			onSubmit(mapperFormData(formData));
			reset();
		}
	};

	return (
		<Box
			className={classNames('activity-tracker__create-activity', {
				'activity-tracker__create-activity--hide': !isShown,
			})}
			Title={
				<BoxTitle
					className="activity-tracker__create-activity-title"
					content={CREATE_NEW_ACTIVITY_TITLE}
				/>
			}
		>
			<form
				onSubmit={handleSubmit(_onSubmit)}
				className="activity-tracker__entries"
			>
				<Input
					type="input"
					className="activity-tracker__new-title"
					placeholder={PLACEHOLDER_TITLE}
					autoComplete="off"
					{...register('activityTitle', {
						required: true,
						validate: isNotEmptyString,
					})}
				/>
				<Input
					useTextArea
					rows={10}
					type="input"
					className="activity-tracker__new-description"
					placeholder={PLACEHOLDER_DESCRIPTION}
					{...register('activityDescription')}
				/>
				<Input
					type="date"
					className="activity-tracker__new-due-date"
					{...register('activityDueDate')}
				/>
				<Button
					className="activity-tracker__submit-activity-button"
					content={CREATE_NEW_ACTIVITY_SUBMIT_BUTTON}
				/>
				<ErrorMessage
					condition={
						errors.activityTitle?.type === 'required' ||
						errors.activityTitle?.type === 'validate'
					}
					message={ERROR_MISSING_TITLE}
				/>
			</form>
		</Box>
	);
};
