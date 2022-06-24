import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type BoxProps = PropsWithChildren<{
	className?: string;
	Title?: React.ReactNode;
}>;

export const Box: FC<BoxProps> = ({ className, Title, children, ...props }) => {
	return (
		<div className={classNames('box-wrapper', className)} {...props}>
			{Title}
			{children}
		</div>
	);
};
