import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Spells from "../pages/Spells";
import MoreInfo from "../pages/MoreInfo";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/spells/moreinfo" element={<MoreInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
