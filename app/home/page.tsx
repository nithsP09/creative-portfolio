"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaDesktop, 
  FaPaperPlane, 
  FaCommentDots 
} from "react-icons/fa";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Curved icons for desktop
  const desktopIcons = [
    { Icon: FaPaperPlane, angle: -75, route: "/contact" },
    { Icon: FaCommentDots, angle: -45, route: "/testimonials" },
    { Icon: FaDesktop, angle: -15, route: "/portfolio" },
    { Icon: FaBriefcase, angle: 20, route: "/resume" },
    { Icon: FaUser, angle: 50, route: "/about" },
    { Icon: FaHome, angle: 80, route: "/" },
  ];

  // Logical icons for mobile/tablet toggle menu
  const mobileIcons = [
    { Icon: FaHome, route: "/" },
    { Icon: FaUser, route: "/about" },
    { Icon: FaBriefcase, route: "/resume" },
    { Icon: FaDesktop, route: "/portfolio" },
    { Icon: FaCommentDots, route: "/testimonials" },
    { Icon: FaPaperPlane, route: "/contact" },
  ];

  // Curve radius logic
  let radius = 290; // xl / desktop
  if (windowWidth >= 768 && windowWidth < 1025) radius = 230; // md / tablet
  if (windowWidth < 768) radius = 150; // sm / mobile

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F0F0F0] relative overflow-hidden px-5 sm:px-6 md:px-12 lg:px-[140px] py-10 sm:py-16">
      {/* Yellow bars for desktop */}
      <div className="hidden lg:block absolute left-0 top-55 bottom-55 w-12 bg-[#E7473C]"></div>
      <div className="hidden lg:block absolute right-0 top-55 bottom-55 w-12 bg-[#E7473C]"></div>

      {/* Mobile Menu only for tablet/mobile */}
      {windowWidth < 1024 && <MobileMenu icons={mobileIcons} />}

      {/* Main Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 max-w-lg flex flex-col items-start text-center sm:text-left px-2 sm:px-0">
          <div className="flex flex-col items-start sm:items-start">
            <h4 className="text-[#E7473C] font-extrabold text-4xl sm:text-4xl mb-3 tracking-wider uppercase">
              HI THERE!
            </h4>
            <div className="w-20 h-[4px] -ml-5 bg-[#E7473C] mb-6"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline gap-3 mb-6 justify-center sm:justify-start">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-black">
              I&apos;M
            </h1>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-[#E7473C]">
              EVELIN
            </h1>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-block px-3 sm:px-4 py-2 bg-[#E7473C] text-black font-semibold text-xs sm:text-sm rounded-sm w-max shadow-sm">
              GRAPHIC DESIGNER / PHOTOGRAPHER
            </div>
            <div className="inline-block px-3 sm:px-4 py-2 bg-black text-[#E7473C] font-semibold text-xs sm:text-sm rounded-sm w-max shadow-sm">
              READY TO HANDLE YOUR NEW PROJECT
            </div>
          </div>

          <p className="text-black text-xs sm:text-sm mb-8 leading-relaxed text-justify sm:text-left">
            Veriatio erroris eserum fuga. Pa crusaper volut im nonsequos acetae
            cus verberaum intur? Quis et eos arumquae periae nonet apelitore con
            nim volore reptus unde bitas si cus estem harie ped quosare veritem
            quiam facest quia volupta cum sus.
          </p>

          <button 
            onClick={() => router.push("/about")}
            className="bg-black text-[#F0F0F0] rounded-full px-5 sm:px-6 py-2 sm:py-3 text-sm font-semibold shadow-md hover:bg-[#E7473C] hover:text-black transition-all">
            MORE ABOUT ME
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
          <div className="relative w-[300px] sm:w-[400px] lg:w-[520px] h-[300px] sm:h-[400px] lg:h-[520px] flex items-center justify-center">
            {/* Outer Curve Line */}
            <div className="absolute w-[340px] md:w-[460px] xl:w-[580px] h-[340px] md:h-[460px] xl:h-[580px] border-[3px] border-[#E7473C] rounded-full border-r-transparent border-b-transparent rotate-[135deg] hidden lg:block"></div>

            {/* Profile Image */}
            <div className="rounded-full overflow-hidden w-[260px] sm:w-[320px] md:w-[340px] xl:w-[440px] h-[260px] sm:h-[320px] md:h-[340px] xl:h-[440px] relative z-10 shadow-lg">
              <Image src="/user_image.png" alt="Evelin" fill className="object-cover" />
            </div>

            {/* Curve Icons (desktop only) */}
            {windowWidth >= 1024 && (
              <div className="absolute inset-0 flex items-center justify-center">
                {desktopIcons.map(({ Icon, angle, route }, i) => {
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  const isActive = pathname === route;

                  return (
                    <div
                      key={i}
                      onClick={() => router.push(route)}
                      style={{ position: "absolute", transform: `translate(${x}px, ${-y}px)` }}
                      className="group w-10 md:w-11 xl:w-12 h-10 md:h-11 xl:h-12 rounded-full bg-black flex items-center justify-center shadow-md transition-all z-20"
                    >
                      <Icon className={`transition-colors duration-300 ${
                        isActive ? "text-[#E7473C]" : "text-[#F0F0F0] group-hover:text-[#E7473C]"
                      }`} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
