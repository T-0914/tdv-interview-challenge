import React, { FC, useContext } from 'react';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { ActivityTrackerContext } from '../../containers/store/context';
import { CREATE_NEW_ACTIVITY_BUTTON } from '../../utils/constants';
import { ActivityItem } from './ActivityItem';

export interface ActivityListProps {
	toggleForm: () => void
}

export const ActivityList: FC<ActivityListProps> = ({ toggleForm }) => {
	const store = useContext(ActivityTrackerContext);
	const activities = store?.activities;
	const { deleteActivity, markAsCompleted } = store || {};
	return (
		<Box className="activity-tracker__activity-list">
			<Button
				className="activity-tracker__create-activity-button"
				content={CREATE_NEW_ACTIVITY_BUTTON}
				onClick={toggleForm}
			/>
			<Box className="activity-tracker__activities">
				{activities &&
					activities.map((activity, index) => (
						<ActivityItem
							key={`activity_${index}`}
                            id={activity.id}
                            title={activity.title}
							description={activity.description}
							dueDate={activity.dueDate}
							isCompleted={activity.isCompleted}
							deleteActivity={deleteActivity}
							markAsCompleted={markAsCompleted}
						/>
					))}
			</Box>
		</Box>
	);
};
