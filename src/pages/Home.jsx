import React from "react";
import CustomButton from "../components/CustomButton.jsx";
import sofaChair from "../assets/images/chair1.png";
import sofaChair2 from "../assets/images/chair2.png";
import sofaChair3 from "../assets/images/chair3.png";
import longSofa from "../assets/images/longSofa.png";
import diningChair from "../assets/images/diningChair.png";
import saleSofa from "../assets/images/saleSofa.png";
import { animate, motion } from "framer-motion";
import CardDesign from "../components/CardDesign.jsx";
import TrendingSectionCard from "../components/TrendingSectionCard.jsx";

const Home = () => {
  // State to track selected color and set initial image
  const [selectedColor, setSelectedColor] = React.useState("defaultColor");

  // Image mapping based on selected color
  const images = {
    defaultColor: sofaChair,
    color2: sofaChair2,
    color3: sofaChair3,
  };

  // Animation variants for image transitions
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  // Animation variants for card transitions for trending products
  const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto min-h-screen font-Raleway text-gray-800">
      {/* MASTER CONTAINER */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* HEADING DIV */}
        <div className="flex-1 flex flex-col items-start justify-center p-2 gap-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            TRENDY COLLECTIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            MAKE YOUR{" "}
            <span className="text-primaryColor font-medium">INTERIOR</span>{" "}
            UNIQUE & MODERN.
          </h1>

          <div className="border-l-2 border-gray-400 pl-2 text-sm md:text-lg">
            <p>TURN YOUR ROOM WITH PANTO INTO A LOT MORE</p>
            <p>MINIMALIST AND MODERN.</p>
          </div>

          <CustomButton buttonTitle={"DISCOVER NOW"} />
        </div>

        {/* RIGHT SIDE : IMAGES AND CARD DIV */}
        <div className="flex-1 flex flex-col items-center p-2 justify-center">
          <motion.div
            key={selectedColor}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 0.2 }}
            className="w-[300px] h-[300px] flex items-center justify-center overflow-hidden"
          >
            <motion.img
              src={images[selectedColor]}
              alt="Soft Chair"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* PARENT : PRICE AND COLOR CHANGE DIV */}
          <div className="h-auto w-full  sm:w-full md:w-96 p-5 bg-white rounded font-medium shadow mb-8 ">
            <div className="flex justify-between font-bold">
              <p>SOFA</p>
              <p>$98.59</p>
            </div>
            <p className="my-2">Italy style</p>

            {/* BORDER DIV */}
            <div className="w-full border-b-2 border-gray-200 my-2"></div>

            {/* COLORS TO CHOOSE */}
            <div className="flex justify-between font-bold my-4 ">
              <p>Colors:</p>
              <div className="flex gap-6">
                <div
                  className={`h-6 w-6 bg-[#d6cdc5] rounded-full cursor-pointer ${selectedColor === "defaultColor" ? "border-2 border-primaryColor" : ""}`}
                  onClick={() => setSelectedColor("defaultColor")}
                ></div>
                <div
                  className={`h-6 w-6 bg-[#334a6e] rounded-full cursor-pointer ${selectedColor === "color2" ? "border-2 border-primaryColor" : ""}`}
                  onClick={() => setSelectedColor("color2")}
                ></div>
                <div
                  className={`h-6 w-6 bg-[#e0934e] rounded-full cursor-pointer  ${selectedColor === "color3" ? "border-2 border-red-500" : ""}`}
                  onClick={() => setSelectedColor("color3")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
      {/*  SECTION 2 showcasing the 2 primary items */}
      <div className="container mx-auto h-auto ">
        {/* MASTER CONTAINER */}
        <div className="flex flex-col items-center justify-center p-3 gap-4 md:flex-row">
          {/* Left side */}
          <CardDesign
            Heading={"Long Sofa"}
            subHeading={"Structure almost highlights"}
            buttonText={"SHOP NOW"}
            imgUrl={longSofa}
            bgColor={"bg-red-50"}
            borderRounded={"rounded-lg"}
          />

          {/* Right side */}
          <CardDesign
            Heading={"Dining Chair"}
            subHeading={"Structure almost highlights"}
            buttonText={"SHOP NOW"}
            imgUrl={diningChair}
            bgColor={"bg-cyan-50"}
            borderRounded={"rounded-lg"}
          />
        </div>
      </div>
      {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
      {/*  SECTION 3 TRENDING PRODUCT */}
      <section className="container mx-auto w-auto h-auto my-24 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-bold text-2xl sm:text-3xl">Trending Products</p>
          <p className="font-medium text-sm max-w-md text-gray-600">
            Find the perfect pieces that blend style and comfort, making your
            home the ultimate sanctuary this season!
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly ">
          {/* BOX 1 */}
          <TrendingSectionCard
            imgUrl={sofaChair3}
            cardTitle={"Clean Cut Dining Chair"}
            imgAlt={"Clean Cut Dining Chair"}
            price={"$169.89"}
          />

          {/* BOX 2 */}
          <TrendingSectionCard
            imgUrl={sofaChair2}
            cardTitle={"Elegant Sofa"}
            imgAlt={"Elegant Sofa"}
            price={"$299.89"}
          />

          {/* BOX 3 */}
          <TrendingSectionCard
            imgUrl={sofaChair3}
            cardTitle={"Minimalist Armchair"}
            imgAlt={"Minimalist Armchair"}
            price={"$159.99"}
          />

          {/* BOX 4 */}
          <TrendingSectionCard
            imgUrl={sofaChair2}
            cardTitle={"Modern Lounge Chair"}
            imgAlt={"Modern Lounge Chair"}
            price={"$249.99"}
          />
        </div>
      </section>

      {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
      {/*  SECTION 4 SALE BANNER  */}
      <section className="  container mx-auto bg-blue-50 h-auto sm:px-4 md:h-96 mb-12  flex flex-col md:flex-row justify-evenly items-center p-6 rounded shadow overflow-hidden ">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 space-y-4">
          <p className="uppercase text-lg tracking-wide text-gray-700">
            world's best sofas
          </p>
          <p className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Sale ends in 1 day
          </p>
          <CustomButton buttonTitle={"Order Now"} />
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-auto mt-6 md:mt-0">
          <img
            src={saleSofa}
            alt="Sale Sofa"
            className="w-3/4 md:w-[400px] lg:w-[500px] object-cover rounded-md "
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
