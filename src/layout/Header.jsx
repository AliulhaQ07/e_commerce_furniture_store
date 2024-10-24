import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../components/CustomButton.jsx";
import CustomIconDesign from "../components/CustomIconDesign.jsx";
import { NavLink } from "react-router-dom"; // Import NavLink for active state
const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Products",
    url: "/",
  },
  {
    id: 3,
    name: "Sales",
    url: "/",
  },
  {
    id: 4,
    name: "Contact",
    url: "/",
  },
];

const Header = () => {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicking on that hamburger button");
  };

  // Animation variants for hamburgerMenu
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  // linkVariants for desktop (applied to all the elements)
  const linkVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger the animation
        type: "spring",
        stiffness: 250,
      },
    }),
  };

  return (
    <>
      <div className="container mx-auto rounded px-1 py-3 font-Bebas flex items-center justify-between">
        {/*LOGO*/}
        <motion.div
          className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          S<span className="text-primaryColor">tudio.</span>
        </motion.div>

        {/*DESKTOP NAV-LINKS*/}
        <div className="hidden md:block">
          <ul className="flex gap-3">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </div>

        {/*ICONS BUTTON*/}
        <motion.div
          className="flex justify-center items-center gap-1"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          {/*rendering icons*/}
          <CustomIconDesign icon={CiSearch} />
          <CustomIconDesign icon={CiShoppingCart} />
          {/*rendering button*/}
          <CustomButton buttonTitle={"Sign in"} />
        </motion.div>

        {/*NAVIGATION HAMBURGER MENU ICON*/}
        <div onClick={toggleMenu} className="block md:hidden">
          <HiOutlineMenu className="text-3xl" />
        </div>
      </div>

      {/*MOBILE NAV-LINKS*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 bg-primaryColor text-white w-full md:hidden overflow-x-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="container mx-auto flex flex-col justify-center items-start gap-2 py-2">
              {navLinks.map((link) => (
                <li key={link.id} className="text-2xl">
                  {link.name}
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
