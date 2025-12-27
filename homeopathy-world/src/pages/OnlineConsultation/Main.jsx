 import React, { useState } from "react";
import online from "../../Images/OnlineConsultation/Homeopathy-2.webp"

 const Main = () => {
 return (
 <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          
          {/* Banner */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-cyan-600">
            <img
              src={online}
              alt="consultation"
              className="absolute inset-0 w-full h-full opacity-30"
            />
            <div className="relative p-10 text-white">
              <span className="uppercase text-sm tracking-wide">
                Welcome to Sumitra Homeopathy Clinic
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Committed to ensure Quality Healthcare
              </h2>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-xl font-bold mb-4">Get Appointment</h3>
            <p className="text-gray-600 text-sm mb-6">
              Call us 24/7 for emergency, to schedule an appointment, or to
              consult online.
            </p>

            <div className="bg-cyan-50 p-4 rounded-xl mb-4">
              <p className="text-sm font-semibold text-gray-700">
                WhatsApp
              </p>
              <p className="text-lg font-bold text-cyan-700">
                +91 91091 02650
              </p>
            </div>

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-full font-medium transition">
              Request An Appointment →
            </button>
          </div>
        </div>
      </section>
      );
    };
    export default Main;