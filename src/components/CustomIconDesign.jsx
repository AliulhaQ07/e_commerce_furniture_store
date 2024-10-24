import React from "react";

const CustomIconDesign = ({ icon: Icon }) => {
  return (
    <div className="h-auto w-auto bg-primaryColor rounded p-1 text-2xl text-white hover:bg-orange-400 duration-200">
      <Icon />
    </div>
  );
};

export default CustomIconDesign;
