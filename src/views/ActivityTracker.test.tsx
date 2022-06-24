import { fireEvent, render, screen } from '@testing-library/react';
import { APPLICATION_TITTLE, CREATE_NEW_ACTIVITY_BUTTON } from '../utils/constants';
import ActivityTracker from './ActivityTracker';

describe('Activity Tracker', () => {
	test('Render app with a title', () => {
		render(<ActivityTracker applicationTitle={APPLICATION_TITTLE} />);
        expect(screen.getByText(APPLICATION_TITTLE)).toBeInTheDocument();
	});
});
