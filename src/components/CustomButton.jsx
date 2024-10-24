import React from "react";

const CustomButton = ({ buttonTitle }) => {
  return (
    <div>
      <button className="px-6 py-2 bg-primaryColor text-white rounded-3xl hover:bg-orange-400 duration-200">
        {buttonTitle}
      </button>
    </div>
  );
};
export default CustomButton;
