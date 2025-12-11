import { forwardRef } from "react";
import { Subheading } from "./Subheading.tsx";
import { Briefcase, Factory, Leaf, Recycle } from "lucide-react";
import { images } from "../constants";

export const WhatWeDo = forwardRef<HTMLElement>((_props, ref) => {
  const data = [
    {
      icon: <Leaf className="text-white text-[20px]" />,
      title: "Integrated Farming",
      desc:
        "From aquaculture and poultry to crop cultivation, we run a model that combines nature’s cycles with smart" +
        " management for maximum productivity.",
    },
    {
      icon: <Factory className="text-white text-[20px]" />,
      title: "Modern Feed-mill",
      desc:
        "Our state-of-the-art feed-mill formulates scientifically balanced diets using the best raw materials and" +
        " nutrition principles; ensuring healthy growth, better FCR, and higher yields for farmers.",
    },
    {
      icon: <Recycle className="text-white text-[20px]" />,
      title: "Sustainability First",
      desc:
        "By recycling by-products, promoting local sourcing, and reducing waste, we protect the environment while" +
        " supporting food security.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-[720px] px-5 md:max-w-[1100px] mx-auto w-full pb-16 lg:pb-24`}
    >
      <Subheading
        icon={<Briefcase className={`subheading-icon`} />}
        text={"Our Capabilities"}
      />
      <div className={`text-center flex flex-col gap-3 py-[16px] px-3`}>
        <h2
          className={`font-bold text-[#2E3B2E] text-[clamp(30px,calc(30px+(40-30)*((100vw-375px)/1065)),40px)]`}
        >
          What Tiffo Does
        </h2>
        <p
          className={`text-[#636363] leading-[24px] text-center text-[14px] xl:text-[16px] max-w-[343px] w-full mx-auto`}
        >
          We combine technology, sustainability, and smart systems to deliver
          efficient, high-quality floating fish feed production.
        </p>
      </div>

      <div
        className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl p-3 flex flex-col gap-4 my-8 2md:grid 2md:grid-cols-2 md:gap-2 relative`}
      >
        <div
          className={`border-white border-[1.5px] bg-black/50 size-[150px] absolute -top-[240px] -left-[140px] 2xs:-top-[200px] 2xs:-left-[100px] md:-left-[50px] -z-10 rounded-xl -rotate-[15deg] overflow-hidden shadow-fancy-two
          `}
        >
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={images.catfish1}
            alt=""
          />
        </div>

        <div
          className={`border-white border-[1.5px] bg-black/50 size-[150px] absolute -top-[280px] -left-[100px] -z-10  2xs:-top-[230px] 2xs:-left-[40px] md:left-[30px] rounded-xl rotate-[5deg] overflow-hidden shadow-button`}
        >
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={images.catfish2}
            alt=""
          />
        </div>

          {data.map((item, index) => (
            <div
              key={index}
              className={`
                bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl p-4 flex flex-col gap-1
                ${index === 1 ? "2md:row-span-2" : ""}
              `}
            >
              <div
                className={`bg-[#115B02] rounded-2xl p-3 w-fit shadow-button mb-3`}
              >
                {item.icon}
              </div>
              <h3 className={`text-[rgb(0,33,1)] text-[22px] font-bold`}>
                {item.title}
              </h3>
              <p className={`text-[#636363] text-[14px]`}>{item.desc}</p>
              {index === 1 && (
                <div className="mt-4">
                  <div className="bg-gray-100 border-2 border-white/50 rounded-xl w-full h-48 flex items-center justify-center text-gray-400 relative overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover scale-140 bg-top-left"
                    src={images.building3}
                    alt=""
                  />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
  );
});

WhatWeDo.displayName = "WhatWeDo";
