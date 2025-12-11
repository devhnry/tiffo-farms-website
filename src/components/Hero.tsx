import { forwardRef } from "react";
import { motion } from "motion/react";

export const HeroArea = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className={`py-16 pt-[154px] relative xl:py-20 xl:pt-[164px] xl:min-h-full xl:h-[calc(100vh-80px)]`}
    >
      {/* Background image */}
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/assets/img/Landing.jpg"
        alt="landing"
      />

      {/*/!* Top white fade *!/*/}
      {/*<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F3F3F3] via-[#F3F3F3]/50 to-transparent" />*/}

      {/* Bottom blur + white fade */}
      <div className="pointer-events-none absolute bottom-0 -z-10 left-0 w-full inset-0 bg-gradient-to-t from-[#F3F3F3] via-[#F3F3F3]/40 to-transparent backdrop-blur-[3px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
        className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl w-fit text-[14px] px-2 py-0.5 mx-auto`}
      >
        <p>🌿 Tiffo Farms and Feedmill Limited</p>
      </motion.div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ willChange: 'transform, opacity' }}
          className={`text-[#1A1A1A] text-[clamp(32px,calc(32px+(70-32)*((100vw-375px)/1065)),70px)] tracking-[0.5px] font-bold leading-[clamp(40px,calc(40px+(78-40)*((100vw-375px)/1065)),78px)] text-center py-4 xl:py-6`}
        >
          Nourishing Livestock, <br />
          Empowering Farmers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
          className={`text-[#000500]/80 leading-[24px] text-center text-[14px] xl:text-[16px] max-w-[343px] xl:max-w-[450px] w-full mx-auto`}
        >
          Integrated farm and feed-mill, producing nutritious feeds, healthy
          livestock, and sustainable harvests. With quality at our core and
          farmers at heart.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
        className={`flex gap-4 items-center w-fit mx-auto py-6 xl:py-8`}
      >
        <button
          className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 text-white font-bold shadow-button px-6`}
        >
          Contact Us
        </button>
        <button
          className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium rounded-[14px] py-2.5 shadow-soft px-6`}
        >
          Learn More
        </button>
      </motion.div>
    </section>
  );
});

HeroArea.displayName = "HeroArea";
