import { IActivity } from '../../core/types';
import { ActionType } from './actions';
import { IActivityTrackerState } from './reducer';
import { AppReducer, initialState } from './reducer';
import { useReducer } from 'react';
import { activities } from '../../core/__mocks__';

describe('Reducer', () => {
	const TEST_ID = 'test-id';

	const activityItem: IActivity = {
		id: TEST_ID,
		title: 'Activity Item - Title',
		description: 'Activity Item - Description',
		dueDate: '24-06-2022',
		isCompleted: false,
	};

	test('Should return the initial state', () => {
		expect(initialState).toEqual({
			activities,
		});
	});

	test('Should update the activity list when invoking the CREATE_ACTIVITY action', () => {
		const action = {
			type: ActionType.CREATE_ACTIVITY,
			payload: activityItem,
		};

		expect(AppReducer(initialState, action)).toEqual({
			activities: [...activities, activityItem],
		});
	});

	test('Should return the new activity list that does not contain the deleted activity', () => {
		const action = {
			type: ActionType.DELETE_ACTIVITY,
			payload: { id: TEST_ID },
		};
		const testState = {
			activities: [...activities, activityItem],
		};

		expect(AppReducer(testState, action)).toEqual({
			activities,
		});
	});

	test('Should return the new activity list that contains the completed activity', () => {
		const action = {
			type: ActionType.MARK_AS_COMPLETED,
			payload: { id: TEST_ID },
		};
		const testState = {
			activities: [activityItem],
		};

		const newActivityItem = {
			...activityItem,
			isCompleted: true,
		};
		expect(AppReducer(testState, action)).toEqual({
			activities: [newActivityItem],
		});
	});

	test('Should return the original activity list when the input id is not match', () => {
		const action = {
			type: ActionType.MARK_AS_COMPLETED,
			payload: { id: `${TEST_ID}_wrong_id` },
		};
		const testState = {
			activities: [activityItem],
		};

		expect(AppReducer(testState, action)).toEqual({
			activities: [activityItem],
		});
	});

	test('Should return the original state', () => {
		const action = {
			type: `WRONG_ACTION`,
			payload: `WRONG_PAYLOAD`,
		};

		expect(AppReducer(initialState, action)).toEqual(initialState);
	});
});
