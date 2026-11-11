import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";

const Projects = lazy(() => import("../pages/Projects/Projects"));
const Photography = lazy(() => import("../pages/Photography/Photography"));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;