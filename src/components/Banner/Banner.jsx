import React from "react";
import StelliteImage from "../../assets/satelite1.jpg"; // Importing satellite image

function Banner() {
  return (
    <div className="text-white bg-black pb-12 relative z-50">
      <div className="container">
        {/* Grid layout for banner content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Satellite image */}
          <div>
            <img
              data-aos="zoom-in"
              src={StelliteImage}
              alt=" Satellite Image"
              className="w-full sm:w-[80%] mx-auto object-cover max-h-[350px]"
            />
          </div>
          {/* Banner content */}
          <div className="space-y-4 lg:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800">
              OUR MISSION
            </p>
            {/* Title */}
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl uppercase"
            >
              RAPIDCAST
            </h1>
            {/* Description */}
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.{" "}
            </p>
            {/* Learn More button */}
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
