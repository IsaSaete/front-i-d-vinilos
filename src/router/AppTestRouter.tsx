import { Route, Routes } from "react-router";
import {
  LazyAddVinylPage,
  LazyModifyVinylPage,
  LazyVinylsPage,
} from "./lazyPages";
import VinylDetailPage from "../vinyl/pages/VinylDetailPage/VinylDetailPage";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="vinilos" element={<LazyVinylsPage />} />
      <Route path="añadir-vinilo" element={<LazyAddVinylPage />} />
      <Route path="vinilo/:id" element={<VinylDetailPage />} />
      <Route path="modificar-vinilo/:id" element={<LazyModifyVinylPage />} />
    </Routes>
  );
};

export default AppTestRouter;
