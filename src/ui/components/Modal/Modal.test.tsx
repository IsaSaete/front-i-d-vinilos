import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Given the Modal component", () => {
  describe("When it receives an action and a text 'Todo bien'", () => {
    const action = vitest.fn();

    test("Then it should show a 'Todo bien' inside a heading", async () => {
      const expectedText = /todo bien/i;

      render(<Modal action={action} isSuccess={true} text="Todo bien" />);

      const modalText = await screen.getByRole("heading", {
        name: expectedText,
      });

      expect(modalText).toBeInTheDocument();
    });

    test("Then it should show a 'x' button to closed", async () => {
      const expectedText = /cerrar ventana/i;

      render(<Modal action={action} isSuccess={false} text="Todo bien" />);

      const button = await screen.getByRole("button", {
        name: expectedText,
      });

      expect(button).toBeInTheDocument();
    });

    describe("And the user clicks on 'X' button", () => {
      test("Then it should call the button action", async () => {
        const expectedText = /cerrar ventana/i;

        render(<Modal action={action} isSuccess={true} text="Todo bien" />);

        const button = await screen.getByRole("button", {
          name: expectedText,
        });

        await userEvent.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
