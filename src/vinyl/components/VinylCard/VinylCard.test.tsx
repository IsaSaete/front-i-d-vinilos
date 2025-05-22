import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import VinylCard from "./VinylCard";
import { aquellosOjosVerdes, elCirculoNotOwned } from "../../fixtures";
import store from "../../../store/store";

describe("Given the VinylCard component", () => {
  describe("When it receives Aquellos Ojos Verdes vinyl", () => {
    test("Then it should show 'Aquellos Ojos Verdes' inside a heading", () => {
      const expectedVinylTitle = new RegExp(aquellosOjosVerdes.title, "i");

      render(
        <Provider store={store}>
          <VinylCard vinyl={aquellosOjosVerdes} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const vinylTitle = screen.getByRole("heading", {
        name: expectedVinylTitle,
      });

      expect(vinylTitle).toBeInTheDocument();
    });

    test("Then it should show 'Carlos Gardel' inside a heading", () => {
      const expectedVinylArtist = new RegExp(aquellosOjosVerdes.artist, "i");

      render(
        <Provider store={store}>
          <VinylCard vinyl={aquellosOjosVerdes} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const vinylArtist = screen.getByRole("heading", {
        name: expectedVinylArtist,
      });

      expect(vinylArtist).toBeInTheDocument();
    });

    test("Then it should show the image of the vinyl cover Aquellos ojos verdes", () => {
      const expectedImageAlt = /vinilo Aquellos Ojos Verdes de Carlos Gardel/i;

      render(
        <Provider store={store}>
          <VinylCard vinyl={aquellosOjosVerdes} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const vinylImage = screen.getByAltText(expectedImageAlt);

      expect(vinylImage).toBeInTheDocument();
    });

    test("Then it should show a 'X' inside a button", () => {
      const expectedButtonText = /eliminar vinilo/i;

      render(
        <Provider store={store}>
          <VinylCard vinyl={aquellosOjosVerdes} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const deleteButton = screen.getByLabelText(expectedButtonText);

      expect(deleteButton).toBeVisible();
    });

    test("Then it should show a link with 'Más info' text", () => {
      const expectedLinkText = /más info/i;

      render(
        <Provider store={store}>
          <VinylCard vinyl={aquellosOjosVerdes} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const infoLink = screen.getByRole("link", { name: expectedLinkText });

      expect(infoLink).toBeInTheDocument();
    });

    describe("And this vinyl it is in my collection", () => {
      test("Then it should show a 'Quitar de mi colección' inside a button", () => {
        const expectedButtonText = /quitar de mi colección/i;

        render(
          <Provider store={store}>
            <VinylCard vinyl={aquellosOjosVerdes} index={0} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const button = screen.getByRole("button", { name: expectedButtonText });

        expect(button).toBeInTheDocument();
      });

      test("Then it should show an image of vinyl icon", () => {
        const expectedAltText = /vinilo en tu colección/i;

        render(
          <Provider store={store}>
            <VinylCard vinyl={aquellosOjosVerdes} index={0} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const image = screen.getByAltText(expectedAltText);

        expect(image).toBeInTheDocument();
      });
    });
  });

  describe("When it receives a El Círculo vinyl and it is not in the colecction", () => {
    test("Then it should show a 'Añadir a mi colección' inside a button", () => {
      const expectedButtonText = /añadir a mi colección/i;

      render(
        <Provider store={store}>
          <VinylCard vinyl={elCirculoNotOwned} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it shouldn't show an image of vinyl icon", () => {
      const expectedAltText = /vinilo en tu colección/i;

      render(
        <Provider store={store}>
          <VinylCard vinyl={elCirculoNotOwned} index={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const image = screen.queryByAltText(expectedAltText);

      expect(image).not.toBeInTheDocument();
    });
  });
});
