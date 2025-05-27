import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it renders", () => {
    test("Then it should show © 2025 I+D Vinilos. Todos los derechos reservados.", () => {
      render(<Footer />);

      const footerText = screen.getByText(
        "© 2025 I+D Vinilos. Todos los derechos reservados.",
      );

      expect(footerText).toBeInTheDocument();
    });
  });
});
