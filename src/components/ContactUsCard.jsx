import React from "react";

import { motion } from "framer-motion";

const hoverVariants = {
  initial: { scale: 1, rotate: 0, transition: { type: "easeInOut" } },
  animate: {
    scale: 1.08,

    transition: { type: "easeInOut", duration: 0.3 },
  },
};

const ContactUsCard = ({ text, icon: Icon }) => {
  return (
    <motion.div
      className="flex justify-between items-center h-20 w-full border  shadow rounded px-3 gap-3"
      variants={hoverVariants}
      initial={"initial"}
      whileHover={"animate"}
    >
      <button className="h-10 w-10 rounded-3xl bg-orange-400 flex justify-center items-center text-white">
        <Icon />
      </button>
      <div className="flex flex-col items-center justify-center p-1 font-medium flex-wrap overflow-hidden">
        <p className="text-sm font-bold">{text}</p>
      </div>
    </motion.div>
  );
};
export default ContactUsCard;


