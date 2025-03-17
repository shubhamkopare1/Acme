import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-transperent py-12 px-4 text-center ">
      {/* Floating Robot */}
      <img
        src="/robot.png" // Update with your image path
        alt="Robot"
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-28 animate-bounce"
      />
<h2 className="text-base sm:text-lg font-semibold text-cyan-400 uppercase">
          TECH-AXION 2K25
        </h2>
      {/* Footer Content */}
      <div className="max-w-4xl mx-auto">
        {/* <h2 className="text-2xl font-bold text-cyan-400">TECH-AXION 2k25</h2> */}
        <p className="text-gray-400 mt-2">
          Information Technology Department
          <br/>
          Tulsiramji Gaikwad Patil College of Engineering and Technology, Nagpur
        </p>

        
    

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">© Acme 2025 . All Rights Reserved.</p>
        <p class="text-gray-500 text-xs">Developed by <span class="text-cyan-400 font-semibold">Shubham Kopare 6th sem</span> </p>
        <p className="text-gray-500 text-sm ">mobile :<span class="text-cyan-400 font-semibold">8485029672</span> </p>
      </div>
    </footer>
  );
};

export default Footer;
