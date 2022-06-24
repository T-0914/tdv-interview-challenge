import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

export type LineThroughProps = PropsWithChildren<{
	isCompleted?: boolean;
}>;

export const LineThrough: FC<LineThroughProps> = ({ isCompleted, children }) => {
	return (
        <div className={classNames({ "line-through": isCompleted })}>{children}</div>
    );
};
