import { Leaf } from "lucide-react";
import { Subheading } from "./Subheading.tsx";

export const AboutUsPage = () => {
  return (
    <section className={`pb-16 lg:pb-20 mt-[100px]`}>
      <Subheading icon={<Leaf className={`subheading-icon`} />} text={'About Tiffo'}/>
      
      <div className={`grid grid-cols-2 items-start gap-6 py-[60px] px-6 max-w-[1240px] mx-auto w-full`}>
        <div id={'about'}
             className={`text-[18px] lg:text-[22px] font-medium flex flex-col gap-4 lg:gap-6 py-[20px] text-[#636363] px-3 max-w-[650px] lg:max-w-[700px] mx-auto w-full transition`}>
          <p>At <span className={`font-bold text-[#003905]`}>Tiffo Farms and Feedmill Limited</span>, our story began
            with a simple belief: good farming starts with good feed, and good feed starts with care.</p>
          
          <p> What began as a modest farm in the heart of Owode-Egba, Obafemi LGA, Ogun State, Nigeria in 2022 has grown
            into a thriving integrated agribusiness; combining crop cultivation, livestock, aquaculture, and a modern
            feedmill under one roof.</p>
          
          <p> We are more than just a feed producer. We are a partner to farmers, a bridge to food security, and a
            family of passionate growers committed to leaving the soil richer, the animals healthier, and the people
            stronger.</p>
        </div>
        <div className={`relative rounded-2xl overflow-hidden h-full shadow-fancy-two`}>
          {/*<div className="pointer-events-none absolute bottom-0 z-10 left-0 w-full inset-0 bg-gradient-to-l from-[#F3F3F3] via-[#F3F3F3]/10 to-transparent backdrop-blur-[0.5px]" />*/}
          <img
            className="h-full w-full object-cover"
            src="/assets/img/about.jpg"
            alt="landing"
          />
        </div>
      </div>
    </section>
  )
}