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

export default function PortfolioPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const categories = ["All", "Print Design", "Web Design", "Photography"];

  // Example portfolio images
  const portfolioItems = [
    { src: "/portfolio1.png", category: "Photography" },
    { src: "/portfolio2.png", category: "Web Design" },
    { src: "/portfolio3.png", category: "Print Design" },
    { src: "/portfolio4.png", category: "Web Design" },
    { src: "/portfolio5.png", category: "Photography" },
    { src: "/portfolio6.png", category: "Print Design" },
    { src: "/portfolio7.png", category: "Web Design" },
    { src: "/portfolio8.png", category: "Photography" },
    { src: "/portfolio9.png", category: "Photography" }
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen bg-[#F0F0F0] relative">
      {/* Sidebar for desktop/laptop */}
      {windowWidth >= 1024 && <Sidebar activeRoute="/portfolio" />}

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
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4">
          PORTFOLIO
        </h1>

        {/* Category Filters */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4 mb-6">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base font-semibold uppercase tracking-wide transition-all duration-300 
                ${activeCategory === cat ? "bg-[#E7473C] text-white px-3 py-1 rounded-md" : "text-black hover:text-[#E7473C]"}
                ${index >= 2 ? "mt-4 sm:mt-0" : "mt-0"}`} // mt only on second row on mobile
            >
              {cat}
            </button>
          ))}
        </div>


        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pr-[5rem] xl:pr-[6rem]">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-md transition-all duration-500
                ${activeCategory === "All" ? "hover:shadow-xl" : ""}`}
            >
              <img
                src={item.src}
                alt="Portfolio item"
                className={`w-full object-cover transform transition-transform duration-500
                  ${activeCategory === "All" ? "h-38 group-hover:scale-110" : "h-60"}`}
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-40 opacity-0 flex items-center justify-center
                  ${activeCategory === "All" ? "group-hover:opacity-100 transition-opacity duration-500" : ""}`}
              >
                <p className="text-white text-lg font-semibold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Icon Line for desktop/laptop */}
      {windowWidth >= 1024 && <RightIconLine />}

      {/* Mobile Menu for mobile/tablet */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}
    </div>
  );
}
