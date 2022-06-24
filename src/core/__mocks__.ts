import { IActivity } from './types';

const activities: IActivity[] = [
	{
		id: '1',
		title: 'Complete the assignment from Tibco!',
		description:
			"I've participated the TDV's interview, then I have to complete their challenge.. I've participated the TDV's interview, then I have to complete their challenge. I've participated the TDV's interview, then I have to complete their challenge.",
		dueDate: '24-06-2022',
		isCompleted: true,
	},
	{
		id: '2',
		title: 'Complete the assignment from VBI',
		description:
			"I've participated the VBI course about Substrate, then I have to complete their assignments.",
		dueDate: '25-06-2022',
		isCompleted: false,
	},
	{
		id: '3',
		title: 'Complete the assignment from VBI 1',
		description: '',
		dueDate: '26-06-2022',
		isCompleted: false,
	},
	{
		id: '4',
		title: 'Complete the assignment from VBI 2',
		description: '',
		dueDate: '',
		isCompleted: false,
	},
];

export { activities };
