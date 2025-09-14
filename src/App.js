import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* biar konten ga ketutup navbar fixed */}
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}
