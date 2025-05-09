import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show a logo that says 'VINILOS'", () => {
      render(<Layout />, { wrapper: MemoryRouter });

      const expectedAltTextImage = /vinilos/i;

      const image = screen.getByAltText(expectedAltTextImage);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a 'Listado' link", () => {
      const expectedLink = /listado/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const listLink = screen.getByRole("link", { name: expectedLink });

      expect(listLink).toBeInTheDocument();
    });
  });
});
