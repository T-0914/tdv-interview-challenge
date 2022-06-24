import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { LineThrough } from '../../components/LineThrough';
import { Button } from '../../components/Button';

export interface DescriptionProps {
	description?: string;
	isCompleted: boolean;
}

export const Description: FC<DescriptionProps> = ({
	description,
	isCompleted,
}) => {
	const [isCollapsed, setCollapsed] = useState<boolean>(true);
	const isHaveDescription = description !== '';
	if (!isHaveDescription) {
		return null;
	}

	return (
		<LineThrough isCompleted={isCompleted}>
			<div className={classNames('activity-tracker__activity-description')}>
				{isCollapsed ? `${description?.slice(0, 120)}...` : description}
			</div>
			<Button
				name="readmore-button"
				onClick={() => setCollapsed((state) => !state)}
				className="activity-tracker__read-more"
				role="readmore"
				content={isCollapsed ? `[Read more]` : `[Collapse]`}
			/>
		</LineThrough>
	);
};
