import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();



  useEffect(() => {
    if (location.pathname === '/about') {
      setColor(true);
    } else {
      setColor(false);
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
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className={`${scrolled ? 'overflow-x-hidden top-0 fixed w-screen bg-secondary z-50 text-primary':"bg-transparent text-primary z-50 overflow-x-hidden top-0 fixed w-screen"}`}>
      <div className='flex lg:hidden justify-between items-center mt-2 mx-3 py-2'>
        <Link to="/">
          <img src={logo} alt='' className='max-w-[249px] max-h-[63px] ' />
        </Link>
        <div onClick={() => setShow(!show)} className=''>
          {show ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-4 lg:min-h-[100px] ${show ? "min-h-screen" : ""}`}>

        <div className='ml-5 gap-5 list-none items-center justify-center hidden lg:flex'>
        <div className='hidden lg:flex'>
                <Link to="/">
                  <img src={logo} alt='' className='max-w-[249px] max-h-[63px]' />
                </Link>
              </div>
        </div>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
          <div className='hidden lg:flex lg:flex-row flex-col justify-center items-center list-none gap-8'>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-4'>
              <div className='flex justify-center gap-6 px-4 mt-3'>
                <Link to='/'>
                  <p onClick={closeMobileMenu} className={`${color && !scrolled ? "text-white z-50":"z-50"}`}>Home</p>
                </Link>
                <Link to="/about">
                  <p onClick={closeMobileMenu} className={`${color && !scrolled  ? "text-white z-50":"z-50"}`}>About</p>
                </Link>
                <Link to="/service">
                  <p onClick={closeMobileMenu} className={`${color && !scrolled  ? "text-white z-50":"z-50"}`}>Service</p>
                </Link>
                <Link to='/product'>
                  <p onClick={closeMobileMenu} className={`${color && !scrolled  ? "text-white z-50":"z-50"}`}>Product</p>
                </Link>
                <Link to="/project">
                  <p onClick={closeMobileMenu} className={`${color && !scrolled  ? "text-white z-50":"z-50"}`}>Project</p>
                </Link>
              </div>
            </div>
            <div>
              <Link to="/contact">
              <li onClick={closeMobileMenu} className='bg-primary text-white py-2 px-8 rounded-3xl text-lg ml-8'>Contact us</li>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile device */}
      {/* Conditional rendering based on the show state */}
      <div>
        {show ? (
          <div className='flex flex-col lg:hidden animate-slide-in min-h-screen justify-center items-center'>
            <div className='flex lg:hidden flex-col justify-center items-center list-none gap-8 -mt-20'>
              <div className='flex lg:hidden flex-col justify-center items-center gap-8'>
                <Link to="/">
                  <li onClick={closeMobileMenu} className=''>Home</li>
                </Link>
                <Link to="/about">
                  <li onClick={closeMobileMenu} className=''>About</li>
                </Link>
                <Link to="/service">
                  <li onClick={closeMobileMenu} className=''>Service</li>
                </Link>
                <Link to="/product">
                  <li onClick={closeMobileMenu} className=''>Product</li>
                </Link>
                <Link to="/project">
                  <li onClick={closeMobileMenu} className=''>Project</li>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                <li onClick={closeMobileMenu} className='bg-primary text-white py-2 px-8 rounded-3xl text-lg'>Contact us</li>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
