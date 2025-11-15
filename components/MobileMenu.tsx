"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

interface IconType {
  Icon: any;
  route: string;
}

interface MobileMenuProps {
  icons: IconType[];
}

export default function MobileMenu({ icons }: MobileMenuProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      {!mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-6 right-6 z-50 lg:hidden"
        >
          <FaBars size={28} className="text-black" />
        </button>
      )}

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-transparent flex flex-col items-end pr-6 pt-8 gap-6 z-50 transition-all duration-300 lg:hidden">
          {/* Close button */}
          <button onClick={() => setMobileMenuOpen(false)} className="mb-2">
            <FaTimes size={28} className="text-black" />
          </button>

          {/* Icons list */}
          <div className="flex flex-col items-end gap-5">
            {icons.map(({ Icon, route }, i) => (
              <div
                key={i}
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push(route);
                }}
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md hover:bg-[#E7473C] transition-all"
              >
                <Icon color="white" size={20} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
