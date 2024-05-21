import React, { useEffect } from "react";
import bgVideo from "./assets/earth-bg.mp4"; // Importing background video
import Navbar from "./components/Navbar/Navbar"; // Importing Navbar component
import Hero from "./components/Hero/Hero"; // Importing Hero component
import Services from "./components/ServicesCard/Services"; // Importing Services component
import Banner from "./components/Banner/Banner"; // Importing Banner component
import Banner2 from "./components/Banner/Banner2"; // Importing Banner2 component
import Footer from "./components/Footer/Footer"; // Importing Footer component
import AOS from "aos"; // Importing AOS library
import "aos/dist/aos.css"; // Importing AOS styles

function App() {
  // Initialize AOS library once the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <div>
      {/* Background video container */}
      <div className="h-[700px] relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Navbar component */}
        <Navbar />
        {/* Hero component */}
        <Hero />
      </div>
      {/* Service Card component */}
      <Services />
      {/* Banner component */}
      <Banner />
      {/* Banner2 component */}
      <Banner2 />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
