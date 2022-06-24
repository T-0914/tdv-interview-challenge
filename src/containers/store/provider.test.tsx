import { render } from "@testing-library/react"
import { useReducer } from "react";
import ActivityTracker from "../../views/ActivityTracker"
import { ActivityTrackerProvider } from "./provider";
import { AppReducer, initialState } from "./reducer";

describe("Provider", () => {
    test("Should return the component with a provider outside", () => {
        const title = 'Title should be shown here!';
        const AppComponentWithProvider = render(<ActivityTrackerProvider>
            <ActivityTracker applicationTitle={title} />
        </ActivityTrackerProvider>)

        expect(AppComponentWithProvider.getByText(title)).toBeInTheDocument()
    })

    // test("", () => {
    //     const [state, dispatch] = useReducer(AppReducer, initialState);
    //     dispatch()
    // })
})