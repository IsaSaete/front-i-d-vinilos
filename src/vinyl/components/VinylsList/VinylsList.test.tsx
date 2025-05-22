import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import VinylsList from "./VinylsList";
import {
  aquellosOjosVerdes,
  elCirculoNotOwned,
  vinylsTestData,
} from "../../fixtures";
import store from "../../../store/store";

describe("Given the VinylsList component", () => {
  describe("When it receives a 'Aquellos ojos verdes' & 'El Círculo vinyls' vinyls", () => {
    test("Then it should show the titles 'Aquellos ojos verdes' & 'El Círculo vinyls' inside a heading", () => {
      const expectedaquellosOjosVerdesTitle = new RegExp(
        aquellosOjosVerdes.title,
        "i",
      );
      const expectedElCirculoTitle = new RegExp(elCirculoNotOwned.title, "i");

      render(
        <Provider store={store}>
          <VinylsList vinyls={vinylsTestData} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const aquellosOjosVerdesTitle = screen.getByRole("heading", {
        name: expectedaquellosOjosVerdesTitle,
      });
      const elCirculoTitle = screen.getByRole("heading", {
        name: expectedElCirculoTitle,
      });

      expect(aquellosOjosVerdesTitle).toBeInTheDocument();
      expect(elCirculoTitle).toBeInTheDocument();
    });
  });
});
