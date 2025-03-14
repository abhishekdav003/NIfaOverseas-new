import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "./components.css";
import iso from '../assets/iso9001.png'
import "./styles.css";
const MENU_ITEMS = ["Home", "Statistics", "About Us", "Gallery", "Contact Us","Catalogue"];

const Header = () => {
  const headerRef1 = useRef();
  const headerRef2 = useRef();
  const mobileMenuRef = useRef(); // Reference for mobile menu
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen); // Toggle the menu on click
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      } 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (item) => {
    setActiveComponent(item);
    setIsToggleOpen(false); // Close the menu when an item is clicked
    handleScrollToSection(item);
  };

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 60; // Adjust this value as needed
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle click outside of the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsToggleOpen(false); // Close the mobile menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      id="Home"
      className="w-full left-0 z-10 bg-white shadow-md scroll-smooth"
    >
      <div>
        {/* part 1 for both mobile and desktop */}
        <div
          ref={headerRef1}
          className={`  px-6 md:px-16 flex items-center bg-amber-95  md:h-20  transition-transform duration-300 gap-3 ${
            isScrolled ? "-translate-y-4" : "translate-y-0"
          }`}
        >
          <div className=" w-full relative flex flex-col items-center  md:flex-row md:w-[40%] gap-4   ">
            <div className="  ">
              <img
                src="https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067893/Nifa%20Overseas/ggwlzpvdrfmjeozs28w9.png"
                alt="Logo"
                className="h-32 md:h-40 cursor-pointer bg-amber-30"
              />
           </div>
            <div className=" absolute top-[80%] md:left-10 md:static  flex gap-3 items-center  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5walsWNAAqh12c69MrsDJMmiWhLDsow6gw&s"
                alt="MCA-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src="https://ihgfdelhifair.in/assets/img/epch-logo-2024.png"
                alt="EPCH-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src={iso}
                alt="ECC-ISO"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='https://www.bharat-tex.com/wp-content/uploads/2025/01/Bharat-tex-logo.png'
                alt="Bharat-tex"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='https://uploads.ifdesign.de/WdgEvent/946/images/medium/IHGF-fair.jpg'
                alt="IHGF"
                className="h-5 lg:h-8 cursor-pointer"
              />
            </div>
       </div>
         


         
          
          <div className=" flex space-x-3 text-lg grow justify-end items-center   ">
            <div className="w-40 h-10 hidden md:flex justify-center items-center text-gray-700 font-semibold rounded-full transition-transform duration-300 ease-in-out transform cursor-pointer border border-orange-400 hover:scale-105 focus:outline-none">
              <button
                className="relative overflow-hidden px-6 py-2 text-lg md:text-sm uppercase rounded-full transition-all duration-300 ease-in-out bg-white text-gray-700 hover:bg-orange-400 hover:text-white active:bg-orange-500 focus:ring-4 focus:ring-orange-300 animate-pulseBg"
                aria-label="enquire Now"
              >
                <a href="#Contact Us" className="relative z-10">enquire Now</a>
              </button>
            </div>
            {/* {[FaPinterestP].map((Icon, index) => (
              <a key={index} href="#" className="hover:scale-125 transition">
                <Icon className="text-xl" />
              </a>
            ))} */}
          </div>
        </div>

        {/* part 2 for mobile view */}
        <div
          className={`md:hidden h-16 w-full flex items-center justify-center  ${
            isScrolled ? "fixed top-0" : " "
          } ${isScrolled ? "backdrop-blur-2xl" : "bg-gray-900"}`}
        >
          <div className={`w-40 h-10   flex justify-center items-center  font-semibold  rounded-full  transition-transform duration-300 ease-in-out transform cursor-pointer border border-orange-400 hover:scale-105 ${isScrolled ? "text-black" : "text-white"}`}>
            <button
              className=" rounded-full w-[99%] h-[99%] transition-all duration-300 ease-in-out  text-gray-700  animate-pulseBgm"

            >
              <a href="#Contact Us" className=" lg:text-lg md:text-sm uppercase ">enquire Now</a>
            </button>
          </div>
          {/* {isScrolled && (

            // <img
            //   src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
            //   alt="Logo"
            //   className="w-32"
            // />
          )} */}
          {

          
          
          /* <button
            className={`md:hidden text-2xl focus:outline-none cursor-pointer pr-4 z-20 ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={handleToggleOpen} // Toggle button to open/close the menu
          >
            {isToggleOpen ? <FaTimes /> : <FaBars />}
          </button> */}
        </div>

        {/* part 2 for desktop view */}
        <nav
          ref={headerRef2}
          className={`hidden md:flex justify-center w-full backdrop-blur-xl ${
            isScrolled ? "fixed top-0" : "flex"
          } ${isScrolled ? "bg-transparent" : "bg-gray-900"} ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <ul className="flex space-x-2 text-lg font-medium">
            {MENU_ITEMS.map((item) => (
              <li
                key={item}
                tabIndex="0"
                className={`px-4 py-3 transition outline-none focus-visible:ring-2 focus-visible:ring-orange-800 ${
                  activeComponent === item
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-orange-400 hover:text-black"
                } cursor-pointer`}
                onClick={() => handleMenuClick(item)}
              >
                <a
                  href={`#${item} `}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {/* <AnimatePresence>
        {isToggleOpen && (
          <motion.nav
            ref={mobileMenuRef} // Attach the ref to the mobile menu
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full bg-gray-400 text-gray-900 flex flex-col items-center md:hidden py-4 ${
              isScrolled ? "-translate-y-4" : "translate-y-0"
            }`}
          >
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="py-3 px-6 w-full text-center cursor-pointer hover:bg-yellow-300 hover:text-black"
                onClick={() => handleMenuClick(item)}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="block"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence> */}
    </header>
  );
};

export default Header;
