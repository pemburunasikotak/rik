import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Innovation from "../pages/Innovation";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/innovation" element={<Innovation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
