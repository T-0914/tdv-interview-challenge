import { createContext } from "react";
import { ActivityContextType } from "../../core/types";

export const ActivityTrackerContext = createContext<ActivityContextType | null>(null);