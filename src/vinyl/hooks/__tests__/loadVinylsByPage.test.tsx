import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import useVinyls from "../useVinyls";
import store from "../../../store/store";
import { vinylsFixturesDto } from "../../dto/fixturesDto";

describe("Given the loadVinylsByPage function", () => {
  describe("When it's called with page number 2", () => {
    test("Then it should show We still Believe vinyl", async () => {
      const expectedTitleVinyl = "We Still Believe";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useVinyls(), { wrapper: wrapper });

      await act(async () => {
        result.current.loadVinylsByPage(3);
      });

      const vinylsTotal = result.current.vinylCollection.vinylsTotal;
      const vinyls = result.current.vinylCollection.vinyls;

      expect(vinylsTotal).toBe(vinylsFixturesDto.length);

      expect(vinyls).toContainEqual(
        expect.objectContaining({ title: expectedTitleVinyl }),
      );
    });
  });
});
