import React, { FC } from 'react';

export interface ErrorMessageProps {
	condition?: boolean;
	message?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ condition, message }) => {
	if (!condition) {
		return null
	}

	return <div className="error-message" role="alert">{message}</div>;;
};
