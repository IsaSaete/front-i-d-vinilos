import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../../store/store";
import { aquellosOjosVerdes } from "../../fixtures";
import AppTestRouter from "../../../router/AppTestRouter";

describe("Given the VinylDetailPage component", () => {
  describe("When it renders", () => {
    test("Then it should show a Info inside a level 1 heading", async () => {
      const vinyl = aquellosOjosVerdes.id;

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
  });
});
