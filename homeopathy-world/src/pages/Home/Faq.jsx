import React from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Faq = () => {
return (
<section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {[
          "Is homeopathy safe for children and elderly?",
          "How long does it take to see results?",
          "Can homeopathy be combined with other medicine?",
          "Do I need consultation before treatment?",
        ].map((q, i) => (
          <div
            key={i}
            className="border-b py-4 cursor-pointer hover:text-[#0aa7c6]"
          >
            {q}
          </div>
        ))}
      </section>
      );
    };
export default Faq;
