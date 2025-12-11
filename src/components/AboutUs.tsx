import { forwardRef } from "react";
import { Leaf } from "lucide-react";
import { Subheading } from "./Subheading.tsx";
import { images } from "../constants";

export const AboutUsPage = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      id={"about"}
      ref={ref}
      className={`pb-16 lg:pb-20 mt-[100px] pt-16`}
    >
      <Subheading
        icon={<Leaf className={`subheading-icon`} />}
        text={"About Tiffo"}
      />

      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-start gap-6 py-[60px] px-6 max-w-[1240px] mx-auto w-full`}
      >
        <div
          className={`text-[18px] text-center md:text-left lg:text-[22px] font-medium flex flex-col gap-4 lg:gap-6 py-[20px] text-[#636363] px-3 max-w-[650px] lg:max-w-[700px] mx-auto w-full transition`}
        >
          <p>
            At{" "}
            <span className={`font-bold text-[#003905]`}>
              Tiffo Farms and Feedmill Limited
            </span>
            , our story began with a simple belief: good farming starts with
            good feed, and good feed starts with care.
          </p>

          <p>
            {" "}
            What began as a modest farm in the heart of Owode-Egba, Obafemi LGA,
            Ogun State, Nigeria in 2022 has grown into a thriving integrated
            agribusiness; combining crop cultivation, livestock, aquaculture,
            and a modern feedmill under one roof.
          </p>

          <p>
            {" "}
            We are more than just a feed producer. We are a partner to farmers,
            a bridge to food security, and a family of passionate growers
            committed to leaving the soil richer, the animals healthier, and the
            people stronger.
          </p>
        </div>
        <div
          className={`relative rounded-2xl overflow-hidden h-full shadow-fancy-two`}
        >
          <img
            className="h-full w-full object-cover"
            src={images.about}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

AboutUsPage.displayName = "AboutUsPage";
