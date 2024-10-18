import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Navbar= () => {
  const [show, setShow] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  useEffect(() => {
    if (location.pathname === "/" ) {
      setColor(false);
    }
     else if(location.pathname === "/mobile"){
      setColor(false);
    }
    else if (location.pathname.startsWith("/projectdetail")) {
      setColor(false);
    }
     else {
      setColor(true);
    }
  }, [location]);

  const closeMobileMenu = () => setShow(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      // console.log('is scrolled,', isScrolled);
      // console.log("window inner length", window.innerWidth);
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const mouseEnterHandler = () => setShowServices(true);
  const mouseLeaveHandler = () => setShowServices(false);
  const mobileClickHandler = () => {
    setClickCount(clickCount + 1);
    if (clickCount % 2 === 0) setShowServices(false);
    else setShowServices(true);
  };

  return (
    <div
      className={`${
        scrolled
          ? "top-0 fixed w-screen bg-secondary z-50 text-primary"
          : "bg-transparent text-primary z-50 top-0 fixed w-screen"
      }`}
    >
      <div className="flex lg:hidden justify-between items-center mt-2 mx-3 py-2">
        <Link to="/">
          <img src={logo} alt="" className="max-w-[249px] max-h-[63px] " />
        </Link>
        <div onClick={() => setShow(!show)} className="">
          {show ? <FaTimes size={22} /> : <FaBars size={22}/>}
        </div>
      </div>
      <div
        className={`hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-4 lg:min-h-[100px] ${
          show ? "min-h-screen" : ""
        }`}
      >
        <div className="ml-5 gap-5 list-none items-center justify-center hidden lg:flex">
          <div className="hidden lg:flex">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="max-w-[279px] ml-[6rem] max-h-[93px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
          <div className="hidden lg:flex lg:flex-row flex-col justify-center items-center list-none gap-8">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
              <div className="flex justify-center gap-6 px-4 mt-3">
                <Link to="/">
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    Home
                  </p>
                </Link>
                <Link to="/about">
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    About
                  </p>
                </Link>

                <div
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  className="flex items-center justify-center gap-[3px] relative"
                >
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    Services
                  </p>
                  {showServices ? <FaAngleUp /> : <FaAngleDown />}
                  {showServices && (
                    <div
                      onMouseEnter={mouseEnterHandler}
                      onMouseLeave={mouseLeaveHandler}
                      className="w-[250px] bg-secondary p-[5px] flex flex-col items-center justify-center z-50 absolute top-6 left-[-100%] text-justify"
                    >
                      <Link
                        to="/software"
                        onClick={() => setShowServices(false)}
                        className="w-full"
                      >
                        <div className="w-full p-[10px] text-center hover:bg-titleFont hover:text-secondary">
                          Software Development
                        </div>
                      </Link>

                      <Link
                        to="/mobile"
                        onClick={() => setShowServices(false)}
                        className="w-full"
                      >
                        <div className="w-full p-[10px] text-center hover:bg-titleFont hover:text-secondary">
                          Mobile App Development
                        </div>
                      </Link>

                      <Link
                        to="/digital-marketing"
                        onClick={() => setShowServices(false)}
                        className="w-full"
                      >
                        <div className="w-full p-[10px] text-center hover:bg-titleFont hover:text-secondary">
                          Digital Marketing
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/product">
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    Products
                  </p>
                </Link>
                <Link to="/project">
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    Projects
                  </p>
                </Link>
                <Link to="/insight">
                  <p
                    onClick={closeMobileMenu}
                    className={`${
                      color && !scrolled ? "text-white z-50" : "z-50"
                    }`}
                  >
                    Insight
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <Link to="/contact">
                <li
                  onClick={closeMobileMenu}
                  className="bg-primary text-white py-2 px-8 rounded-3xl text-lg ml-8"
                >
                  Contact us
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile device */}
      {/* Conditional rendering based on the show state */}
      <div>
        {show ? (
          <div className="flex flex-col lg:hidden animate-slide-in min-h-screen justify-center items-center">
            <div className="flex lg:hidden flex-col justify-center items-center list-none gap-8 -mt-20">
              <div className="flex lg:hidden flex-col justify-center items-center gap-8 relative">
                <Link to="/">
                  <li onClick={closeMobileMenu} className="">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li onClick={closeMobileMenu} className="">
                    About
                  </li>
                </Link>

                <div
                  onClick={mobileClickHandler}
                  className={`mb-[${
                    showServices ? 100 : 0
                  }px] flex items-center justify-center gap-[3px] transition-all duration-300`}
                >
                  <li className="">Service</li>
                  {showServices ? <FaAngleUp /> : <FaAngleDown />}
                  {showServices && (
                    <div className="w-[250px] bg-titleFont text-secondary p-[5px] flex flex-col items-center justify-center z-0 absolute top-36 left-[-125%] text-justify rounded-2xl">
                      <Link
                        to="/software"
                        onClick={closeMobileMenu}
                        className="w-full"
                      >
                        <div className="w-full p-[5px] text-center hover:bg-secondary hover:text-titleFont rounded-xl">
                          Software Development
                        </div>
                      </Link>

                      <Link
                        to="/mobile"
                        onClick={closeMobileMenu}
                        className="w-full"
                      >
                        <div className="w-full p-[5px] text-center hover:bg-secondary hover:text-titleFont rounded-xl">
                          Mobile App Development
                        </div>
                      </Link>

                      <Link
                        to="/digital-marketing"
                        onClick={closeMobileMenu}
                        className="w-full"
                      >
                        <div className="w-full p-[5px] text-center hover:bg-secondary hover:text-titleFont rounded-xl">
                          Digital Marketing
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/product">
                  <li onClick={closeMobileMenu} className="">
                    Product
                  </li>
                </Link>
                <Link to="/project">
                  <li onClick={closeMobileMenu} className="">
                    Project
                  </li>
                </Link>
                <Link to="/insight">
                  <li onClick={closeMobileMenu} className="">
                    Insights
                  </li>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <li
                    onClick={closeMobileMenu}
                    className="bg-primary text-white py-2 px-8 rounded-3xl text-lg"
                  >
                    Contact us
                  </li>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
