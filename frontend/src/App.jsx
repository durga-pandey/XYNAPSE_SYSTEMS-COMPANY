import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import OurClients from "./pages/OurClients";
import AboutPage from "./pages/AboutPage";
import Carrer from "./pages/Carrer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/client" element={<OurClients />} />
            <Route path="/project" element={<Project />} />
            <Route path="/career" element={<Carrer />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
