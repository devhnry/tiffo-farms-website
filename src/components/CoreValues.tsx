import { forwardRef } from "react";
import { Subheading } from "./Subheading.tsx";
import {
  Leaf,
  Scale,
  FlaskConical,
  Handshake,
  Award,
  HeartHandshake,
} from "lucide-react";

export const CoreValues = forwardRef<HTMLElement>((_props, ref) => {
  const data = [
    {
      icon: <Leaf className="text-white text-[20px]" />,
      title: "Sustainability",
      desc: "We farm with the future in mind; protecting the environment while producing responsibly.",
    },
    {
      icon: <Scale className="text-white text-[20px]" />,
      title: "Integrity",
      desc: "Honesty and transparency guide everything we do, from our fields to your hands.",
    },
    {
      icon: <FlaskConical className="text-white text-[20px]" />,
      title: "Innovation",
      desc: "We combine science, technology, and experience to deliver smarter farming and superior feeds.",
    },
    {
      icon: <Handshake className="text-white text-[20px]" />,
      title: "Partnership",
      desc: "We believe real growth happens through collaboration. We work closely with farmers, suppliers, and communities to build strong, lasting relationships that create value, stability, and shared success for everyone involved.",
    },
    {
      icon: <Award className="text-white text-[20px]" />,
      title: "Excellence",
      desc: "Every bag of feed, every harvest, every service reflects our commitment to top-quality results.",
    },
  ];

  return (
    <section
      id={'values'}
      ref={ref}
      className={`max-w-[720px] px-5 xl:max-w-[1100px] mx-auto w-full mt-8 pb-16 xl:pb-24`}
    >
      <Subheading
        icon={<HeartHandshake className={`subheading-icon`} />}
        text={"Values"}
      />

      <div className={`text-center flex flex-col gap-3 py-[16px] px-3`}>
        <h2
          className={`font-bold text-[#2E3B2E] text-[clamp(28px,calc(28px+(38-28)*((100vw-375px)/1065)),38px)]`}
        >
          Our Core Values
        </h2>
        <p
          className={`text-[#636363] leading-[24px] text-[14px] xl:text-[16px] max-w-[420px] w-full mx-auto`}
        >
          Our values guide how we farm, how we serve, and how we build long-term
          trust with farmers and communities.
        </p>
      </div>

      <div
        className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl p-3 grid gap-4  lg:grid-cols-3 my-8`}
      >
          {data.map((item, index) => (
            <div
              key={index}
              className={`
        bg-[#F5F5F5] border-white border-[1.5px] shadow-fancy-two rounded-2xl p-4 flex flex-col gap-2
        ${index === 3 ? "lg:col-span-2 col-start-1/2" : ""}
        ${index === 4 ? "lg:col-start-3" : ""}
      `}
            >
              <div
                className={`bg-[#115B02] rounded-2xl p-3 w-fit shadow-button mb-3`}
              >
                {item.icon}
              </div>

              <h3 className={`text-[rgb(0,33,1)] text-[20px] font-bold`}>
                {item.title}
              </h3>

              <p className={`text-[#636363] text-[14px] leading-[22px]`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
  );
});

CoreValues.displayName = "CoreValues";
