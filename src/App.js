import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import iconwa from "../src/aset/wa.png";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <AppRoutes />
      </div>
      <Footer />
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-white rounded-full p-4 shadow-lg transition-all group"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src={iconwa}
          alt="Icon WhatsApp"
          className="w-[50px] h-[50px] object-cover"
        />
        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Konsultasi via WA
        </span>
      </a>
    </Router>
  );
}
