import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Software from "./pages/Software";
import Mobile from "./pages/Mobile";
import DigitalMarketing from "./pages/DigitalMarketing";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Software />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}