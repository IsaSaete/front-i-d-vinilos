import { render, screen } from "@testing-library/react";
import VinylsList from "./VinylsList";
import { aquellosOjosVerdes, elCirculo, vinylsTestData } from "../../fixtures";

describe("Given the VinylsList component", () => {
  describe("When it receives a 'Aquellos ojos verdes' & 'El Círculo vinyls' vinyls", () => {
    test("Then it should show the titles 'Aquellos ojos verdes' & 'El Círculo vinyls' inside a heading", () => {
      const expectedaquellosOjosVerdesTitle = new RegExp(
        aquellosOjosVerdes.title,
        "i",
      );
      const expectedElCirculoTitle = new RegExp(elCirculo.title, "i");

      render(<VinylsList vinyls={vinylsTestData} />);

      const aquellosOjosVerdesTitle = screen.getByRole("heading", {
        name: expectedaquellosOjosVerdesTitle,
      });
      const elCirculoTitle = screen.getByRole("heading", {
        name: expectedElCirculoTitle,
      });

      expect(aquellosOjosVerdesTitle).toBeInTheDocument();
      expect(elCirculoTitle).toBeInTheDocument();
    });
  });
});
