"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // usePathname to detect active route
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCommentDots,
  FaDesktop,
  FaPaperPlane,
} from "react-icons/fa";

export default function RightIconLine() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route path
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const icons = [
    { Icon: FaHome, route: "/" },
    { Icon: FaUser, route: "/about" },
    { Icon: FaBriefcase, route: "/resume" },
    { Icon: FaDesktop, route: "/portfolio" },
    { Icon: FaCommentDots, route: "/testimonials" },
    { Icon: FaPaperPlane, route: "/contact" },
  ];

  // Conditional margin for container
  const containerClass =
    windowWidth <= 1024
      ? "absolute right-10 -mr-9 top-1/2 -translate-y-1/2 h-[470px]"
      : "absolute right-10 top-1/2 -translate-y-1/2 h-[470px]";

  // Conditional top spacing for inner div
  const innerDivClass =
    windowWidth === 1024
      ? "relative h-full w-[64px] top-15"
      : "relative h-full w-[64px]";

  return (
    <div className={containerClass}>
      <div className={innerDivClass}>
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#E7473C] rounded-full" />

        {/* Icons */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6">
          {icons.map(({ Icon, route }, i) => {
            const isActive = pathname === route; // Check if current path matches icon’s route
            return (
              <button
                key={i}
                onClick={() => router.push(route)}
                className={`group w-10 md:w-11 xl:w-12 h-10 md:h-11 xl:h-12 rounded-full bg-black flex items-center justify-center shadow-md transition-all z-20`}
              >
                <Icon
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-[#E7473C]" // Active icon stays red
                      : "text-[#F0F0F0] group-hover:text-[#E7473C]" // Others turn red on hover
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
