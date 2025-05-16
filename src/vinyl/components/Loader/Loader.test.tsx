import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show Cargando inside a heading", async () => {
      const expectedTitle = /cargando/i;

      render(<Loader />);

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should an image of record is playing", async () => {
      const expectedImageText = /vinilo girando/i;

      render(<Loader />);

      const imageVinyl = await screen.findByAltText(expectedImageText);

      expect(imageVinyl).toBeInTheDocument();
    });
  });
});
