import { Route, Routes, Navigate } from "react-router";
import App from "../ui/components/App/App";
import {
  LazyAddVinylPage,
  LazyDetailVinylPage,
  LazyModifyVinylPage,
  LazyNotFoundPage,
  LazyVinylsPage,
} from "./lazyPages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/vinilos" />} />
        <Route path="vinilos" element={<LazyVinylsPage />} />
        <Route path="añadir-vinilo" element={<LazyAddVinylPage />} />
        <Route path="vinilo/:id" element={<LazyDetailVinylPage />} />
        <Route path="modificar-vinilo/:id" element={<LazyModifyVinylPage />} />
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
