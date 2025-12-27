import React from "react";
import { Link } from "react-router-dom";
import Image  from "../Images/Background/bg-footer1.jpg";

const Hero = ({ title, breadcrumb }) => {
  return (
    <section className="relative h-[260px] md:h-[300px] flex items-center overflow-hidden bg-gradient-to-br from-[#0b1c4d] via-[#0a2f6f] to-[#0b6aa7]">
      
      {/* Decorative wave lines */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
        <svg
          viewBox="0 0 600 400"
          fill="none"
          src={Image}
          className="h-full w-full"
        >
          <path
            d="M0 300 C150 200 300 400 600 250"
            stroke="#00e5ff"
            strokeWidth="1"
          />
          <path
            d="M0 340 C200 220 350 420 600 300"
            stroke="#00e5ff"
            strokeWidth="0.7"
          />
          <path
            d="M0 380 C180 260 380 460 600 340"
            stroke="#00e5ff"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container-main relative z-10 flex justify-between items-center w-full px-6">
        
        {/* Left Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="hidden md:flex text-sm text-white/90 space-x-2">
          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <span>›</span>
          <span className="text-cyan-300">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
