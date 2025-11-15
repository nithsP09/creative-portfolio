"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  activeRoute?: string;
}

export default function Sidebar({ activeRoute }: SidebarProps) {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { label: "HOME", route: "/" },
    { label: "ABOUT ME", route: "/about" },
    { label: "RESUME", route: "/resume" },
    { label: "PORTFOLIO", route: "/portfolio" },
    { label: "TESTIMONY", route: "/testimonials" },
    { label: "CONTACT", route: "/contact" },
  ];

  //Conditional size for image
  const imageSizeClass = windowWidth <= 1024 ? "w-40 h-40" : "w-60 h-60";

  //Conditional margin-top for image (mt-5 only in 1024px)
  const imageMarginClass = windowWidth === 1024 ? "mt-5" : "";

  //Conditional margin-top for nav (mt-20 only in 1024px)
  const navMarginClass = windowWidth === 1024 ? "mt-20" : "mt-10";

  return (
    <aside className="w-[20%] bg-[#E7473C] flex flex-col items-center py-8 text-black">
      {/* Profile Section */}
      <div className="text-center">
        <div
          className={`${imageSizeClass} ${imageMarginClass} mx-auto rounded-full overflow-hidden border-4 border-[#F0F0F0] relative transition-all duration-300`}
        >
          <Image src="/user_image.png" alt="Profile" fill className="object-cover" />
        </div>

        {/* Navigation Links */}
        <nav className={`flex flex-col gap-10 text-lg font-semibold ${navMarginClass}`}>
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => router.push(link.route)}
              className={`transition ${
                activeRoute === link.route ? "text-[#F0F0F0]" : "hover:text-[#F0F0F0]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
