import React from "react";
import Logo from "../../assets/logo.png"; // Importing the logo image

function Navbar() {
  return (
    <div
      data-aos="fade-down"
      className="sticky top-0 right-0 w-full z-[99] bg-black/5 backdrop-blur-md py-4 sm:py-4"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo and site title */}
          <div className="flex items-center text-white gap-4 font-bold text-2xl">
            <img src={Logo} alt="logo image" className="w-10" /> {/* Logo */}
            <span>BEHROZ-SPACE</span> {/* Site Title */}
          </div>
          {/* Navigation links */}
          <div className="text-white hidden md:block">
            <ul className="flex items-center text-xl gap-6 py-4 sm:py-0">
              <li>
                <a href="#">About</a> {/* About link */}
              </li>
              <li>
                <a href="#">Technology</a> {/* Technology link */}
              </li>
              <li>
                <a href="#">Galaxy</a> {/* Galaxy link */}
              </li>
              <li>
                <a href="#"> Satellite</a> {/* Satellite link */}
              </li>
            </ul>
          </div>
          {/* Login button */}
          <div>
            <button className="border-2 border-white py-1 px-3 text-white rounded-md ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
