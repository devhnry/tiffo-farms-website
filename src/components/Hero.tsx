export const HeroArea = () => {
  
  return (
    <section className={`py-16 mt-[80px] xl:py-20 xl:min-h-full xl:h-[calc(100vh-80px)]`}>
      <div className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-2xl w-fit text-[14px] px-2 py-0.5 mx-auto`}>
        <p>🌿 Tiffo Farms and Feedmill Limited</p>
      </div>
      <div>
        <h1 className={`text-[#000500] text-[clamp(32px,calc(32px+(70-32)*((100vw-375px)/1065)),70px)] tracking-[0.5px] font-bold leading-[clamp(40px,calc(40px+(78-40)*((100vw-375px)/1065)),78px)] text-center py-4 xl:py-6`}>
          Nourishing Livestock, <br />
          Empowering Farmers
        </h1>
        <p className={`text-[#636363] leading-[24px] text-center text-[14px] xl:text-[16px] max-w-[343px] xl:max-w-[450px] w-full mx-auto`}>Integrated farm and feed-mill, producing nutritious feeds, healthy livestock, and sustainable harvests. With quality at our core and farmers at heart.</p>
      </div>
      <div className={`flex gap-4 items-center w-fit mx-auto py-6 xl:py-8`}>
        <button className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 text-white font-bold shadow-button px-6`}>Contact Us</button>
        <button className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium rounded-[14px] py-2.5 shadow-soft px-6`}>Learn More</button>
      </div>
    </section>
  )
}