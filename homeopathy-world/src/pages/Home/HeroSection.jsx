import React from "react";
import {
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroImage from "../../Images/Home/Home.png";

const Hero = () => {
return (
<section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#062b4c] leading-tight">
            Comprehensive <br />
            Homeopathic Care for <br />
            Your Health and{" "}
            <span className="text-[#0aa7c6]">Wellbeing</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            At Sumitra Homeopathy Clinic, we are dedicated to providing
            personalized healthcare with compassion, innovation, and integrity.
          </p>

          <button className="mt-8 bg-[#0aa7c6] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#088fa9] transition">
            Book An Appointment <FaCalendarAlt />
          </button>
        </div>

        <div>
          <img src={HeroImage} alt="Doctors" className="w-full object-contain" />
        </div>
      </section>
      );
    };
export default Hero;