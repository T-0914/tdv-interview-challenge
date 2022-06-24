import { FieldValues } from "react-hook-form";

export interface IActivity {
	id: string;
	title: string;
	description?: string;
	dueDate?: string;
	isCompleted: boolean;
}

export type ActivityContextType = {
	activities: IActivity[];
	createActivity: (activity: IActivity) => void;
	deleteActivity: (id: string) => void;
	markAsCompleted: (id: string) => void;
};

export interface IFormData extends FieldValues {
	activityTitle: string;
	activityDescription: string;
	activityDueDate: string;
}
