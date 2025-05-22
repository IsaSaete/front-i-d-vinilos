import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import AppRouter from "./AppRouter";
import store from "../store/store";

describe("Given the AppRouter component", () => {
  describe("when it renders in path /vinils that it doesn't exists", () => {
    test("Then it should show a 'Página no encontrada' inside a level 1 heading", async () => {
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

  describe("When it renders in path /vinilos", () => {
    test("Then it should show 'Vinilos' inside a level 1 heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/vinilos"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const titleVinylsPage = await screen.findByRole("heading", {
        name: /vinilos/i,
        level: 1,
      });

      expect(titleVinylsPage).toBeInTheDocument();
    });

    describe("And the user clicks on 'Añadir' link", () => {
      test("Then it should show 'Añade un vinilo' inside a level 1 heading", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/vinilos"]}>
              <AppRouter />
            </MemoryRouter>
          </Provider>,
        );

        const addVinylLink = await screen.findByRole("link", {
          name: /añadir/i,
        });

        expect(addVinylLink).toBeInTheDocument();

        await userEvent.click(addVinylLink);

        const titleAddPage = await screen.findByRole("heading", {
          name: /añade un vinilo/i,
        });

        expect(titleAddPage).toBeInTheDocument();
      });
    });
  });
});
