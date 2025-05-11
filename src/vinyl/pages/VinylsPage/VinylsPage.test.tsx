import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import VinylsPage from "./VinylsPage";
import store from "../../../app/store";

describe("Given de VinylsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show Vinilos inside a level 1 heading", () => {
      const expectedTitle = /vinilos/i;

      render(
        <Provider store={store}>
          <VinylsPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
