import React, { FC, PropsWithRef } from 'react';
import classNames from 'classnames';

export type InputProps = PropsWithRef<{
	useTextArea?: boolean;
	className?: string;
	[x: string]: any;
}>;

export const Input = React.forwardRef<any, InputProps>(
	({ useTextArea = false, className, ...props }, ref) => {
		if (useTextArea) {
			return (
				<textarea
					ref={ref}
					className={classNames(
						'activity-tracker__input',
						'activity-tracker__textarea'
					)}
					{...props}
				></textarea>
			);
		}

		return (
			<input
				ref={ref}
				className={classNames('activity-tracker__input', className)}
				{...props}
			/>
		);
	}
);
