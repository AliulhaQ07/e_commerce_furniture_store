import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const TrendingSectionCard = ({ imgUrl, imgAlt, cardTitle, price }) => {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="border h-80 w-full sm:w-72 mt-4 bg-gray-50 rounded shadow-sm  p-2 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2 }}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col h-full w-full items-center justify-between ">
        {/* Image Container */}
        <div className="flex items-center justify-center h-3/5">
          <img src={imgUrl} alt={imgAlt} className="object-cover h-full" />
        </div>

        {/* Title */}
        <p className="text-lg font-medium mt-3 ">{cardTitle}</p>

        {/* Price and Button */}
        <div className="flex justify-between items-center w-full px-4 py-2">
          <p className="text-sm font-medium">{price}</p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className="h-10 w-10 bg-orange-400 rounded-full flex justify-center items-center text-white font-bold shadow-md hover:bg-orange-500 transition duration-300"
          >
            <IoAddSharp />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingSectionCard;
