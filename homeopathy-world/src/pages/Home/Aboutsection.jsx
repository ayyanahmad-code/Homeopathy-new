import React from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Fav from "../../Images/Home/About-4.png";
import Img from "../../Images/Home/About-5.png";
import Top from "../../Images/Home/About-6.png";
import Background from "../../Images/Home/Background.png";

const About = () => {
return (
<section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-left"
          style={{ backgroundImage: `url(${Background})` }}
        />
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(#bfe9f3_1px,transparent_1px)] [background-size:18px_18px] opacity-40"></div>

            <div className="relative grid grid-cols-2 gap-6">
              <div className="row-span-2 mt-20">
                <img src={Top} className="rounded-[32px] shadow-xl" />
              </div>
              <img src={Fav} className="rounded-[28px] shadow-lg h-[220px] object-cover" />
              <img src={Img} className="rounded-[28px] shadow-lg h-[220px] object-cover" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[#0aa7c6] text-sm font-semibold">
              ABOUT SUMITRA HOMEOPATHY CLINIC
            </span>

            <h2 className="text-3xl font-bold mt-3 text-[#062b4c]">
              Redefining Homeopathic Healthcare
            </h2>

            <p className="text-gray-700 mt-4">
              Our clinic is dedicated to delivering exceptional homeopathic care
              with expertise and compassion.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Expert Homeopathic Professionals",
                "Advanced Diagnostic Approach",
                "Personalized Patient Care",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <FaCheckCircle className="text-[#0aa7c6]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/about">
              <button className="mt-6 bg-[#0aa7c6] hover:bg-[#088fa9] text-white px-6 py-3 rounded-full transition">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      );
    };
    export default About;