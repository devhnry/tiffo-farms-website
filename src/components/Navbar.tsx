import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navMenus = ['About', 'Services', 'Values']
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <nav className={`relative`}>
      <div className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy rounded-2xl flex items-center px-4 py-[4px] justify-between max-w-[720px] mx-auto xl:border-none xl:bg-[#F3F3F3] xl:max-w-[1048px] transition fixed top-[16px] left-[16px] right-[16px]`}>
        <div className={`font-bold text-[18px] flex items-center gap-1`}>
          <img src={`/logo-ph.png`} alt={`Logo`} className={`size-[24px] `}/>
          <p>Tiffo</p>
        </div>
        <div className={`hidden md:flex items-center gap-5`}>
          {navMenus.map((item, i) => (
            <a href={'#'} className={`hover:shadow-xl rounded-xl px-[12px] text-center font-medium py-1.5 cursor-pointer transition duration-200 ease-in`}
               key={i}>{item}</a>
          ))}
        </div>
        <button
          className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 text-white font-medium hidden md:block`}>Contact
          Us
        </button>
        
        <div onClick={toggleMenu}
             className={`bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 md:hidden`}>
          {menuOpen ? <X className={`text-white text-[24px]`}/> : <Menu className={`text-white text-[24px]`}/>}
        </div>
      </div>
      {
        menuOpen && (
          <div
            className={`mt-[10px] fixed top-[75px] left-[16px] right-[16px] bg-[#F5F5F5] border-white border-[1px] font-medium shadow-fancy rounded-2xl px-4 py-[14px] flex flex-col gap-5 items-center`}>
            <div className={`w-full flex flex-col items-center gap-1.5`}>
              {navMenus.map((item, i) => (
                <p className={`hover:shadow-xl rounded-xl w-full px-10 text-center font-medium py-3.5 cursor-pointer`}
                   key={i}>{item}</p>
              ))}
            </div>
            <button
              className={`w-full bg-[#2D721A] cursor-pointer rounded-[14px] p-3 shadow-xl shadow-[#2D721A]/40 text-white font-bold`}>Contact
              Us
            </button>
          </div>
        )
      }
    </nav>
  )
}