import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRouter from "./AppRouter";

describe("Given the AppRouter component", () => {
  describe("when it renders in path /vinils that it doesn't exists", () => {
    test("Then it should show a 'Página no encontrada' inside a heading", async () => {
      render(
        <MemoryRouter initialEntries={["/vinils"]}>
          <AppRouter />
        </MemoryRouter>,
      );

      const titlePage = await screen.findByRole("heading", {
        name: /página no encontrada/i,
        level: 1,
      });

      expect(titlePage).toBeInTheDocument();
    });
  });
});
