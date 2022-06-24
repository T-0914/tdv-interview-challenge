import { fireEvent, render, screen } from "@testing-library/react"
import { activities } from "../../core/__mocks__"
import { ActivityItem } from "./ActivityItem"
import '@testing-library/jest-dom/extend-expect'


describe("ActivityItem", () => {
    test("Should return null when have no some necessary function", () => {
        const activityItem = activities[0];
        const Item = render(<ActivityItem {...activityItem} />)

        expect(Item.container.querySelector("activity-tracker__activity-item")).toBeNull();
    })
    
    test("Should render properly", () => {
        const activityItem = activities[0];
        const Item = render(<ActivityItem {...activityItem} deleteActivity={() => {}} markAsCompleted={() => {}} />)

        expect(screen.getByText(activityItem.title)).toBeInTheDocument();
    })

    // [TODO!]
    test("Should delete item when clicking the button delete", () => {
        const mockDelete = jest.fn((id) => {})
        const mockMark = jest.fn((id) => {})
        const activityItem = activities[0];
        render(<ActivityItem {...activityItem} deleteActivity={mockDelete} markAsCompleted={mockMark} />)

        fireEvent.click(screen.getByRole("button", { name: /delete/i }))

        // expect(screen.queryByText(activityItem.title)).toBeNull();
    })
    
    // [TODO!]
    test("Should change background item when clicking the button 'mark as completed'", () => {
        const mockDelete = jest.fn((id) => {})
        const mockMark = jest.fn((id) => {})
        const activityItem = activities[0];
        const ActivityItemComponent = render(<ActivityItem {...activityItem} deleteActivity={mockDelete} markAsCompleted={mockMark} />)

        fireEvent.click(screen.getByRole("checkbox"))

        // expect(ActivityItemComponent.container.querySelector('activity-tracker__activity-item--disabled')).toBeInTheDocument();
    })
})