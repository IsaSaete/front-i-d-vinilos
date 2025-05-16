import { Route, Routes, Navigate } from "react-router";
import App from "../components/App/App";
import { LazyNotFoundPage, LazyVinylsPage } from "./Components/LazyLoader";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/vinilos" />} />
        <Route path="vinilos" element={<LazyVinylsPage />} />
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
