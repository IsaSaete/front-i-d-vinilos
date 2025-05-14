import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the button component", () => {
  describe("Then it receives a 'Acariciar a Julian' as children and an action", () => {
    const expectedButtonText = "Acariciar a Julian";

    test("Then it should show a 'Acariciar a Julian' button", () => {
      render(<Button action={() => {}}>{expectedButtonText}</Button>);

      const button = screen.getByRole("button", {
        name: new RegExp(expectedButtonText, "i"),
      });

      expect(button).toBeInTheDocument();
    });

    describe("And the user clicks the 'Acariciar a Julian' button", () => {
      test("Then it should call the action", async () => {
        const action = vi.fn();

        render(<Button action={action}>{expectedButtonText}</Button>);

        const button = screen.getByRole("button", {
          name: new RegExp(expectedButtonText, "i"),
        });

        await userEvent.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
