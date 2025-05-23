import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import VinylDetail from "./VinylDetail";
import { aquellosOjosVerdes, elCirculoNotOwned } from "../../fixtures";
import store from "../../../store/store";

describe("Given the VinylDetail component", () => {
  describe("When receives 'Aquellos ojos verdes' vinyl", () => {
    test("Then it should show a Aquellos ojos verdes inside a heading", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <VinylDetail vinyl={aquellosOjosVerdes} />
          </Provider>
        </MemoryRouter>,
      );

      const vinylTitle = screen.getByRole("heading", {
        name: aquellosOjosVerdes.title,
      });

      expect(vinylTitle).toBeInTheDocument();
    });

    test("Then it should show an image of the vinyl cover Aquellos ojos verdes", () => {
      const expectedImageTExt = /vinilo Aquellos Ojos Verdes de Carlos Gardel/i;

      render(
        <MemoryRouter>
          <Provider store={store}>
            <VinylDetail vinyl={aquellosOjosVerdes} />
          </Provider>
        </MemoryRouter>,
      );

      const vinylImage = screen.getByAltText(expectedImageTExt);

      expect(vinylImage).toBeInTheDocument();
    });

    describe("And this vinyl it'is in the collecction", () => {
      test("Then it should show a 'Quitar de mi colección' inside a button", () => {
        const expectedButtonText = /quitar de mi colección/i;

        render(
          <MemoryRouter>
            <Provider store={store}>
              <VinylDetail vinyl={aquellosOjosVerdes} />
            </Provider>
          </MemoryRouter>,
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
        <MemoryRouter>
          <Provider store={store}>
            <VinylDetail vinyl={elCirculoNotOwned} />
          </Provider>
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
