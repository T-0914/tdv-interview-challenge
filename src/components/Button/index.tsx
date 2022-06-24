import classNames from 'classnames';
import React, { FC } from 'react';

export interface ButtonProps {
	className?: string;
	content: string;
	[x: string]: any;
}

export const Button: FC<ButtonProps> = ({ className, content, ...props }) => {
	return (
		<button
			className={classNames(
				'activity-tracker__button',
				'capitalize',
				className
			)}
			{...props}
		>
			{content}
		</button>
	);
};
