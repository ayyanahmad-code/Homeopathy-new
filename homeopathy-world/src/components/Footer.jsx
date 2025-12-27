import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FooterBg from "../Images/Footer/image.png"

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={FooterBg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full "
      />

      {/* ================= OVERLAY GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-br"/>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative container-main py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <p className="text-sm text-white/80 mb-6">
              Sumitra Homeopathy Clinic has been offering comprehensive
              homeopathy medical services with natural and holistic healing.
            </p>

            <div className="flex space-x-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:absolute after:w-8 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-2 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 mt-6 text-sm text-white/80">
              <li>Chronic Disease Management</li>
              <li>Pediatric Care</li>
              <li>Stress & Emotional Health</li>
              <li>Women’s Health</li>
              <li>Preventive & Lifestyle Care</li>
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:absolute after:w-8 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-2 text-white">
              For Customers
            </h3>
            <ul className="space-y-3 mt-6 text-sm text-white/80">
              <li>Upload Prescription</li>
              <li>Request a Call Back</li>
              <li>Healthcare Packages</li>
              <li>Download Reports</li>
              <li>Track Progress</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:absolute after:w-8 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-2 text-white">
              Opening Hour
            </h3>

            <ul className="space-y-2 mt-6 text-sm text-white/80">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map(day => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span className="text-cyan-400">
                    05:30 PM – 09:00 PM
                  </span>
                </li>
              ))}
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cyan-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= CONTACT STRIP ================= */}
      <div className="relative border-t border-white/10">
        <div className="container-main grid md:grid-cols-3 gap-6 py-8 text-sm">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
              <FaWhatsapp />
            </div>
            <div>
              <p className="text-white/70">Book Your Consultation</p>
              <p className="text-lg font-semibold">+91 91091 02650</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span>contact@homeopathy-world.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <span>
              301, Near 11 No. Stop, E-7, Arera Colony, Bhopal
            </span>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative border-t border-white/10 py-4 text-sm">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            © 2007-2025, ALL RIGHTS RESERVED
          </p>

          <div className="flex gap-6 text-white/70">
            <a className="hover:text-cyan-400">Privacy Policy</a>
            <a className="hover:text-cyan-400">Refund & Cancellation</a>
            <a className="hover:text-cyan-400">Terms & Condition</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
