import React from "react";
import longSofa from "../assets/images/longSofa.png";
import { motion } from "framer-motion";

const hoverVariants = {
  rest: { scale: 1, transition: { type: "spring", stiffness: 300 } },
  hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
};

const CardDesign = ({
  Heading,
  subHeading,
  buttonText,
  imgUrl,
  bgColor,
  borderRounded,
}) => {
  return (
    <motion.div
      className={`flex-1 ${borderRounded} ${bgColor} p-4 flex flex-col w-full sm:flex-row items-center justify-evenly`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
    >
      <div className="flex flex-col items-start gap-3 text-center sm:text-left">
        <p className="text-3xl font-medium">{Heading}</p>
        <p className="text-lg">{subHeading}</p>
        <button className="underline underline-offset-4 text-primaryColor font-medium">
          {buttonText}
        </button>
      </div>

      <div className="h-[250px] w-[250px] mt-4 sm:mt-0 sm:ml-4">
        <img
          src={imgUrl}
          alt={Heading} // Changed alt text to be dynamic
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default CardDesign;
