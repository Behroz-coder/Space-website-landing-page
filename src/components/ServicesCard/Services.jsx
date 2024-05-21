import React from "react";
import { FaReact } from "react-icons/fa"; // Importing React icon
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6"; // Importing other icons
import Wav from "../../assets/wave Gif.gif"; // Importing wave image
import MountainPng from "../../assets/moon-surface-hd.png"; // Importing moon surface image

// Data for services
const ServiceData = [
  {
    title: "HST", // Title of the service
    content: "300-1500km", // Content of the service
    description:
      "Used for astronomical observations, capturing stunning images of the universe", // Description of the service
    icon: <FaReact className="text-7xl" />, // Icon for the service
    aosDelay: "300", // Delay for AOS animation
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

function Services() {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          {/* Grid for displaying services */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-[#072c42] backdrop-blur-sm rounded-xl text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon} {/* Service icon */}
                <h1>{data.title}</h1> {/* Title */}
                <p>{data.content}</p> {/* Content */}
                <p className="text-sm">{data.description}</p>{" "}
                {/* Description */}
              </div>
            ))}
          </div>
          {/* Wave image */}
          <img
            src={Wav}
            alt="wave image"
            className="relative h-[200px] w-full object-cover mix-blend-screen -translate-y-24 z-[0]"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
