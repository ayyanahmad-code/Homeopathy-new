import React from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* Service Images */
import chronicImg from "../Images/Home/foot.jpg";
import stressImg from "../Images/Home/Fav.jpg";
import pediatricImg from "../Images/Home/Log.jpg";
import Back from "../Images/Home/bg.jpg"

/* Service Card */
import ServiceCard from "../components/DirectionAwareCard";
import Hero from "./Home/HeroSection";
import Appointment from "./Home/Appointment";
import About from "./Home/Aboutsection";
import Faq from "./Home/Faq";
import Stats from "./Home/Stats";

const Home = () => {
  return (
    <div className="mt-28 w-full bg-[#e9fbff]">

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= APPOINTMENT + HOURS ================= */}
     <Appointment />

      {/* ================= ABOUT SECTION ================= */}
      <About />

      {/* ================= STATS ================= */}
      <Stats />

      {/* ================= SERVICES ================= */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
            <img
              src={Back} // import your image
              alt="Services Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r"/>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Have a look at our services
        </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Chronic Disease Management"
              image={chronicImg}
              description="Long-term treatment addressing root cause healing."
            />
            <ServiceCard
              title="Stress & Lifestyle Care"
              image={stressImg}
              description="Holistic care to restore balance and wellbeing."
            />
            <ServiceCard
              title="Pediatric & Family Health"
              image={pediatricImg}
              description="Gentle, safe care for children and families."
            />
          </div>
            </div>
          </section>

      {/* ================= FAQ ================= */}
      <Faq />

    </div>
  );
};

export default Home;
