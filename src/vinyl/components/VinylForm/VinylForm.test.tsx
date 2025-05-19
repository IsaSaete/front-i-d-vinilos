import userEvent from "@testing-library/user-event";
import VinylForm from "./VinylForm";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Given the VinylForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    test("Then it should show a 'Título' text box", () => {
      const expectedLabel = /título:/i;

      render(<VinylForm action={action} />, { wrapper: MemoryRouter });

      const titleTextBox = screen.getByLabelText(expectedLabel);

      expect(titleTextBox).toBeInTheDocument();
    });

    test("Then it should show a 'País' text box", () => {
      const expectedLabel = /país:/i;

      render(<VinylForm action={action} />, { wrapper: MemoryRouter });

      const countryTextBox = screen.getByLabelText(expectedLabel);

      expect(countryTextBox).toBeInTheDocument();
    });

    test("Then it should show a 'Lanzamiento' text", () => {
      const expectedLabel = /lanzamiento:/i;

      render(<VinylForm action={action} />, { wrapper: MemoryRouter });

      const releaseDataTextBox = screen.getByLabelText(expectedLabel);

      expect(releaseDataTextBox).toBeInTheDocument();
    });

    describe("And the user types the date 1990-09-21 in the 'Lanzamiento' text box", () => {
      test("Then it should show 1990-09-21 to enter the date", async () => {
        const expectedLabel = /lanzamiento:/i;
        const typeDate = "1990-09-21";

        render(<VinylForm action={action} />, { wrapper: MemoryRouter });

        const releaseDateTextBox = screen.getByLabelText(expectedLabel);

        await userEvent.type(releaseDateTextBox, typeDate);

        expect(releaseDateTextBox).toHaveValue(typeDate);
      });
    });

    test("Then it should show a 'Formato' options select", () => {
      const expectedLabel = /formato:/i;

      render(<VinylForm action={action} />, { wrapper: MemoryRouter });

      const releaseDataTextBox = screen.getByLabelText(expectedLabel);

      expect(releaseDataTextBox).toBeInTheDocument();
    });

    describe("And the user selects 12'' in format option", () => {
      test("Then it should show 12'' in options select", async () => {
        const expectedLabel = "Formato:";
        const format = "12''";

        render(<VinylForm action={action} />, { wrapper: MemoryRouter });

        const formatOptions = screen.getByLabelText(expectedLabel);

        await userEvent.selectOptions(formatOptions, format);

        expect(formatOptions).toHaveValue(format);
      });
    });

    test("Then it should show a 'Lo tengo' checkbox", () => {
      const expectedLabel = /lo tengo/i;

      render(<VinylForm action={action} />, { wrapper: MemoryRouter });

      const ownedCheckbox = screen.getByLabelText(expectedLabel);

      expect(ownedCheckbox).toBeInTheDocument();
    });

    describe("And the user clicks on the 'Lo tengo' checkbox", () => {
      test("Then it should show the 'Lo tengo' checbox checked", async () => {
        const expectedLabel = /lo tengo/i;

        render(<VinylForm action={action} />, { wrapper: MemoryRouter });

        const ownedCheckbox = screen.getByLabelText(expectedLabel);

        await userEvent.click(ownedCheckbox);

        expect(ownedCheckbox).toBeChecked();
      });
    });

    describe("And the user doesn't click on 'Lo tengo' checkbox", () => {
      test("Then it should show the 'Comprado en' textbox disabled", () => {
        const expectedLabel = /comprado en/i;

        render(<VinylForm action={action} />, { wrapper: MemoryRouter });

        const purchasedAtTextBox = screen.getByLabelText(expectedLabel);

        expect(purchasedAtTextBox).toBeDisabled();
      });
    });

    describe("And the user fills in the required fields of the form", () => {
      test("Then it should show the button 'Añadir button' enabled", async () => {
        const expectedButtonText = /añadir vinilo/i;

        render(<VinylForm action={action} />, { wrapper: MemoryRouter });

        const titleTextBox = screen.getByLabelText(/título/i);
        const artistTextBox = screen.getByLabelText(/artista/i);
        const countryTextBox = screen.getByLabelText(/país/i);
        const releaseDateTextBox = screen.getByLabelText(/lanzamiento/i);
        const genreTextBox = screen.getByLabelText(/género/i);
        const formatTextBox = screen.getByLabelText(/formato/i);
        const coverImageUrlTextBox = screen.getByLabelText(/imagen url/i);

        await userEvent.type(titleTextBox, "Marinero de Luces");
        await userEvent.type(artistTextBox, "Isabel Pantoja");
        await userEvent.type(countryTextBox, "España");
        await userEvent.type(releaseDateTextBox, "1985-04-10");
        await userEvent.type(genreTextBox, "Copla");
        await userEvent.selectOptions(formatTextBox, "12''");
        await userEvent.type(
          coverImageUrlTextBox,
          "https://example.com/marinero-de-luces.jpg",
        );

        const addButton = screen.getByRole("button", {
          name: expectedButtonText,
        });

        expect(addButton).toBeEnabled();
      });
      describe("And the user clicks on 'Añadir vinilo' button", () => {
        test("Then it should call the button action", async () => {
          const expectedButtonText = /añadir vinilo/i;

          render(<VinylForm action={action} />, { wrapper: MemoryRouter });

          const titleTextBox = screen.getByLabelText(/título/i);
          const artistTextBox = screen.getByLabelText(/artista/i);
          const countryTextBox = screen.getByLabelText(/país/i);
          const releaseDateTextBox = screen.getByLabelText(/lanzamiento/i);
          const genreTextBox = screen.getByLabelText(/género/i);
          const formatTextBox = screen.getByLabelText(/formato/i);
          const coverImageUrlTextBox = screen.getByLabelText(/imagen url/i);

          await userEvent.type(titleTextBox, "Marinero de Luces");
          await userEvent.type(artistTextBox, "Isabel Pantoja");
          await userEvent.type(countryTextBox, "España");
          await userEvent.type(releaseDateTextBox, "1985-04-10");
          await userEvent.type(genreTextBox, "Copla");
          await userEvent.selectOptions(formatTextBox, "12''");
          await userEvent.type(
            coverImageUrlTextBox,
            "https://example.com/marinero-de-luces.jpg",
          );

          const addButton = screen.getByRole("button", {
            name: expectedButtonText,
          });

          await userEvent.click(addButton);

          expect(action).toHaveBeenCalled();
        });
      });
    });
  });
});
