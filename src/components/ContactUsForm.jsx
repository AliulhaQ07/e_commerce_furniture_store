import React from "react";

const ContactUsForm = ({
  labelText,
  labelFor,
  inputType = "text",
  placeHolder,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={labelFor} className="text-gray-700 font-semibold">
        {labelText}
      </label>
      <input
        type={inputType}
        id={labelFor}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeHolder}
      />
    </div>
  );
};
export default ContactUsForm;
