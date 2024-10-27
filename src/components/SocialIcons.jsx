import React from "react";

const SocialIcons = ({ icon: Icon }) => {
  return (
    <button className="rounded-3xl h-10 w-10  flex items-center justify-center border border-gray-400 text-2xl ">
      <Icon />
    </button>
  );
};
export default SocialIcons;
