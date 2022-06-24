import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LineThrough } from '../../components/LineThrough';
import { BoxTitle } from '../../components/Title';
import { ActivityTrackerContext } from '../../containers/store/context';
import { isValidDate } from '../../core/time';
import { DELETE_ACTIVITY_BUTTON } from '../../utils/constants';
import { Description } from './Description';

export interface ActivityItemProps {
	id: string;
	title: string;
	description?: string;
	dueDate?: string;
	isCompleted: boolean;
	deleteActivity?: (id: string) => void;
	markAsCompleted?: (id: string) => void;
}

export const ActivityItem: FC<ActivityItemProps> = ({
	id,
	title,
	description,
	dueDate,
	isCompleted,
	deleteActivity,
	markAsCompleted
}) => {
	if (!deleteActivity || !markAsCompleted) {
		return null;
	}

	return (
		<Box
			className={classNames('activity-tracker__activity-item', {
				'activity-tracker__activity-item--disabled': isCompleted,
			})}
			Title={
				<BoxTitle
					content={title}
					isCompleted={isCompleted}
					className="activity-tracker__activity-title"
				/>
			}
		>
			<Description description={description} isCompleted={isCompleted} />
			<div className="activity-tracker__bottom">
				<LineThrough isCompleted={isCompleted}>
					<div className="activity-tracker__activity-due-date">
						{dueDate && isValidDate(dueDate) && (
							<>
								<b>Due:</b> {dueDate}
							</>
						)}
					</div>
				</LineThrough>
				<Button
					className="activity-tracker__delete-button"
					content={DELETE_ACTIVITY_BUTTON}
					onClick={() => deleteActivity(id)}
				/>
			</div>
			<div className="activity-tracker__activity-status">
				<Input
					className="activity-tracker__status"
					type="checkbox"
					checked={isCompleted}
					onChange={() => markAsCompleted(id)}
				/>
			</div>
		</Box>
	);
};
