import { Route, Routes, Navigate } from "react-router";
import App from "../components/App/App";
import {
  LazyAddVinylPage,
  LazyNotFoundPage,
  LazyVinylsPage,
} from "./Components/LazyLoader";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/vinilos" />} />
        <Route path="vinilos" element={<LazyVinylsPage />} />
        <Route path="añadir-vinilo" element={<LazyAddVinylPage />} />
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
