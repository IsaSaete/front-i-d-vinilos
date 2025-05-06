import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show a logo that says 'VINILOS'", () => {
      render(<Layout />);

      const expectedAltTextImage = /vinilos/i;

      const image = screen.getByAltText(expectedAltTextImage);

      expect(image).toBeInTheDocument();
    });
  });
});
