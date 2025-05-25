import { Route, Routes } from "react-router";
import {
  LazyAddVinylPage,
  LazyDetailVinylPage,
  LazyModifyVinylPage,
  LazyVinylsPage,
} from "./lazyPages";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="vinilos" element={<LazyVinylsPage />} />
      <Route path="añadir-vinilo" element={<LazyAddVinylPage />} />
      <Route path="vinilo/:id" element={<LazyDetailVinylPage />} />
      <Route path="modificar-vinilo/:id" element={<LazyModifyVinylPage />} />
    </Routes>
  );
};

export default AppTestRouter;
