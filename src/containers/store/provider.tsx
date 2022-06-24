import { FC, PropsWithChildren, useReducer } from 'react';
import { IActivity } from '../../core/types';
import { ActionType } from './actions';
import { ActivityTrackerContext } from './context';
import { AppReducer, initialState } from './reducer';

type TActivityTrackerProvider = PropsWithChildren<{}>;

export const ActivityTrackerProvider: FC<TActivityTrackerProvider> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const createActivity = (activity: IActivity) => {
		dispatch({
			type: ActionType.CREATE_ACTIVITY,
			payload: activity,
		});
	};

	const deleteActivity = (id: string) => {
		dispatch({ type: ActionType.DELETE_ACTIVITY, payload: { id } });
	};

	const markAsCompleted = (id: string) => {
		dispatch({ type: ActionType.MARK_AS_COMPLETED, payload: { id } });
	};

	return (
		<ActivityTrackerContext.Provider
			value={{
				activities: state.activities,
				createActivity,
				deleteActivity,
				markAsCompleted,
			}}
		>
			{children}
		</ActivityTrackerContext.Provider>
	);
};
