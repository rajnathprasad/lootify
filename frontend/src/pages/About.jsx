import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full max-w-[350px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            FITVERSE was built with a vision to redefine online fashion through
            innovation. We go beyond traditional shopping by introducing a
            smarter, more interactive way to explore clothing—right from your
            screen.
          </p>
          <p>
            With our virtual try-on experience, you can see how outfits look on
            you before making a purchase, helping you choose with confidence and
            eliminate guesswork.
          </p>
          <p>
            We carefully curate styles that combine quality, comfort, and modern
            trends—so you not only look good, but feel confident in every
            choice.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at FITVERSE is to make fashion more personalized,
            accessible, and reliable. By blending technology with style, we aim
            to give every customer the confidence to shop smarter and express
            themselves effortlessly.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-emerald-800">Smart Try-On Experience:</b>
          <p className="text-teal-900/50">
            Experience fashion in a whole new way with our virtual try-on
            feature. See how outfits look on you before you buy, making your
            choices more confident and personalized.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-emerald-800">Effortless Shopping:</b>
          <p className="text-teal-900/50">
            Navigate seamlessly through our platform with a clean interface and
            smooth checkout process, designed to make your shopping fast, easy,
            and enjoyable.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-emerald-800">Customer First Approach:</b>
          <p className="text-teal-900/50">
            We prioritize your satisfaction at every step—from discovery to
            delivery—ensuring a reliable and enjoyable shopping experience every
            time.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
