import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Software from "./pages/Software";
import Mobile from "./pages/Mobile";
import DigitalMarketing from "./pages/DigitalMarketing";
import ScrollToTop from "./ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import Blog from "./pages/Blog"

export default function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Software />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}