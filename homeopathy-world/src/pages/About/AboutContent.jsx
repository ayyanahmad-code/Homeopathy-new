 import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaSmile,
  FaClock,
  FaHospital,
} from "react-icons/fa";
import Image from "../../Images/About/About-4.png"
import Img  from "../../Images/About/About-6.png"
 
 const Abouut = () => {
 return (
 <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={Image}
                alt="doctor"
                className="rounded-2xl shadow-lg"
              />
              <img
                src={Img}
                alt="clinic"
                className="rounded-2xl shadow-lg mt-10"
              />
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                alt="consultation"
                className="rounded-2xl shadow-lg col-span-2"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
              About Sumitra Homeopathy Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Redefining Healthcare Standards with Advanced Homeopathy
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Sumitra Homeopathy Clinic, we are dedicated to providing gentle,
              effective, and holistic healing through personalized homeopathic
              treatments. With years of expertise, we focus on addressing the
              root cause of illness and restoring long-term wellness naturally.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Expert Homeopathic Practitioners",
                "Advanced Homeopathic Diagnostics",
                "Complete Holistic Care",
                "Round-the-Clock Support",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-blue-600 mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Call: +91 91091 02650
              </button>
            </div>
          </div>
        </div>
      </section>
      );
    };
    export default Abouut;