import { FieldValues } from 'react-hook-form';
import { mapperFormData } from './mapper';
import { IActivity } from './types';

const mockUUID = 'test-id';
jest.mock('uuid', () => ({ v4: () => mockUUID }));

describe('Mapper', () => {
	test('mapper should return the right value', () => {
		const input: FieldValues = {
			activityTitle: 'Raw Activity Title',
			activityDescription: 'Raw Activity Description',
			activityDueDate: '06/23/2022',
		};

		const output: IActivity = {
			id: mockUUID,
			title: 'Raw Activity Title',
			description: 'Raw Activity Description',
			dueDate: '23-06-2022',
			isCompleted: false,
		};
		expect(mapperFormData(input)).toStrictEqual(output);
	});

	test('mapper should return the right value when description and dueDate are falsy values', () => {
		const input: FieldValues = {
			activityTitle: 'Raw Activity Title',
			activityDescription: '',
			activityDueDate: '',
		};

		const output: IActivity = {
			id: mockUUID,
			title: 'Raw Activity Title',
			description: '',
			dueDate: '',
			isCompleted: false,
		};
		expect(mapperFormData(input)).toStrictEqual(output);
	});
});
