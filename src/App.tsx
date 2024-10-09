import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Software from "./pages/Software";
import Mobile from "./pages/Mobile";
import DigitalMarketing from "./pages/DigitalMarketing";
import ScrollToTop from "./ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import Blog from "./pages/Blog"
import Project from "./pages/Project"
import ProjectDetail from "./components/projects/ProjectDetail"

export default function App() {ProjectDetail
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/software" element={<Software />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}