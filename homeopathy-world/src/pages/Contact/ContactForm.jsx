 import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

 const Form = () => {
 return (
 <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="text-cyan-600 text-xl uppercase font-semibold">
              Trusted Care. Proven Excellence
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Get <span className="text-cyan-600">10% flat discount</span> for
              first appointment!
            </h2>
            <p className="text-gray-600 mt-4 max-w-md text-2xl">
              At Sumitra Homeopathy Clinic, we are dedicated to delivering
              exceptional healthcare. For over 18 years, we have been offering
              comprehensive homeopathic services in India.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border rounded-2xl p-8 shadow">
            <form className="space-y-4 ">
              <input className="input" placeholder="Name*" />
              <input className="input" placeholder="Email*" />
              <input className="input" placeholder="Subject" />
              <textarea
                className="input h-28 resize-none"
                placeholder="Text"
              ></textarea>

              <button className="bg-[#00B4D8] hover:bg-[#54595F] text-white px-8 py-3 rounded-full w-fit">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </section>
      );
    };
export default Form;