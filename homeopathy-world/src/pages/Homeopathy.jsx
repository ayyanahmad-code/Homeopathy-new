import React from "react";
import Hero from "../components/Background";
import Intro from "./Homeopathy/Intro";
import About from "./Homeopathy/AboutHomeopathy";
import Conditions from "./Homeopathy/Conditions";
import Stat from "./Homeopathy/Stats";
import Why from "./Homeopathy/Why";
import Appointmant from "./Homeopathy/Appointment";
const Homeopathy = () => {
  return (
    <div className=" mt-28">
      {/* ================= HERO ================= */}
      <Hero title="Homeopathy" breadcrumb="Homeopathy" />

      {/* ================= INTRO ================= */}
      <Intro />

      {/* ================= ABOUT HOMEOPATHY ================= */}
      <About />

      {/* ================= CONDITIONS ================= */}
     < Conditions />
      {/* ================= STATS ================= */}
      < Stat />

      {/* ================= WHY CHOOSE ================= */}
      <Why />

      {/* ================= APPOINTMENT CTA ================= */}
     <Appointmant />
    </div>
  );
};

export default Homeopathy;
