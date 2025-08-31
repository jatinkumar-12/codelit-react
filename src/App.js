import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Codlit from "./Pages/Codelit";
import Contact from "./Pages/Contact";
import TitleManager from "./Components/Titlemanager";

// Components
import Projectcodelit from "./Components/Projectcodelit";
import Projectfeedbick from "./Components/Projectfeedbick";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollResetLayout from "./Components/ScrollResetLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <TitleManager />
        <Navbar />

        <Routes>
          {/* Routes WITHOUT scroll reset */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/codelit" element={<Codlit />} />

          {/* Routes WITH scroll reset */}
          <Route element={<ScrollResetLayout />}>
            <Route path="/work/projectcodelit" element={<Projectcodelit />} />
            <Route path="/work/projectfeedbick" element={<Projectfeedbick />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
