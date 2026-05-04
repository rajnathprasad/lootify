import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex  flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Manak Vihar
            <br />
            Patel Nagar, MP
          </p>
          <p className="text-gray-500">
            Phone: +91-8252494XXX <br />
            Email: admin@fitverse.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at FitVerse
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button
            className="px-8 py-4 text-sm text-white 
bg-gradient-to-r from-emerald-800 to-teal-900/70 
hover:opacity-90 
transition-all duration-500 rounded-md shadow-md"
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
