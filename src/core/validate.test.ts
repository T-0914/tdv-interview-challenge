import { isNotEmptyString } from './validate';

describe('Validate a string input', () => {
	test('Should return false if input is an empty string', () => {
		const input = '     ';
		expect(isNotEmptyString(input)).toBeFalsy();
	});

	test('Should return true if input is not an empty string', () => {
		const input = '  input  ';
		expect(isNotEmptyString(input)).toBeTruthy();
	});
});
