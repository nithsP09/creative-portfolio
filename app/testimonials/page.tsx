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
} from "react-icons/fa";

export default function TestimonialsPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* Sidebar (visible only on desktop/laptop) */}
      {windowWidth >= 1024 && <Sidebar activeRoute="/testimonials" />}

      {/* Main content */}
      <main
        className={`flex-1 w-full 
          ${windowWidth >= 1024 ? "overflow-hidden h-screen" : "overflow-y-auto min-h-screen"}
          ${
          windowWidth >= 1280
            ? "w-[80%] px-16 py-16" // large desktops
            : windowWidth >= 1024
            ? "px-14 py-10" // smaller padding for 1024px range
            : "px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16" // mobile/tablet normal
          }`
        }
      >
        {/* Page heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-6">
          TESTIMONY
        </h1>

        {/* Testimonials Section Wrapper */}
        <div className="w-full xl:pr-15 lg:pr-6 md:pr-0 sm:pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {[
              {
                name: "Oliver",
                role: "LUPTAT LA SOLUPTAT",
                text: "Evelin is most skillful and dedicated designer. Always gives more than we asked for.",
                img: "/testimonial1.jpg",
                date: "15.3.2023",
              },
              {
                name: "Janny",
                role: "LUPTAT LA SOLUPTAT",
                text: "Bold, creative, and quick in delivery — she made our brand look premium effortlessly.",
                img: "/testimonial2.jpg",
                date: "24.4.2023",
              },
              {
                name: "Luna",
                role: "LUPTAT LA SOLUPTAT",
                text: "Her concepts were elegant and sharp. We enjoyed working together every step.",
                img: "/testimonial3.jpg",
                date: "11.6.2023",
              },
              {
                name: "Marko",
                role: "LUPTAT LA SOLUPTAT",
                text: "A great collaborator and a creative problem solver. Highly recommend her services.",
                img: "/testimonial4.jpg",
                date: "25.8.2023",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#E7473C] text-white p-6 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-md hover:shadow-xl transition-all duration-300 
                sm:h-[280px] md:h-[300px] lg:h-[250px]"
              >
                {/* Profile Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover border-2 border-[#E69600]"
                />
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <p className="text-sm text-white font-medium mb-3">{item.role}</p>
                  <p className="text-[#F0F0F0] text-sm mb-4">{item.text}</p>

                  {/* Stars + Date */}
                  <div className="flex justify-between items-center">
                    <div className="flex text-[#E6B400]">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                    <p className="text-xs text-black">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Icon Line (desktop/laptop only) */}
      {windowWidth >= 1024 && <RightIconLine />}

      {/* Mobile Menu (for mobile/tablet) */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}
    </div>
  );
}
