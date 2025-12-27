import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "../Images/Navbar/logo-3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [foldAngle, setFoldAngle] = useState(0);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const menuRef = useRef(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/Online-Consultation", label: "Online Consultation" },
    { path: "/Homeopathy", label: "Homeopathy" },
    { path: "/contact", label: "Contact" },
  ];

  /* ================= SMOOTH SCROLL HANDLER ================= */
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          if (currentY > lastScrollY.current && currentY > 120) {
            // scroll down → hide
            setHidden(true);
            setFoldAngle(90);
          } else {
            // scroll up → show
            setHidden(false);
            setFoldAngle(0);
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= CLOSE MENU ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ================= TOP BAR ================= */}
      <div
        className={`transition-all duration-300 ${
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <TopBar />
      </div>

      {/* ================= HEADER ================= */}
      <div
        className="bg-white/95 backdrop-blur-md shadow border-b border-gray-100 origin-top transition-transform duration-500"
        style={{
          transform: `perspective(1200px) rotateX(-${foldAngle}deg)`,
        }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/">
              <img src={Navbar} alt="Logo" className="w-20" />
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink to="/contact" className="btn-primary">
                Book Appointment
              </NavLink>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border rounded-lg"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 space-y-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 font-medium"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;