import type { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode,
  text: string,
}

export const Subheading: FC<Props> = ({ icon, text }) => {
  return (
    <div className={`bg-[#F5F5F5] border-white border-[1.5px] font-medium shadow-fancy-two rounded-full w-fit text-[14px] px-1 pr-2 py-0.5 mx-auto flex items-center gap-2`}>
      {icon}
      <p className={`font-light`}>{text}</p>
    </div>
  )
}