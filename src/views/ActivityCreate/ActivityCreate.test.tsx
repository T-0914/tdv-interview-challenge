import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ActivityCreate } from './ActivityCreate';
import { ERROR_MISSING_TITLE, PLACEHOLDER_TITLE } from '../../utils/constants';

describe('ActivityCreate', () => {
	const mockSubmit = jest.fn((formData) => {
		return Promise.resolve(formData);
	});

	// beforeAll(() => {
	// 	render(<ActivityCreate isShown onSubmit={mockSubmit} />);
	// });

	test('Should display error when title is not filled yet', async () => {
		render(<ActivityCreate isShown onSubmit={mockSubmit} />);
		fireEvent.submit(
			screen.getByRole('button', {
				name: /submit/i,
			})
		);

		expect(await screen.findAllByRole('alert')).toHaveLength(1);
		expect(mockSubmit).not.toBeCalled();
	});

	test('Should display error when title is invalid', async () => {
		const { container } = render(
			<ActivityCreate isShown onSubmit={mockSubmit} />
		);
		const inputEl = container.querySelector(`input[name="activityTitle"]`);

		inputEl &&
			fireEvent.input(inputEl, {
				target: {
					value: '          ',
				},
			});

		fireEvent.submit(
			screen.getByRole('button', {
				name: /submit/i,
			})
		);

		expect(await screen.findAllByRole('alert')).toHaveLength(1);
	});

	test('Should submit a form when title is valid', async () => {
		const { container } = render(
			<ActivityCreate isShown onSubmit={mockSubmit} />
		);
		const inputEl = container.querySelector(`input[name="activityTitle"]`);
		const submitButton = container.querySelector(
			'activity-tracker__submit-activity-button'
		);
		if (inputEl && submitButton) {
			fireEvent.input(inputEl, {
				target: {
					value: '     Test title     ',
				},
			});

			fireEvent.click(submitButton);
			expect(container.querySelector('error-message')).toBeNull();
			expect(inputEl?.textContent).toBe('');
		}
	});

	test('Should do nothing when have no submit function', async () => {
		const { container } = render(<ActivityCreate isShown />);
		const inputEl = container.querySelector(`input[name="activityTitle"]`);
		const submitButton = container.querySelector(
			'activity-tracker__submit-activity-button'
		);
		if (inputEl && submitButton) {
			fireEvent.input(inputEl, {
				target: {
					value: '     Test title     ',
				},
			});
			fireEvent.click(submitButton);
			expect(container.querySelector('error-message')).toBeNull();
			expect(inputEl?.textContent).toBe('     Test title     ');
		}
	});
});
