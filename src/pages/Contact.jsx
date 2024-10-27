import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsCard from "../components/ContactUsCard.jsx";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import ContactUsForm from "../components/ContactUsForm.jsx";
import { IoTimeOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="container mx-auto min-h-screen font-Raleway px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-center py-4 text-gray-800">
        <p className="text-4xl tracking-wider font-semibold">CONTACT US</p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-300 absolute -z-10 top-16">
          CONTACT US
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start h-auto gap-8 px-6 py-12 ">
        {/* Left Section - Contact Information */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-8 p-6 bg-white  border  ">
          <ContactUsCard icon={FaPhoneAlt} text={"+92-316-7500934"} />
          <ContactUsCard icon={MdEmail} text={"MR.ALIULHAQ0711@GMAIL.COM"} />
          <ContactUsCard
            icon={IoLocationSharp}
            text={"LAHORE, PUNJAB, PAKISTAN"}
          />
          <ContactUsCard icon={IoTimeOutline} text={"24 / 7  Available"} />
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 p-6 bg-white  border  ">
          <h2 className="text-2xl font-semibold text-gray-800">SEND MESSAGE</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            autem commodi doloribus expedita laudantium nulla quas repellendus
            rerum ullam velit.
          </p>

          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ContactUsForm
              labelText={"Your Name"}
              labelFor={"name"}
              placeHolder={"Enter your name"}
              inputType={"text"}
            />

            <ContactUsForm
              labelText={"Email"}
              labelFor={"email"}
              inputType={"email"}
              placeHolder={"Enter your email"}
            />

            <ContactUsForm
              labelText={"Phone no"}
              labelFor={"phone"}
              inputType={"phone"}
              placeHolder={"Enter your phone number"}
            />

            <ContactUsForm
              labelText={"Subject"}
              labelFor={"subject"}
              inputType={"text"}
              placeHolder={"Enter the subject"}
            />

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
