import { forwardRef, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { ProductFeed } from "./ProductFeed.tsx";
import { ProductFish } from "./ProductFish.tsx";
import { motion, AnimatePresence } from "motion/react";

export const Products = forwardRef<HTMLElement>((props, ref) => {
  const [activeTab, setActiveTab] = useState<"feeds" | "fish">("feeds");

  const feeds = [
    {
      sub: "/assets/img/hand-2mm-1.jpg",
      img: "/assets/img/2mm-pr.png",
      title: "45% Protein – 2mm Floating Feed (Fry & Fingerlings)",
      desc: "ACME FEEDS – Super Starter 45% (2mm)",
      features: [
        "Engineered for explosive early growth in fry & fingerlings",
        "45% ultra-premium protein for strong bones, immunity & structure",
        "Micro 2mm pellets for easy intake and zero wastage",
        "Builds the high-performance foundation every farm needs",
      ],
    },
    {
      sub: "/assets/img/hand-3mm.jpg",
      img: "/assets/img/3mm-pr.png",
      title: "42% Protein – 3mm Floating Feed (Advanced Fingerlings)",
      desc: "ACME FEEDS – PowerGrow 42% (3mm)",
      features: [
        "Perfect for fast-developing fingerlings entering growth transition",
        "42% balanced protein for uniform size and strong muscle build",
        "Clean-digest formulation for rapid growth & cleaner ponds",
        "Crafted for farmers targeting premium FCR and survival",
      ],
    },
    {
      sub: "/assets/img/hand-4mm.jpg",
      img: "/assets/img/4mm-pr.png",
      title: "42% Protein – 4mm Floating Feed (Juvenile Stage)",
      desc: "ACME FEEDS – Turbo Juvenile 42% (4mm)",
      features: [
        "Premium grower feed for juvenile catfish in peak growth phase",
        "42% performance protein for accelerated flesh and energy",
        "Excellent floatability for complete pellet utilization",
        "Guarantees consistent growth and strong body structure",
      ],
    },
    {
      sub: "/assets/img/hand-6mm.jpg",
      img: "/assets/img/6mm-pr.png",
      title: "40% Protein – 6mm Floating Feed (Grower / Pre-Finishers)",
      desc: "ACME FEEDS – MegaGrow 40% (6mm)",
      features: [
        "Designed for growers approaching finishing stage",
        "40% efficient protein for economical and steady weight gain",
        "Superior nutrient uptake for top-tier FCR",
        "Builds market-ready body condition with predictable results",
      ],
    },
    {
      sub: "/assets/img/hand-9mm.jpg",
      img: "/assets/img/9mm-pr.png",
      title: "38% Protein – 9mm Floating Feed (Finisher / Adults)",
      desc: "ACME FEEDS – FinalMax 38% (9mm)",
      features: [
        "High-value finisher feed for big-bodied adult catfish",
        "38% protein optimized for lean mass and high energy",
        "Large 9mm pellets for reduced feed loss & heavy finishing weight",
        "Achieve firm flesh, strong health, and optimal market size",
      ],
    },
  ];
  const fishes = [
    {
      title: "African Catfish (Clarias gariepinus)",
      image: "/assets/img/catfish-4.jpg",
      features: [
        "Premium African delicacy with rich, bold flavour and firm flesh",
        "Perfect for pepper-soup, grilling, frying, smoking & oven dishes",
        "High in lean protein, Omega-3 fatty acids & essential minerals",
        "Supports heart health, muscle growth & strong immunity",
        "Farm-raised at Tiffo Farms and powered by ACME FEEDS for superior growth and quality",
      ],
    },
    {
      title: "Pangasius / Basa Fish",
      image: "/assets/img/bang-2.jpg",
      features: [
        "Mild-tasting, tender whitefish with boneless, smooth fillets",
        "Ideal for grilling, steaming, stir-fry & gourmet recipes",
        "Low in calories and fat, rich in premium protein & Omega-3s",
        "Great for health-conscious consumers, kids & family meals",
        "Carefully grown at Tiffo Farms, nourished with ACME FEEDS for clean taste and top-grade flesh",
      ],
    },
    {
      title: "Tilapia (Oreochromis spp.)",
      image: "/assets/img/tilapia-2.png",
      features: [
        "Lightly flavoured fish with firm, delicious white flesh",
        "Versatile for whole grilling, frying, baking & spicy marinades",
        "Packed with lean protein, Vitamin B12, Selenium & essential minerals",
        "Boosts metabolism, energy levels & overall wellness",
        "Raised responsibly at Tiffo Farms, enhanced with ACME FEEDS for healthy, fast-growing fish",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="max-w-[1100px] mx-auto w-full pt-8 pb-16 xl:pb-24 px-5"
    >
      {/* Header */}
      <div className="bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-full w-fit text-[14px] px-1 pr-2 py-0.5 ml-2.5 flex items-center gap-2">
        <ShoppingBag className="subheading-icon" />
        <p className="font-light">Products</p>
      </div>

      <div className="flex flex-col gap-3 py-4 px-3">
        <h2 className="font-bold text-[#2E3B2E] text-[clamp(28px,calc(28px+(38-28)*((100vw-375px)/1065)),38px)]">
          Our Products
        </h2>
        <p className="text-[#636363] leading-[24px] text-[14px] xl:text-[16px] max-w-[500px] w-full">
          We produce high-quality protein floating fish feeds in multiple pellet
          sizes, supporting the cultivation of tilapia, pangasius, and catfish,
          alongside staple farm products such as plantain and finely processed
          cassava flour.
        </p>
      </div>

      {/* Toggle */}
      <div className="bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-full w-fit text-[14px] px-2.5 pr-2 py-1 ml-2.5 flex items-center gap-2">
        <button
          onClick={() => setActiveTab("feeds")}
          className={`font-light cursor-pointer rounded-full p-1 px-3 transition-all ${
            activeTab === "feeds"
              ? "bg-[#003905] text-white border border-white"
              : "text-[#003905]"
          }`}
        >
          Feeds
        </button>

        <button
          onClick={() => setActiveTab("fish")}
          className={`font-light cursor-pointer rounded-full p-1 px-3 transition-all ${
            activeTab === "fish"
              ? "bg-[#003905] text-white border border-white"
              : "text-[#003905]"
          }`}
        >
          Fish
        </button>
      </div>

      {/* Products grid with fade transition */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ willChange: 'transform, opacity' }}
        className="pt-[40px]"
      >
        <AnimatePresence mode="wait">
          {activeTab === "feeds" && (
            <motion.div
              key="feeds"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 w-fit mx-auto items-start place-items-center md:grid-cols-2 2lg:grid-cols-3 gap-6"
            >
              {feeds.map((item, index) => (
                <ProductFeed {...item} key={index} />
              ))}
            </motion.div>
          )}

          {activeTab === "fish" && (
            <motion.div
              key="fish"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 items-start place-items-center md:grid-cols-2 2lg:grid-cols-3 gap-6 w-fit mx-auto"
            >
              {fishes.map((item, index) => (
                <ProductFish {...item} key={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
});

Products.displayName = "Products";
