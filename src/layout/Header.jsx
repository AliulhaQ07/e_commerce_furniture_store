import React, { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../components/CustomButton.jsx";
import CustomIconDesign from "../components/CustomIconDesign.jsx";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Sales", url: "/sales" },
  { id: 4, name: "Contact", url: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlinePosition, setUnderlinePosition] = useState({
    width: 0,
    left: 0,
  });
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link-active");
    if (activeLink) {
      setUnderlinePosition({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
      });
    }
  }, [location]); // Update underline position when location changes

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="container mx-auto rounded px-1 py-3 font-Bebas flex items-center justify-between relative">
        {/* LOGO */}
        <div className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl">
          S<span className="text-primaryColor">tudio.</span>
        </div>

        {/* DESKTOP NAV-LINKS */}
        <div className="hidden md:block relative">
          <ul className="flex gap-3 relative">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl"
              >
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-active text-primaryColor"
                      : "hover:text-primaryColor"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-0 h-1 bg-primaryColor"
            initial={false}
            animate={{
              width: underlinePosition.width,
              left: underlinePosition.left,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* ICONS BUTTON */}
        <div className="flex justify-center items-center gap-1">
          <CustomIconDesign icon={CiSearch} />
          <CustomIconDesign icon={CiShoppingCart} />
          <CustomButton buttonTitle={"Sign in"} />
        </div>

        {/* NAVIGATION HAMBURGER MENU ICON */}
        <div onClick={toggleMenu} className="block md:hidden">
          <HiOutlineMenu className="text-3xl" />
        </div>
      </div>

      {/* MOBILE NAV-LINKS */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 font-Bebas left-0 bg-gray-600 text-white w-full md:hidden overflow-x-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="container mx-auto flex flex-col justify-center items-start gap-2 py-2">
              {navLinks.map((link) => (
                <li key={link.id} className="text-2xl">
                  <NavLink
                    to={link.url}
                    onClick={closeMenu} // Close menu on link click
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor underline"
                        : "hover:underline"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
