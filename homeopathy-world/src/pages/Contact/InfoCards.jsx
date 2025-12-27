import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Info = () => {
return (
<section className="bg-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {/* Address */}
          <div className="border rounded-xl p-6">
            <h1 className="text-4xl font-semibold mb-3">Address</h1>
            <div className="w-10 h-[2px] bg-cyan-500 mb-4"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              301, Near 11 No Stop, Next to Juice Bar, E-7 Area Colony,  
              Bhopal, Madhya Pradesh 462016
            </p>
          </div>

          {/* Phone */}
          <div className="border rounded-xl p-6">
            <h3 className=" text-4xl font-semibold mb-3">Phone</h3>
            <div className="w-10 h-[2px] bg-cyan-500 mb-4"></div>
            <p className="text-xl text-gray-700">
              Call & WhatsApp
            </p>
            <p className="text-xl font-semibold mt-2 text-cyan-700">
              +91 91091 02650
            </p>
          </div>

          {/* Email */}
          <div className="border rounded-xl p-6">
            <h3 className="text-4xl font-semibold mb-3">Email</h3>
            <div className="w-10 h-[2px] bg-cyan-500 mb-4"></div>
            <p className="text-xl text-gray-700">
              Email Consultation
            </p>
            <p className="text-xl font-semibold mt-2 text-cyan-700">
              contact@homeopathy-world.com
            </p>
          </div>
        </div>
      </section>
      );
    };
    export default Info;