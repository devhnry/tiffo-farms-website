import { Target, Globe } from "lucide-react";

export const MissionAndVision = () => {
  
  return (
    <section className="max-w-[1100px] mx-auto w-full pt-24 pb-16 xl:pb-24 px-5">
      
      <div className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-full w-fit text-[14px] px-1 pr-2 py-0.5 ml-2.5 flex items-center gap-2`}>
        <Target className="subheading-icon" />
        <p className={`font-light`}>{'Our Mission & Vision'}</p>
      </div>
      
      <div className=" flex flex-col gap-3 py-4 px-3">
        <h2 className="font-bold text-[#2E3B2E] text-[clamp(28px,calc(28px+(38-28)*((100vw-375px)/1065)),38px)] leading-[48px]">
          Driving Growth, <br className={`lg:hidden`} /> Sustainability <br className={`hidden lg:block`} />& Impact
        </h2>
        <p className="text-[#636363] leading-[24px] text-[14px] xl:text-[16px] max-w-[420px] w-full">
          Our mission and vision guide every decision, from farm to market, empowering farmers and protecting the environment.
        </p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 relative">
        
        <div className={`border-white border-[1.5px] hidden md:block bg-black/50 size-[150px] absolute -top-[200px] -right-[70px] -z-10 rounded-xl rotate-[15deg] overflow-hidden shadow-fancy-two`}>
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src="/assets/img/tilapia-3.jpg"
            alt=""
          />
        </div>
        
        <div className={`border-white border-[1.5px] hidden md:block bg-black/50 size-[150px] absolute -top-[230px] right-[30px] -z-10 rounded-xl rotate-[0deg] overflow-hidden shadow-button`}>
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src="/assets/img/bang-5.jpg"
            alt=""
          />
        </div>
        
        <div className={`border-white border-[1.5px] hidden md:block bg-black/50 size-[150px] absolute -top-[200px] right-[120px] -z-10 rounded-xl -rotate-[15deg] overflow-hidden shadow-fancy-two`}>
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src="/assets/img/bang-1.jpg"
            alt=""
          />
        </div>
        
        
        <div
          className={`lg:col-span-2 rounded-2xl p-6 flex flex-col gap-4 shadow-fancy-two text-[#F3F3F3] bg-[#003905]`}
        >
          <div className="w-fit p-3 rounded-2xl shadow-button mb-3">
            <Target className="text-white text-[20px]" />
          </div>
          <h3 className={`text-[22px] font-bold`}>Mission ''</h3>
          <p className={`text-[14px] leading-[22px]`}>To produce high-quality feeds that drive growth and profitability for livestock and aquaculture farmers, while advancing sustainable practices that protect the environment, empower youth, and build lasting trust from farm to market.</p>
        </div>
        
        <div
          className={`lg:col-span-1 rounded-2xl p-6 flex flex-col gap-4 shadow-fancy-two text-[#636363] bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two`}
        >
          <div className="w-fit p-3 rounded-2xl shadow-button mb-3">
            <Globe className="text-[#2E3B2E] text-[20px]" />
          </div>
          <h3 className={`text-[22px] font-bold text-[#2E3B2E]`}>Vision ''</h3>
          <p className={`text-[14px] leading-[22px]`}>To transform African agriculture through sustainable practices, providing food and feed that empower farmers, nourish communities, and protect the future.</p>
        </div>
        
      </div>
    </section>
  );
};