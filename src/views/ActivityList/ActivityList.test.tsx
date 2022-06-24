import { fireEvent, render, screen } from '@testing-library/react';
import { ActivityList } from '.';
import { ActivityTrackerContext } from '../../containers/store/context';
import { ActivityTrackerProvider } from '../../containers/store/provider';
import { activities } from '../../core/__mocks__';
import { CREATE_NEW_ACTIVITY_BUTTON } from '../../utils/constants';
import { ActivityCreate } from '../ActivityCreate/ActivityCreate';

describe('ActivityList', () => {
	const emptyState = {
		activities: [],
		createActivity: () => {},
		deleteActivity: () => {},
		markAsCompleted: () => {},
	};
	const state = {
		activities,
		createActivity: () => {},
		deleteActivity: () => {},
		markAsCompleted: () => {},
	};
	test('Should return an empty block when activities are empty', () => {
		const ActivityListComponent = render(
			<ActivityTrackerContext.Provider value={emptyState}>
				<ActivityList toggleForm={() => {}} />
			</ActivityTrackerContext.Provider>
		);

		expect(
			ActivityListComponent.container.querySelector(
				'activity-tracker__activities'
			)
		).toBeNull();
	});

	test('Should render a list', () => {
		const ActivityListComponent = render(
			<ActivityTrackerContext.Provider value={state}>
				<ActivityList toggleForm={() => {}} />
			</ActivityTrackerContext.Provider>
		);

		expect(
			screen.getByText('Complete the assignment from Tibco!')
		).toBeInTheDocument();
		expect(screen.getByText('24-06-2022')).toBeInTheDocument();
		expect(
			screen.getByText('Complete the assignment from VBI 1')
		).toBeInTheDocument();
	});

	test('Should show the create activity form properly', () => {
		render(<ActivityList toggleForm={() => {}} />);
		render(<ActivityCreate isShown />);
		fireEvent.click(
			screen.getByRole('button', {
				name: /create a new activity/i,
			})
		);

		expect(
			screen.getByRole('button', {
				name: /submit/i,
			})
		).toBeInTheDocument();
	});
});
