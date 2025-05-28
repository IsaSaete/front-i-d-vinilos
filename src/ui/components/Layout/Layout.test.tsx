import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Layout from "./Layout";
import store from "../../../store/store";
import AppTestRouter from "../../../router/AppTestRouter";
import { aquellosOjosVerdes } from "../../../vinyl/fixtures";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show a link with a label text 'Página principal de vinilos", async () => {
      render(
        <Provider store={store}>
          <Layout />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const expectedLabelText = /página principal de vinilos/i;

      const linkLabel = await screen.findByLabelText(expectedLabelText);

      expect(linkLabel).toBeInTheDocument();
    });

    test("Then it should show a 'Listado' link", () => {
      const expectedLink = /listado/i;

      render(
        <Provider store={store}>
          <Layout />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const listLink = screen.getByRole("link", { name: expectedLink });

      expect(listLink).toBeInTheDocument();
    });
  });

  describe("When it renders in path /vinilos", () => {
    test("Then it should show a 'Strange Weather, Isn't It?' inside a heading", async () => {
      const expectedVinylTitle = /strange Weather, isn't it?/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/vinilos"]}>
            <Layout />
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const vinylTitle = await screen.findByRole("heading", {
        name: expectedVinylTitle,
      });

      expect(vinylTitle).toBeInTheDocument();
    });

    describe("And the user clicks the link 'Ir a la página siguiente'", () => {
      test("Then it should show 'El Círculo' inside a heading", async () => {
        const expectedNextLinkText = /ir a la página siguiente/i;
        const expectedVinylTitle = /el círculo/i;

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/vinilos"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const nextPageLink = await screen.findByLabelText(expectedNextLinkText);

        await userEvent.click(nextPageLink);

        const vinylTitle = await screen.findByRole("heading", {
          name: expectedVinylTitle,
        });
        screen.debug();
        expect(vinylTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in path /vinilos?page=2", () => {
    describe("And the user clicks the link 'Ir a la página siguiente'", () => {
      test("Then it should show 'LP5' inside a heading", async () => {
        const expectedPreviousLinkText = /ir a la página anterior/i;
        const expectedVinylTitle = /lp5/i;

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/vinilos?page=2"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const previousPageLink = await screen.findByLabelText(
          expectedPreviousLinkText,
        );

        await userEvent.click(previousPageLink);

        const vinylTitle = await screen.findByRole("heading", {
          name: expectedVinylTitle,
        });

        expect(vinylTitle).toBeInTheDocument();
      });
    });

    describe("And the user clicks on the 'Modificar info' button on the vinyl card LP5'", () => {
      test("Then it should show 'Modifica el vinilo' inside a heading", async () => {
        const expectedVinylTitle = /lp5/i;

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/vinilos?page=3"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const vinylTitle = await screen.findByRole("heading", {
          name: expectedVinylTitle,
        });

        expect(vinylTitle).toBeInTheDocument();

        const vinylCard = vinylTitle.closest("article")!;

        const modifyButton = await within(vinylCard).findByRole("link", {
          name: /modificar info/i,
        });

        await userEvent.click(modifyButton);

        const pageTitle = await screen.findByRole("heading", {
          name: /modifica el vinilo/i,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in path /modificar-vinilo/14fbf39d8c9d1e4dabc5f1e1", () => {
    describe("And the user modifies styles and clicks on 'Guarda cambios' button", () => {
      test("Then it should show the message 'Cambios guardados'", async () => {
        const expectedLabel = /estilo:/i;
        const expectedButtonText = /guardar cambios/i;

        render(
          <Provider store={store}>
            <MemoryRouter
              initialEntries={[`/modificar-vinilo/${aquellosOjosVerdes.id}`]}
            >
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const stylesTextBox = await screen.findByLabelText(expectedLabel);

        await userEvent.clear(stylesTextBox);

        await userEvent.type(stylesTextBox, "Bolero,Tango");

        const saveButton = await screen.findByRole("button", {
          name: expectedButtonText,
        });

        await userEvent.click(saveButton);

        const modalText = await screen.findByText("Cambios guardados");

        expect(modalText).toBeInTheDocument();
      });
    });
  });
});
