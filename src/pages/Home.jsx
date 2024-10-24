import React from "react";
import CustomButton from "../components/CustomButton.jsx";
import SoftChair from "../assets/images/chair1.png";

const Home = () => {
  return (
    <>
      <div className="container mx-auto h-screen font-Raleway">
        {/*MASTER CONTAINER*/}
        <div className="flex flex-col md:flex md:flex-row ">
          {/*HEADING DIV*/}
          <div className="basis-1/2  h-screen flex flex-col items-start justify-center p-2 gap-6">
            <p className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
              TRENDY COLLECTIONS
            </p>
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl">
              MAKE YOUR <span className="text-primaryColor ">INTERIOR</span>{" "}
              UNIQUE & MODERN.
            </h1>

            <div className="border-s-2 px-2 border-s-gray-400 text-sm sm:text-sm md:text-lg lg:text-lg ">
              <p>TURN YOUR ROOM WITH PANTO INTO A LOT MORE</p>
              <p>MINIMALIST AND MODERN.</p>
            </div>
            <CustomButton buttonTitle={"DISCOVER NOW"} />
          </div>
          {/*IMAGES AND CARD DIV*/}
          <div className="basis-1/2 bg-red-100 f">
            <img src={SoftChair} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
