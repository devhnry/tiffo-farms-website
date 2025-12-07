export const Footer = () => {
  
  const navMenus = ['About', 'Services', 'Values']
  
  return (
    <footer className={`bg-[#F5F5F5] border-white border-[1.5px] shadow-fancy-two rounded-t-2xl p-3 mt-8 max-w-[720px] xl:max-w-[1100px] mx-auto w-full px-20 py-10 flex flex-col gap-8`}>
      
      <div className={`font-bold text-[18px] flex items-center gap-1`}>
        <img src={`/logo-ph.png`} alt={`Logo`} className={`size-[24px] `}/>
        <p>Tiffo</p>
      </div>
      <div className={`flex items-center gap-6`}>
        {navMenus.map((menu) => (
          <p key={menu} className={`text-[#002101] underline font-light cursor-pointer`}>{menu}</p>
        ))}
      </div>
      <div className={`border-[1px] w-full border-[#0D2900]/5`}></div>
      <div className={`text-[#002101] text-[14px] flex justify-between items-center`}>
        <p>&copy; 2025 Tiffo. All rights reserved.</p>
        <p className={`underline cursor-pointer`}>tiffofarms@gmail.com</p>
      </div>
      
    </footer>
  )
}