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

export default function ResumePage() {
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
      {/* Sidebar */}
      {windowWidth >= 1024 && <Sidebar activeRoute="/resume" />}

      {/* Main Content */}
      <main
        className={`flex-1 w-full
          ${
            windowWidth >= 1280
              ? "w-[80%] px-16 py-16"
              : windowWidth >= 1024
              ? "px-14 py-10"
              : "px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16"
          }
        `}
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold text-black mb-6">RESUME</h1>

        {/* Education Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-black mb-10">
            <span className="bg-[#E7473C] px-4 py-1 rounded">EDUCATION</span>
          </h2>

          <div
            className="text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:pr-20 xl:pr-28"
          >
            {[
                { year: "2000 - 2005", title: "Computer Science" },
                { year: "2005 - 2007", title: "Computer Science" },
                { year: "2008 - 2012", title: "Computer Science" },
            ].map((item, i) => (
                <div key={i} className="relative">
                    <div className="flex flex-col bg-transparent">
                        <span className="border border-black text-black text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                            {item.year}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Veritatis erroris rerum fugiat. Praesentium cupiditate,
                            doloribus at, veniam perspiciatis adipisci molestiae eveniet.
                            Velit exercitationem temporibus amet asperiores ad.
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-black mb-10">
            <span className="bg-[#E7473C] px-4 py-1 rounded">EXPERIENCE</span>
          </h2>

          <div className="text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:pr-20 xl:pr-28">
            {[
              { year: "2012 - 2014", title: "Web Designer" },
              { year: "2014 - 2016", title: "Graphic Designer" },
              { year: "2017 - 2020", title: "Product Designer" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col bg-transparent">
                  <span className="border border-black text-black text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Veritatis erroris rerum fugiat. Praesentium cupiditate,
                    doloribus at, veniam perspiciatis adipisci molestiae
                    eveniet. Velit exercitationem temporibus amet asperiores ad.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Right Icon Line */}
      {windowWidth >= 1024 && <RightIconLine />}

      {/* Mobile Menu */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}
    </div>
  );
}
