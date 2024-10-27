import lamp2 from "../assets/productImages/lamp2.jpg";
import chair2 from "../assets/images/chair2.png";
import chair3 from "../assets/images/chair3.png";

import { motion } from "framer-motion";

const hoverVariants = {
  initial: { scale: 1, rotate: 0, transition: { type: "easeInOut" } },
  animate: {
    scale: 1.05,
    rotate: 2,
    transition: { type: "easeInOut", duration: 0.3 },
  },
};

const Sales = () => {
  const cards = [
    { id: 1, img: chair3, text: "Coffee Chair", price: "$ 89.77" },
    { id: 2, img: chair2, text: "Pendant Lamp", price: "$ 39.77" },
    { id: 3, img: chair3, text: "Coffee Chair", price: "$ 29.77" },
    { id: 4, img: chair2, text: "Pendant Lamp", price: "$ 19.77" },
    { id: 5, img: chair3, text: "Coffee Chair", price: "$ 49.77" },
    { id: 6, img: chair2, text: "Arne Dining Chair", price: "$ 51.29" },
  ];

  return (
    <div className="container mx-auto min-h-screen font-Raleway">
      {/* Header */}
      <div className="flex items-center justify-center py-9 text-gray-900">
        <p className="text-4xl tracking-wider font-semibold">SALES</p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-200 absolute -z-10 top-16">
          SALES
        </p>
      </div>

      {/* SHOWCASING PRODUCTS */}
      <div className="flex flex-col lg:flex-row justify-center items-center h-auto gap-8 px-4">
        {/* Left Section - Full-height Image */}
        <motion.div
          className="w-full lg:w-1/3 h-full flex items-center justify-center p-1"
          variants={hoverVariants}
          initial="initial"
          whileHover="animate"
        >
          <img
            src={lamp2}
            alt="Featured Product"
            className="w-auto h-[66vh] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Section - 3x2 Product Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 p-2">
          {cards.map((card) => (
            <motion.div
              variants={hoverVariants}
              initial="initial"
              whileHover="animate"
              key={card.id}
              className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-2"
            >
              <img
                src={card.img}
                alt={card.text}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {card.text}
                </h3>
                <p className="text-gray-500 mt-1 text-sm">{card.price}.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
