import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a logo that says 'VINILOS'", () => {
      const expectedAltTextImage = /vinilos/i;

      render(<Header />, { wrapper: MemoryRouter });

      const image = screen.getByAltText(expectedAltTextImage);

      expect(image).toBeInTheDocument();
    });
  });
});
