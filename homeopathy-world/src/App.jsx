import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RouteLoader from "./components/RouteLoader";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OnlineConsultation from "./pages/OnlineConsultation";
import Homeopathy from "./pages/Homeopathy";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  // Website first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200); // initial load time

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 🔥 Scroll to top */}
      <ScrollToTop />

      {/* 🔥 Route change loader */}
      <RouteLoader />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Online-Consultation" element={<OnlineConsultation />} />
          <Route path="/Homeopathy" element={<Homeopathy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
