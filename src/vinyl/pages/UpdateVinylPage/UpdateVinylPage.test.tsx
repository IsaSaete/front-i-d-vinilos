import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../../store/store";
import { aquellosOjosVerdes } from "../../fixtures";
import AppTestRouter from "../../../router/AppTestRouter";

describe("Given the ModifyVinylPage component", () => {
  describe("When it renders in path /modificar-vinilo/14fbf39d8c9d1e4dabc5f1e1", () => {
    test("Then it should show 'Modifica el vinilo' inside a level 1 heading", async () => {
      const expectedTitle = /modifica el vinilo/i;

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show Aquellos Ojos Verdes in title text box", async () => {
      const expectedLabel = /título:/i;
      const titleVinyl = "Aquellos Ojos Verdes";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const titleTextBox = await screen.findByLabelText(expectedLabel);

      expect(titleTextBox).toHaveValue(titleVinyl);
    });

    test("Then it should show Carlos Gardel in artist text box", async () => {
      const expectedLabel = /artista:/i;
      const artistVinyl = "Carlos Gardel";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const artistTextBox = await screen.findByLabelText(expectedLabel);

      expect(artistTextBox).toHaveValue(artistVinyl);
    });

    test("Then it should show Argentina in country text box", async () => {
      const expectedLabel = /país:/i;
      const countryVinyl = "Argentina";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const countryTextBox = await screen.findByLabelText(expectedLabel);

      expect(countryTextBox).toHaveValue(countryVinyl);
    });

    test("Then it should show Tango in genre text box", async () => {
      const expectedLabel = /género:/i;
      const genreVinyl = "Tango";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const genreTextBox = await screen.findByLabelText(expectedLabel);

      expect(genreTextBox).toHaveValue(genreVinyl);
    });

    test("Then it should show 7'' in format text box", async () => {
      const expectedLabel = /formato:/i;
      const formatVinyl = "7''";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const formatTextBox = await screen.findByLabelText(expectedLabel);

      expect(formatTextBox).toHaveValue(formatVinyl);
    });

    test("Then it should show 1935-01-01 in date text box", async () => {
      const expectedLabel = /lanzamiento:/i;
      const releaseDateVinyl = "1935-01-01";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const releaseDateTextBox = await screen.findByLabelText(expectedLabel);

      expect(releaseDateTextBox).toHaveValue(releaseDateVinyl);
    });

    test("Then it should show Tango & Ranchera in styles text box", async () => {
      const expectedLabel = /estilo:/i;
      const stylesVinyl = "Tango, Ranchera";

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const stylesTextBox = await screen.findByLabelText(expectedLabel);

      expect(stylesTextBox).toHaveValue(stylesVinyl);
    });

    test("Then it should show a 'Guardar cambios' inside a button", async () => {
      const expectedButtonText = /guardar cambios/i;

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const saveButton = await screen.findByRole("button", {
        name: expectedButtonText,
      });

      expect(saveButton).toBeInTheDocument();
    });
  });
});
