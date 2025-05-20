import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import store from "../store/store";

describe("Given the AppRouter component", () => {
  describe("when it renders in path /vinils that it doesn't exists", () => {
    test("Then it should show a 'Página no encontrada' inside a heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/vinils"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const titlePage = await screen.findByRole("heading", {
        name: /página no encontrada/i,
        level: 1,
      });

      expect(titlePage).toBeInTheDocument();
    });
  });
});
