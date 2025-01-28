import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutKOF from "./pages/AboutPage";
import OurProgram from "./pages/ProgramPage";
import ContactUs from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutKOF />} />
          <Route path="/program" element={<OurProgram />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
