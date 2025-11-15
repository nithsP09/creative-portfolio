"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import RightIconLine from "@/components/RightIconLine";
import MobileMenu from "@/components/MobileMenu";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCommentDots,
  FaDesktop,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

export default function ContactPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Icons for mobile menu
  const mobileIcons = [
    { Icon: FaHome, route: "/" },
    { Icon: FaUser, route: "/about" },
    { Icon: FaBriefcase, route: "/resume" },
    { Icon: FaDesktop, route: "/portfolio" },
    { Icon: FaCommentDots, route: "/testimonials" },
    { Icon: FaPaperPlane, route: "/contact" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F0F0F0] relative">
      {/* Sidebar for Desktop/Laptop */}
      {windowWidth >= 1024 && <Sidebar activeRoute="/contact" />}

      {/* Main Content */}
      <main
        className={`flex-1 w-full
          ${
            windowWidth >= 1280
              ? "w-[80%] px-16 py-16" // large desktops
              : windowWidth >= 1024
              ? "px-14 py-10" // smaller desktop
              : "px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16" // mobile/tablet
          }
        `}
      >
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-6">
          CONTACT
        </h1>

        {/* Subtitle */}
        <p className="pt-2 text-3xl text-gray-700">
          Feel <span className="font-semibold text-black">free</span> to contact me!
        </p>
        <p className="text-black max-w-2xl mt-7">
          Busclet a medi nexus aptilos diagnius, office duet enain duo ablior est.
          Partione magneta conset medi aut dispart quert objact seclorum archigum
          mo nisi dinunt.
        </p>

        {/* Icons Section */}
        <div className="mt-15 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 md:gap-20">
          {/* Website */}
          <div className="flex flex-col items-center text-center">
            <div className="w-30 h-30 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md 
                transition-all duration-300 ease-in-out 
                hover:shadow-xl cursor-pointer group">
              <FaDesktop className="text-black text-5xl transition-transform duration-500 group-hover:rotate-[360deg]" />
            </div>
            <p className="mt-8 font-semibold text-black">WWW.EXAMPLE.COM</p>
            <p className="text-black">INFO@EXAMPLE.COM</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-30 h-30 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md 
                transition-all duration-300 ease-in-out 
                hover:shadow-xl cursor-pointer group">
              <FaPhone className="text-black text-5xl transition-transform duration-500 group-hover:rotate-[360deg]" />
            </div>
            <p className="mt-8 font-semibold text-black">+0123 444 7890</p>
            <p className="text-black">+0123 444 7891</p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center text-center">
            <div className="w-30 h-30 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md 
                transition-all duration-300 ease-in-out 
                hover:shadow-xl cursor-pointer group">
              <FaUser className="text-black text-5xl transition-transform duration-500 group-hover:rotate-[360deg]" />
            </div>
            <p className="mt-8 font-semibold text-black">SOCIAL NETWORK NAME</p>
            <p className="text-black">SOCIAL NETWORK NAME</p>
          </div>
        </div>

        {/* Footer */}
        <h2 className="text-2xl md:text-3xl font-extrabold mt-18 text-black text-center">
          THANKS FOR PATIENCE!
        </h2>    
      </main>

      {/* Right Icon Line for Desktop/Laptop */}
      {windowWidth >= 1024 && <RightIconLine />}

      {/* Mobile Menu for Mobile/Tablet */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}
    </div>
  );
}
