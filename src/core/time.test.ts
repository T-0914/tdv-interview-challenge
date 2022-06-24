import { isValidDate, toDDMMYYYY } from './time';

describe('Format Time', () => {
	test('should return the right format', () => {
		const input = '06/23/2022';
		const output = '23-06-2022';
		expect(toDDMMYYYY(input)).toBe(output);
	});

	test('should return empty string if time is empty string', () => {
		const input = '';
		const output = '';
		expect(toDDMMYYYY(input)).toBe(output);
	});
});

describe('Validate Time', () => {
	test("should return the true value with '-'", () => {
		const input = '23-06-2022';

		expect(isValidDate(input)).toBeTruthy();
	});

	test("should return the true value with '/'", () => {
		const input = '23/06/2022';

		expect(isValidDate(input)).toBeTruthy();
	});

	test('should return the false value', () => {
		const input = '';

		expect(isValidDate(input)).toBeFalsy();
	});
});
