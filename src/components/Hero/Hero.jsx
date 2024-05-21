import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png"; // Importing the background image

function Hero() {
  return (
    <div className="bg-black/20 h-full relative z-50 text-white">
      {/* Main content container */}
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left side content */}
          <div className="space-y-4 lg:pr-36">
            {/* Title */}
            <h1
              data-aos="fade-up"
              className="text-5xl mb-3 font-bold uppercase"
            >
              ORBIT THE EARTH
            </h1>
            {/* Description */}
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            {/* Learn more button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
          {/* Right side (empty for now) */}
          <div></div>
        </div>
      </div>
      {/* Background image */}
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* Bottom gradient section */}
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
}

export default Hero;
