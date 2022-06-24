import classNames from 'classnames';
import React, { FC } from 'react';
import { LineThrough } from '../LineThrough';

export interface BoxTitleProps {
	className?: string;
	content: string;
	isCompleted?: boolean;
}

export const BoxTitle: FC<BoxTitleProps> = ({ isCompleted, className, content }) => {
	return (
		<div className={classNames('box-title', 'capitalize', className)}>
			<LineThrough isCompleted={isCompleted}>
				{content}
			</LineThrough>
		</div>
	);
};
