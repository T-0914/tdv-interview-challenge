import { FieldValues } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { toDDMMYYYY } from './time';
import { IActivity } from "./types"

const mapperFormData = (formData: FieldValues): IActivity => {
    const {
        activityTitle: title,
        activityDescription: description,
        activityDueDate: dueDate
    } = formData;

    return {
        id: uuidv4(),
        title: title,
        description: description,
        dueDate: toDDMMYYYY(dueDate),
        isCompleted: false
    } 
}

export { mapperFormData }