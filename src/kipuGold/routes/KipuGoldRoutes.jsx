import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import InvestGold from "../pages/InvestGold";

const KipuGoldRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/invest-gold" element={<InvestGold />} />
    </Routes>
  );
};

export default KipuGoldRoutes;
