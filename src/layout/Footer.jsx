import React from "react";
import SocialIcons from "../components/SocialIcons.jsx";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-gray-50  border-gray-300 py-10 px-6 font-Bebas my-7 rounded">
      <div className=" py-6 flex flex-col md:flex-row justify-evenly items-center md:items-center gap-8 md:gap-4 text-gray-700">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs">
          <h1 className="text-4xl font-bold tracking-wide mb-2">
            S<span className="text-primaryColor">tudio.</span>
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad dolore eaque est expedita facilis nulla officiis
            quaerat quo reiciendis?
          </p>
          <div className="flex items-center justify-center mt-4 gap-3 text-primaryColor">
            <SocialIcons icon={CiFacebook} />
            <SocialIcons icon={CiInstagram} />
            <SocialIcons icon={CiTwitter} />
            <SocialIcons icon={CiLinkedin} />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-600">Feature</h2>
            <Link to={"/"} className="hover:text-primaryColor cursor-pointer">
              HOME
            </Link>
            <Link
              to={"/products"}
              className="hover:text-primaryColor cursor-pointer"
            >
              PRODUCT
            </Link>
            <Link
              to={"/sales"}
              className="hover:text-primaryColor cursor-pointer"
            >
              SALES
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-primaryColor cursor-pointer"
            >
              CONTACT
            </Link>
          </div>
          {/*<div className="flex flex-col gap-2">*/}
          {/*  <h2 className="text-lg font-semibold text-gray-600">Support</h2>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">ABOUT</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">PRODUCT</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">DISCOVER</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">CONTACT</p>*/}
          {/*</div>*/}
          {/*<div className="flex flex-col gap-2">*/}
          {/*  <h2 className="text-lg font-semibold text-gray-600">Categories</h2>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">ABOUT</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">PRODUCT</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">DISCOVER</p>*/}
          {/*  <p className="hover:text-primaryColor cursor-pointer">CONTACT</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
