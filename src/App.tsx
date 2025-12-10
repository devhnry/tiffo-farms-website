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

function App() {

  return (
    <>
      <main className={`max-w-[1440px] mx-auto w-full overflow-hidden`}>
        <Navbar />
        <HeroArea />
        <AboutUsPage />
        <WhatWeDo />
        <WhyChooseUs />
        <Products />
        <MissionAndVision />
        <CoreValues />
        <ContactUs />
        <div className={`px-5`}>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
