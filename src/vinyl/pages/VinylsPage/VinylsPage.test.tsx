import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import VinylsPage from "./VinylsPage";
import store from "../../../store/store";
import { awakeningsLive, strangeWeather } from "../../dto/fixturesDto";

describe("Given de VinylsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show Vinilos inside a level 1 heading", async () => {
      const expectedTitle = /vinilos/i;

      render(
        <Provider store={store}>
          <VinylsPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    describe("And the user clicks the button with X from 'Strange Weather, Isn't It?' vinyl", () => {
      test("Then it shouldn't show 'Strange Weather, Isn't It?' vinyl", async () => {
        render(
          <Provider store={store}>
            <VinylsPage />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const vinylTitle = await screen.findByRole("heading", {
          name: new RegExp(strangeWeather.title, "i"),
        });

        expect(vinylTitle).toBeInTheDocument();

        const vinylCard = vinylTitle.closest("article")!;

        const deleteButton =
          await within(vinylCard).findByLabelText(/eliminar vinilo/i);

        await userEvent.click(deleteButton);

        const deletedVinylTitle = await screen.queryByRole("heading", {
          name: new RegExp(strangeWeather.title, "i"),
        });

        expect(deletedVinylTitle).toBeNull();
      });
    });
  });

  describe("And the user click the button 'Quitar de mi colección' from Awakening Live vinyl", () => {
    test("Then it should show a button with'Añadir a mi colección' text", async () => {
      render(
        <Provider store={store}>
          <VinylsPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const vinylTitle = await screen.findByRole("heading", {
        name: new RegExp(awakeningsLive.title, "i"),
      });

      expect(vinylTitle).toBeInTheDocument();

      const vinylCard = vinylTitle.closest("article")!;

      const removeToCollectionButton = await within(vinylCard).findByLabelText(
        /quitar de mi colección/i,
      );

      expect(removeToCollectionButton).toBeInTheDocument();

      await userEvent.click(removeToCollectionButton);

      const addToCollectionButton = await within(vinylCard).findByLabelText(
        /añadir a mi colección/i,
      );

      expect(addToCollectionButton).toBeInTheDocument();
    });
  });
});
