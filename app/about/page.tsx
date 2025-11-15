"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import RightIconLine from "@/components/RightIconLine";
import MobileMenu from "@/components/MobileMenu";
import { FaHome, FaUser, FaBriefcase, FaCommentDots, FaDesktop, FaPaperPlane, FaPrint, FaLaptopCode, FaCamera } from "react-icons/fa";

export default function AboutPage() {
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
      {/* Sidebar only for desktop/laptop */}
      {windowWidth >= 1024 && <Sidebar activeRoute="/about" />}

      {/* Main Content */}
      <main
        className={`flex-1 w-full 
          ${
            windowWidth >= 1280
              ? "w-[80%] px-16 py-16" // large desktops
              : windowWidth >= 1024
              ? "px-14 py-10" // smaller padding for 1024px range
              : "px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16" // mobile/tablet normal
          }
        `}
      >
        {/* Header */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold text-black mb-4">ABOUT ME</h1>
        <p className="text-xl mb-2">
          I’m <span className="font-bold text-[#E7473C]">Evelin Geo</span>, Graphic Designer / Photographer
        </p>
        <p className="text-black text-justify text-lg max-w-3xl mt-10 mb-10">
          Veritatis erroris rerum fugiat. Praesentium cupiditate, doloribus at,
          veniam perspiciatis adipisci molestiae eveniet. Velit exercitationem
          temporibus amet asperiores ad.
        </p>

        {/* Two Columns */}
        <div className={`grid ${windowWidth < 1024 ? "grid-cols-1 gap-8" : "grid-cols-2 gap-12"}`}>
          {/* Left Column - What I Do */}
          <div className="text-justify">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">What I Do?</h2>

            <div className="flex items-start gap-5 mb-8">
              <div className="min-w-16 min-h-16 w-16 h-16 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md hover:bg-[#e69600] transition-all duration-300 transform hover:scale-110">
                <FaPrint className="text-[#F0F0F0] text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">Print Design</h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lorem quis sem cursus faucibus.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <div className="min-w-16 min-h-16 w-16 h-16 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md hover:bg-[#e69600] transition-all duration-300 transform hover:scale-110">
                <FaLaptopCode className="text-[#F0F0F0] text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">Web Design</h3>
                <p className="text-gray-700 text-base">
                  Curabitur tristique, justo sed pretium imperdiet, sapien ipsum volutpat justo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="min-w-16 min-h-16 w-16 h-16 rounded-full bg-[#E7473C] flex items-center justify-center shadow-md hover:bg-[#e69600] transition-all duration-300 transform hover:scale-110">
                <FaCamera className="text-[#F0F0F0] text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">Photography</h3>
                <p className="text-gray-700 text-base">
                  Aenean facilisis metus sed odio eleifend, eget malesuada sapien vestibulum.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className={`${windowWidth < 1024 ? "" : "mr-[60px]"}`}>
            <div
              className={`grid
                grid-cols-2
                ${windowWidth >= 1024 && windowWidth < 1536 ? "grid-cols-2" : "lg:grid-cols-3"}
                ${windowWidth === 1024 ? "gap-12" : "gap-6"}
                mt-6`
              }
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "450", label: "Projects Done" },
                { number: "65", label: "Won Awards" },
                { number: "300+", label: "Happy Clients" },
                { number: "650K", label: "Satisfied Followers" },
                { number: "+10", label: "New Videos Each Month" },
              ].map((fact, i) => (
                <div
                  key={i}
                  className={`bg-[#E7473C]
                    text-center
                    p-5
                    rounded-lg
                    w-28 h-28                  /* mobile */
                    sm:w-72                    /* tablet */
                    md:w-80                    /* mid-tablet */
                    ${windowWidth === 1024 ? "w-80" : ""}   /* wider only at 1024px */
                    lg:w-36                    /* desktop normal */
                    flex flex-col items-center justify-center
                    text-black font-semibold
                    mx-auto
                    shadow-md
                    hover:scale-105
                    transition-transform duration-300`}
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{fact.number}</p>
                  <p className="text-xs sm:text-sm md:text-base text-center leading-tight">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Icon Line only for desktop/laptop */}
      {windowWidth >= 1024 && <RightIconLine />}

      {/* Mobile Menu (hamburger + overlay) only for tablet/mobile */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}
    </div>
  );
}
