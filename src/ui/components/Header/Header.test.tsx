import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a link with a label text 'Página principal de vinilos", () => {
      const expectedLabelText = /página principal de vinilos/i;

      render(<Header />, { wrapper: MemoryRouter });

      const linkLabel = screen.getByLabelText(expectedLabelText);

      expect(linkLabel).toBeInTheDocument();
    });
  });
});
