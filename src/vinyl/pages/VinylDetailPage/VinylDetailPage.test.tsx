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
    const expectedPageTitle = /info/i;

    test("Then it should show a Info inside a level 1 heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/vinilo/${vinyl}`]}>
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    describe("And the user click the button 'Quitar de mi colección'", () => {
      test("Then it should show a button with'Añadir a mi colección' text", async () => {
        const expectedRemoveButtonText = /quitar de mi colección/i;
        const expetedAddButtonText = /añadir a mi colección/i;

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/vinilo/${vinyl}`]}>
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const removeToCollectionButton = await screen.findByLabelText(
          expectedRemoveButtonText,
        );

        expect(removeToCollectionButton).toBeInTheDocument();

        await userEvent.click(removeToCollectionButton);

        const addToCollectionButton =
          await screen.findByLabelText(expetedAddButtonText);

        expect(addToCollectionButton).toBeInTheDocument();
      });
    });

    describe("And the user click the button 'Modificar info", () => {
      test("Then it should show 'Modifica el vinilo' inside a heading", async () => {
        const expectedLinkText = /modificar info/i;
        const expectedPageTitle = /modifica el vinilo/i;

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/vinilo/${vinyl}`]}>
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const modifyInfoLink = await screen.findByRole("link", {
          name: expectedLinkText,
        });

        expect(modifyInfoLink).toBeInTheDocument();

        await userEvent.click(modifyInfoLink);

        const pageTitle = await screen.findByRole("heading", {
          name: expectedPageTitle,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });
});
