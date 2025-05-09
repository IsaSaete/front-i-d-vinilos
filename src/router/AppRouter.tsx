import { Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPAge from "../pages/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFoundPAge />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
