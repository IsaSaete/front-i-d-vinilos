import { Route, Routes } from "react-router";
import { Navigate } from "react-router";
import App from "../components/App/App";
import NotFoundPAge from "../pages/NotFoundPage";
import VinylsPage from "../vinyl/pages/VinylsPage/VinylsPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/vinilos" />} />
        <Route path="vinilos" element={<VinylsPage />} />
        <Route path="*" element={<NotFoundPAge />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
