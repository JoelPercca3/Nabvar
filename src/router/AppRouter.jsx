import { Route, Routes } from "react-router-dom";
import KipuGoldRoutes from "../kipuGold/routes/KipuGoldRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<KipuGoldRoutes />} />
    </Routes>
  );
};

export default AppRouter;
