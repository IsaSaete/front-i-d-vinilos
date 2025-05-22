import { render, screen } from "@testing-library/react";
import VinylDetail from "./VinylDetail";
import { aquellosOjosVerdes, elCirculoNotOwned } from "../../fixtures";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Given the VinylDetail component", () => {
  describe("When receives 'Aquellos ojos verdes' vinyl", () => {
    test("Then it should show a Aquellos ojos verdes inside a heading", () => {
      render(
        <Provider store={store}>
          <VinylDetail vinyl={aquellosOjosVerdes} />
        </Provider>,
      );

      const vinylTitle = screen.getByRole("heading", {
        name: aquellosOjosVerdes.title,
      });

      expect(vinylTitle).toBeInTheDocument();
    });

    test("Then it should show an image of the vinyl cover Aquellos ojos verdes", () => {
      const expectedImageTExt = /vinilo Aquellos Ojos Verdes de Carlos Gardel/i;

      render(
        <Provider store={store}>
          <VinylDetail vinyl={aquellosOjosVerdes} />
        </Provider>,
      );

      const vinylImage = screen.getByAltText(expectedImageTExt);

      expect(vinylImage).toBeInTheDocument();
    });

    describe("And this vinyl it'is in the collecction", () => {
      test("Then it should show a 'Quitar de mi colección' inside a button", () => {
        const expectedButtonText = /quitar de mi colección/i;

        render(
          <Provider store={store}>
            <VinylDetail vinyl={aquellosOjosVerdes} />
          </Provider>,
        );

        const button = screen.getByRole("button", {
          name: expectedButtonText,
        });

        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("When receives a El círculo vinyl and it isn't in the collection", () => {
    test("Then it should show a 'Añadir a mi colección' inside a button", () => {
      const expectedButtonText = /añadir a mi colección/i;

      render(
        <Provider store={store}>
          <VinylDetail vinyl={elCirculoNotOwned} />
        </Provider>,
      );

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
