import React from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Stats  = () => {
return (
<section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            ["8K+", "Patients Served"],
            ["80%", "Clinical Satisfaction"],
            ["14+", "Years Experience"],
            ["88%", "Patient Recovery Rate"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-[#0aa7c6]">{num}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>
      );
    };
    export default Stats;