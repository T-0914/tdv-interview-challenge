import React, { FC, useContext, useState } from 'react';
import './activity-tracker.scss';
import { Box } from '../components/Box';
import { BoxTitle } from '../components/Title';
import { ActivityCreate } from './ActivityCreate/ActivityCreate';
import { ActivityList } from './ActivityList';
import { ActivityTrackerContext } from '../containers/store/context';

export interface ActivityTrackerProps {
	applicationTitle: string;
}

const ActivityTracker: FC<ActivityTrackerProps> = ({ applicationTitle }) => {
	const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
	const store = useContext(ActivityTrackerContext);
	const { createActivity } = store || {};
	return (
		<Box
			className="activity-tracker__wrapper"
			Title={
				<BoxTitle
					className="activity-tracker__app-title"
					content={applicationTitle}
				/>
			}
		>
			<Box className="activity-tracker__main">
				<ActivityList toggleForm={() => setShowCreateForm((state) => !state)} />
				<ActivityCreate isShown={showCreateForm} onSubmit={createActivity} />
			</Box>
		</Box>
	);
};

export default ActivityTracker;
