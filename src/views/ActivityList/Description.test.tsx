import { fireEvent, render, screen } from '@testing-library/react';
import { text } from 'node:stream/consumers';
import { Description } from './Description';

describe('Description', () => {
	test('Should return null if the description is empty string', () => {
		const DescriptionComponent = render(<Description isCompleted />);

		expect(
			DescriptionComponent.container.querySelector(
				'activity-tracker__activity-description'
			)
		).toBeNull();
	});

	test('Should return a description', () => {
		const DescriptionComponent = render(
			<Description description="Dess" isCompleted />
		);

		expect(screen.getByText('Dess...')).toBeInTheDocument();
	});

	test('Should render a Read more button', () => {
		const DescriptionComponent = render(
			<Description description="Dess" isCompleted />
		);

		const readmoreButton = DescriptionComponent.container.querySelector(
			'activity-tracker__read-more'
		);
		if (readmoreButton) {
			fireEvent.click(readmoreButton);

			expect(screen.getByText('[Read more]')).toBeNull();
			expect(screen.getByText('[Collapse]')).toBeInTheDocument();
		}
	});
});
