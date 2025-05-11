import { render, screen } from "@testing-library/react";
import VinylsPage from "./VinylsPage";

describe("Given de VinylsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show Vinilos inside a level 1 heading", () => {
      const expectedTitle = /vinilos/i;

      render(<VinylsPage />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
