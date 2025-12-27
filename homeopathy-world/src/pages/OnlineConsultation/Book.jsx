import React from "react";

const Book = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          alt="hospital"
          className="rounded-3xl shadow-xl w-full object-cover"
        />

        {/* Form */}
        <div className="bg-cyan-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            Book An Appointment
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            We do not disclose your information.
          </p>

          <form className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="Full Name" />
            <input className="input" placeholder="Email Address" />
            <input className="input" placeholder="Phone Number" />

            <select className="input">
              <option>Select Treatment</option>
              <option>Skin Treatment</option>
              <option>Hair Loss Treatment</option>
              <option>Chronic Disease Care</option>
            </select>

            <select className="input">
              <option>Choose Doctor</option>
              <option>Dr. Sumitra</option>
              <option>Dr. Anjali</option>
            </select>

            <input type="date" className="input" />

            <textarea
              className="input col-span-2 h-24"
              placeholder="Message"
            />

            <button
              type="submit"
              className="col-span-2 bg-cyan-600 hover:bg-cyan-700 transition text-white py-3 rounded-full font-medium"
            >
              Submit Appointment →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Book;
