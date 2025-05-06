import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a logo that says 'VINILOS'", () => {
      render(<Header />);

      const expectedAltTextImage = /vinilos/i;

      const image = screen.getByAltText(expectedAltTextImage);

      expect(image).toBeInTheDocument();
    });
  });
});
