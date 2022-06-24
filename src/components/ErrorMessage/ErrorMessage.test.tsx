import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "."

test("Should return 'null' if condition is not provided", () => {
    const errorComponent = render(<ErrorMessage condition={false} message="Test message"/>);

    expect(errorComponent.container.firstChild).toBeNull();
})

test("Should show a error message if there is an error", () => {
    render(<ErrorMessage condition={true} message="Test message"/>);

    expect(screen.getByText('Test message')).toBeInTheDocument();
})