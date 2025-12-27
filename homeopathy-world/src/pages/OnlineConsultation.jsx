import React, { useState } from "react";
import online from "../Images/OnlineConsultation/Homeopathy-2.webp"
import Hero from "../components/Background";
import Main from "./OnlineConsultation/Main";
import Info from "./OnlineConsultation/Info";
import Faq from "./OnlineConsultation/Faq";
import Book from "./OnlineConsultation/Book";



const OnlineConsultation = () => {
 

  return (
    <div className=" mt-28">
      {/* ================= HERO ================= */}
      <Hero title="Online Consultation" breadcrumb="Online Consultation" />

      {/* ================= MAIN BANNER ================= */}
     <Main />

      {/* ================= INFO CARDS ================= */}
     <Info />

      {/* ================= FAQ ================= */}
     <Faq />

      {/* ================= BOOK APPOINTMENT ================= */}
     <Book />
    </div>
  );
};

export default OnlineConsultation;
