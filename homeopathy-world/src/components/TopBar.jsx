import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="hidden md:block bg-cyan-500 text-white text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -10,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="container-main flex justify-between items-center h-10">
        
        {/* Left Details */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2">
            <FaClock className="text-xs" />
            Mon - Sat : 5:30 PM - 9:00 PM
          </span>

          <span className="flex items-center gap-2">
            <FaEnvelope className="text-xs" />
            contact@homeopathy-world.com
          </span>

          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xs" />
            301, Near 11 No Stop, E-7, Arera Colony, Bhopal
          </span>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-200 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
