import { useRef } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { HeroArea } from "./components/Hero.tsx";
import { AboutUsPage } from "./components/AboutUs.tsx";
import { WhatWeDo } from "./components/WhatWeDo.tsx";
import { WhyChooseUs } from "./components/WhyChooseUs.tsx";
import { CoreValues } from "./components/CoreValues.tsx";
import { ContactUs } from "./components/ContactUs.tsx";
import { MissionAndVision } from "./components/MissionAndVision.tsx";
import { Footer } from "./components/Footer.tsx";
import { Products } from "./components/Products.tsx";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper.tsx";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  
  const sectionRefs = [
    aboutRef,
    servicesRef,
    productsRef,
    valuesRef,
  ];
  
  return (
    <>
      <Navbar sectionRefs={sectionRefs}/>
      <HeroArea/>
      <main className={`max-w-[1440px] mx-auto w-full overflow-hidden`}>
        <ScrollAnimationWrapper alwaysRender>
          <AboutUsPage ref={aboutRef}/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <WhatWeDo ref={servicesRef}/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper alwaysRender>
          <WhyChooseUs/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper alwaysRender>
          <Products ref={productsRef}/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <MissionAndVision/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper alwaysRender>
          <CoreValues ref={valuesRef}/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ContactUs/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper alwaysRender>
          <div className={`px-5`}>
            <Footer/>
          </div>
        </ScrollAnimationWrapper>
      </main>
    </>
  );
}

export default App;
