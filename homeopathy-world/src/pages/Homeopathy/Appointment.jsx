import React from "react";

const Appointmant = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="bg-cyan-50 p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Appointments Made Easy
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Book your consultation today and start your journey toward
            holistic and natural healing with professional homeopathic care.
          </p>
        </div>

        {/* Appointment Form */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6 text-white ml-20">
            Book An Appointment
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Service Select */}
            <select
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select Service</option>
              <option>General Consultation</option>
              <option>Chronic Disease</option>
              <option>Skin Treatment</option>
              <option>Pediatric Care</option>
            </select>

            {/* Date */}
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:col-span-2"
            />

            {/* Message */}
            <textarea
              rows="3"
              placeholder="Your Message (Optional)"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:col-span-2"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="md:col-span-2 mt-2 bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-full font-semibold text-white text-lg"
            >
              Schedule Appointment →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointmant;
