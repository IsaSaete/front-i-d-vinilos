import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Listado' link", () => {
      const expectedLink = /listado/i;

      render(<Navigation />, { wrapper: MemoryRouter });

      const listLink = screen.getByRole("link", { name: expectedLink });

      expect(listLink).toBeInTheDocument();
    });
  });
});
