import { render, screen } from "@testing-library/react";
import VinylCard from "./VinylCard";
import { aquellosOjosVerdes } from "../../fixtures";

describe("Given the VinylCard component", () => {
  describe("When it receives Aquellos Ojos Verdes vinyl", () => {
    test("Then it should show 'Aquellos Ojos Verdes' inside a heading", () => {
      const expectedVinylTitle = new RegExp(aquellosOjosVerdes.title, "i");

      render(<VinylCard vinyl={aquellosOjosVerdes} index={0} />);

      const vinylTitle = screen.getByRole("heading", {
        name: expectedVinylTitle,
      });

      expect(vinylTitle).toBeInTheDocument();
    });

    test("Then it should show 'Carlos Gardel' inside a heading", () => {
      const expectedVinylArtist = new RegExp(aquellosOjosVerdes.artist, "i");

      render(<VinylCard vinyl={aquellosOjosVerdes} index={0} />);

      const vinylArtist = screen.getByRole("heading", {
        name: expectedVinylArtist,
      });

      expect(vinylArtist).toBeInTheDocument();
    });

    test("Then it should show the image of the vinyl cover Aquellos ojos verdes", () => {
      const expectedImageAlt = /vinilo Aquellos Ojos Verdes de Carlos Gardel/i;

      render(<VinylCard vinyl={aquellosOjosVerdes} index={0} />);

      const vinylImage = screen.getByAltText(expectedImageAlt);

      expect(vinylImage).toBeInTheDocument();
    });
  });
});
