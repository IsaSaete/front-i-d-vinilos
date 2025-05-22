import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import store from "../../../store/store";
import { aquellosOjosVerdes } from "../../fixtures";
import AppTestRouter from "../../../router/AppTestRouter";

describe("Given the VinylDetailPage component", () => {
  describe("When it renders", () => {
    const vinyl = aquellosOjosVerdes.id;

    test("Then it should show a Info inside a level 1 heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/vinilo/${vinyl}`]}>
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: /info/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    describe("And the user click the button 'Quitar de mi colección'", () => {
      test("Then it should show a button with'Añadir a mi colección' text", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/vinilo/${vinyl}`]}>
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const removeToCollectionButton = await screen.findByLabelText(
          /quitar de mi colección/i,
        );

        expect(removeToCollectionButton).toBeInTheDocument();

        await userEvent.click(removeToCollectionButton);

        const addToCollectionButton = await screen.findByLabelText(
          /añadir a mi colección/i,
        );

        expect(addToCollectionButton).toBeInTheDocument();
      });
    });
  });
});
