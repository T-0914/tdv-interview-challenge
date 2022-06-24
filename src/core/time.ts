import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../utils/constants';

const toDDMMYYYY = (time: string) => {
	if (time === '') {
		return '';
	}
	return moment(time).format(DEFAULT_DATE_FORMAT);
};

const isValidDate = (time: string, inputFormat = DEFAULT_DATE_FORMAT) =>
	moment(time, inputFormat).isValid();

export { toDDMMYYYY, isValidDate };
