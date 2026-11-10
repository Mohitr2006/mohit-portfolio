
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Photography from "../pages/Photography/Photography";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
