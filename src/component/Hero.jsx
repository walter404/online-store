import React from "react";
//import image
import WomanImg from "../img/woman_hero.png";
//import link
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-[800px] py-24">
      <div className="mx-auto flex justify-around h-full ml-4">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New styles
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
          The best quality and<br />
            <span className="font-semibold">Price</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-gray-500">
            DISCOVER MORE
          </Link>
        </div>
        {/* image */}
         <div className="hidden lg:block">
          <img src={WomanImg} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
