import React from 'react';
import { ActivityTrackerProvider } from './containers/store/provider';
import { APPLICATION_TITTLE } from './utils/constants';
import ActivityTracker from './views/ActivityTracker';

function App() {
	return (
		<ActivityTrackerProvider>
			<ActivityTracker applicationTitle={APPLICATION_TITTLE} />
		</ActivityTrackerProvider>
	);
}

export default App;
