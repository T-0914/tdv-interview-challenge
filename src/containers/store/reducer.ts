import { ActivityContextType, IActivity } from '../../core/types';
import { activities } from '../../core/__mocks__';
import { APPLICATION_TITTLE } from '../../utils/constants';
import { ActionType } from './actions';

export interface IActivityTrackerState {
	activities: IActivity[];
}

export const initialState = {
	activities,
	// activities: []
};

export const AppReducer = (state: IActivityTrackerState, action: any) => {
	switch (action.type) {
		case ActionType.CREATE_ACTIVITY:
			return {
				activities: [...state.activities, action.payload],
			};
		case ActionType.DELETE_ACTIVITY:
			return {
				activities: state.activities.filter(
					(activity: IActivity) => activity.id !== action.payload.id
				),
			};
		case ActionType.MARK_AS_COMPLETED:
			return {
				activities: state.activities.map((activity: IActivity) =>
					activity.id === action.payload.id
						? { ...activity, isCompleted: !activity.isCompleted }
						: activity
				),
			};
		default:
			return state;
	}
};
