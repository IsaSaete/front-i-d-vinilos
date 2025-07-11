import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../../store/store";
import AddVinylPage from "./AddVinylPage";

describe("Given the AddVinylPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Añade un vinilo' inside a heading", async () => {
      const expectedTitle = /añade un vinilo/i;

      render(
        <Provider store={store}>
          <AddVinylPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
