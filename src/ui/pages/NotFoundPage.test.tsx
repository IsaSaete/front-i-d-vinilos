import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Página no encontrada' inside a heading", () => {
      const expectedTitle = /página no encontrada/i;

      render(<NotFoundPage />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show an image with a 404 and the 0 is represented by a vinyl", () => {
      const expectedAltImage =
        "Error 404. El 0 está representado con un vinilo";

      render(<NotFoundPage />);

      const image = screen.getByAltText(expectedAltImage);

      expect(image).toBeInTheDocument();
    });
  });
});
