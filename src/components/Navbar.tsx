import { useState } from "react";
import type { RefObject } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollDirection } from "../hooks/useScrollDirection";

interface NavbarProps {
  sectionRefs: RefObject<HTMLElement | null>[];
}

export const Navbar = ({ sectionRefs }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navMenus = ["About", "Services","Products", "Values"];

  const activeSection = useActiveSection({ sectionRefs, offset: 80 });
  const scrollDirection = useScrollDirection();

  const scrollToSection = (index: number) => {
    const section = sectionRefs[index]?.current;
    if (section) {
      const offsetTop = section.offsetTop - 80;
      
      // Smooth scroll with requestAnimationFrame for better performance
      const startPosition = window.scrollY;
      const distance = offsetTop - startPosition;
      const duration = 1500; // ms
      let start: number | null = null;
      
      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        // const progress = Math.min(timeElapsed / duration, 1);
        // const ease = easeInOutCubic(10);
        
        window.scrollTo(0, startPosition + distance);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-[16px] left-[16px] right-[16px] z-50`}>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: scrollDirection === "down" ? -8 : 0,
          opacity: scrollDirection === "down" ? 0.96 : 1
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ willChange: 'transform, opacity' }}
        className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl flex items-center px-4 py-[4px] justify-between max-w-[720px] mx-auto xl:bg-[#F3F3F3] xl:max-w-[1048px]`}
      >
        <div className={`font-bold text-[18px] flex items-center gap-1`}>
          <img src={`/logo-ph.png`} alt={`Logo`} className={`size-[24px]`} />
          <p>Tiffo</p>
        </div>
        <div className={`hidden md:flex items-center gap-5`}>
          {navMenus.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => scrollToSection(i)}
              className={`relative hover:shadow-xl rounded-xl px-[12px] text-center font-medium py-1.5 cursor-pointer transition duration-200 ease-in ${
                activeSection === i ? "text-[#2D721A]" : ""
              }`}
            >
              {item}
              {activeSection === i && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-[#2D721A]/10 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        <button
          onClick={() => scrollToSection(5)}
          className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 text-white font-medium hidden md:block`}
        >
          Contact Us
        </button>

        <div
          onClick={toggleMenu}
          className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 md:hidden`}
        >
          {menuOpen ? (
            <X className={`text-white text-[24px]`} />
          ) : (
            <Menu className={`text-white text-[24px]`} />
          )}
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: 'transform, opacity' }}
            className={`mt-[10px] fixed top-[75px] left-[16px] right-[16px] bg-[#F5F5F5] border-white border-[1px] font-medium shadow-fancy rounded-2xl px-4 py-[14px] flex flex-col gap-5 items-center`}
          >
            <div className={`w-full flex flex-col items-center gap-1.5`}>
              {navMenus.map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(i)}
                  className={`hover:shadow-xl rounded-xl w-full px-10 text-center font-medium py-3.5 cursor-pointer transition ${
                    activeSection === i ? "bg-[#2D721A]/10 text-[#2D721A]" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection(5)}
              className={`w-full bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 text-white font-bold`}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
