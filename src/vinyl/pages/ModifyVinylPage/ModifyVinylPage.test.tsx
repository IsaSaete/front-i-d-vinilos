import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ModifyVinylPage from "./ModifyVinylPage";

describe("Givne the ModifyVinylPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Modifica el vinilo' inside a level 1 heading", async () => {
      const expectedTitle = /modifica el vinilo/i;

      render(
        <Provider store={store}>
          <ModifyVinylPage />
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
