import { Route, Routes } from "react-router";
import VinylsPage from "../vinyl/pages/VinylsPage/VinylsPage";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="vinilos" element={<VinylsPage />} />
    </Routes>
  );
};

export default AppTestRouter;
