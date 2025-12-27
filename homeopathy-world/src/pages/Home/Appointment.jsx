import React from "react";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
      <div className="grid lg:grid-cols-3 gap-8">

        {/* ================= Appointment Form ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            Book An Appointment
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill in the details and we will contact you shortly
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Full Name"
            />
            <input
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Phone Number"
            />

            <input
              type="date"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <select className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none">
              <option>Select Service</option>
              <option>Skin & Hair Treatment</option>
              <option>Chronic Diseases</option>
              <option>Pediatric Care</option>
            </select>

            <select className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none">
              <option>Select Doctor</option>
              <option>Dr. Sumitra</option>
              <option>Dr. Anil</option>
            </select>

            <input
              type="file"
              className="border border-gray-300 p-3 rounded-lg file:text-sm file:border-0 file:bg-cyan-50 file:text-cyan-700"
            />
          </div>

          <textarea
            className="border border-gray-300 p-3 rounded-lg w-full mt-4 h-28 focus:ring-2 focus:ring-cyan-500 outline-none"
            placeholder="Message / Symptoms"
          />

          <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full transition flex items-center gap-2">
            <FaCalendarAlt />
            Submit Appointment
          </button>
        </div>

        {/* ================= Opening Hours ================= */}
        <div className="bg-gradient-to-b from-cyan-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">
            Opening Hours
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Monday - Saturday</span>
              <span>08:30 AM – 02:00 PM</span>
            </div>

            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <FaPhoneAlt className="text-xl" />
            <div>
              <p className="text-xs opacity-80">Emergency Contact</p>
              <p className="font-semibold">+91 91091 02650</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Appointment;
