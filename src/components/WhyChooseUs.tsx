import { Subheading } from "./Subheading.tsx";
import {
  Lightbulb,
  Sprout,
  CheckCircle,
  Users,
  WandSparkles,
} from "lucide-react";
import { images } from "../constants";

export const WhyChooseUs = () => {
  const data = [
    {
      icon: <Sprout className="text-white text-[20px]" />,
      title: "Sustainability Grown",
      desc: "Healthy animals, healthy soils, healthy communities.",
      image: true,
      img: images.bang2,
    },
    {
      icon: <Lightbulb className="text-white text-[20px]" />,
      title: "Innovation Driven",
      desc: "We blend traditional farming knowledge with modern research",
    },
    {
      icon: <Users className="text-white text-[20px]" />,
      title: "Farmer Focused",
      desc: "For commercial growers and smallholders, our feeds and services are tailored to help you succeed.",
    },
    {
      icon: <CheckCircle className="text-white text-[20px]" />,
      title: "Quality you can Trust",
      desc: "Every batch of feed is tested for protein, energy, and digestibility",
      image: true,
      img: images.hand9mm,
    },
  ];

  return (
    <section
      id="services"
      className={`max-w-[720px] md:max-w-[1100px] mx-auto w-full pt-16 pb-16 xl:pb-24 px-5`}
    >
      <Subheading
        icon={<WandSparkles className={`subheading-icon`} />}
        text={"Services"}
      />

      <div className={`text-center flex flex-col gap-3 py-[16px] px-3`}>
        <h2
          className={`font-bold text-[#2E3B2E] text-[clamp(30px,calc(30px+(40-30)*((100vw-375px)/1065)),40px)]`}
        >
          What Tiffo Offers
        </h2>
        <p
          className={`text-[#636363] leading-[24px] text-center text-[14px] xl:text-[16px] max-w-[343px] w-full mx-auto`}
        >
          We focus on innovation, sustainability, quality, and farmer success to
          deliver feeds you can depend on.
        </p>
      </div>

      <div
        className={`alternate-grid bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl p-3 flex flex-col gap-4 my-8 lg:grid grid-cols-3 relative`}
      >
        <div
          className={`border-white border-[1.5px] bg-black/50 size-[150px] absolute -top-[260px] -right-[140px] 2xs:-top-[200px] 2xs:-right-[100px] md:-right-[70px] -z-10 rounded-xl rotate-[15deg] overflow-hidden shadow-fancy-two`}
        >
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={images.catfish3}
            alt=""
          />
        </div>

        <div
          className={`border-white border-[1.5px] bg-black/50 size-[150px] absolute -top-[295px] -right-[120px]  2xs:-top-[230px] 2xs:-right-[40px] md:right-[10px] -z-10 rounded-xl -rotate-[5deg] overflow-hidden shadow-button`}
        >
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={images.catfish5}
            alt=""
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`
                ${
                  item.image
                    ? "grid sm:grid-cols-[250px_1fr] col-span-2 items-center gap-6"
                    : ""
                }
                bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl p-4 flex flex-col gap-1
              `}
          >
            {item.image && (
              <div className="max-w-[250px w-full min-h-[135px] h-full bg-gray-200 rounded-lg shadow-fancy-two relative overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
            )}

            <div>
              <div
                className={`bg-[#115B02] rounded-2xl p-3 w-fit shadow-button mb-3`}
              >
                {item.icon}
              </div>
              <h3 className={`text-[rgb(0,33,1)] text-[22px] font-bold`}>
                {item.title}
              </h3>
              <p className={`text-[#636363] text-[14px]`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
