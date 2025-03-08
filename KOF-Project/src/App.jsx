import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutKOF from "./pages/AboutPage";
import OurProgram from "./pages/ProgramPage";
import ContactUs from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TouchToLearn from "./pages/TouchToLearn";
import HygieneDay from "./pages/HygieneDay";
import CommunityAdvocacy from "./pages/AdvocacyPage";

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
          <Route path="/program/touch-to-learn" element={<TouchToLearn />} />
          <Route
            path="/program/menstrual-hygiene-day"
            element={<HygieneDay />}
          />
          <Route
            path="/program/Community-Engagement-On-LGA-Reforms-and-Advocacy"
            element={<CommunityAdvocacy />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
