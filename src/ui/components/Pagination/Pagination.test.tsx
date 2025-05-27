import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Pagination from "./Pagination";
import { vinylsTestData } from "../../../vinyl/fixtures";

describe("Given the Pagination component", () => {
  describe("When it renders", () =>
    test("Then it should show a 'Ir a la página anterior' and 'Ir a la página siguiente' links", () => {
      const expectedNextLinkText = /ir a la página siguiente/i;
      const expectedPreviousLinktText = /ir a la página anterior/i;

      render(
        <Pagination vinylsTotal={vinylsTestData.length} currentPage={1} />,
        { wrapper: MemoryRouter },
      );

      const previousLink = screen.getByLabelText(expectedPreviousLinktText);
      const nextLink = screen.getByLabelText(expectedNextLinkText);

      expect(previousLink).toBeInTheDocument();
      expect(nextLink).toBeInTheDocument();
    }));
});
