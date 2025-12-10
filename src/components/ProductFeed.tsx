interface Props {
  sub: string,
  img: string,
  title: string,
  desc: string,
  features: string[]
}

export const ProductFeed = ({ title, desc, features, sub, img}: Props) => {
  
  return (
    <div className={`max-w-[400px] w-full bg-[#F5F5F5] border-white border-[2px] shadow-fancy-two rounded-[16px] overflow-hidden`}>
      
      <div className={`relative`}>
        <img className={`absolute z-20 rounded-full top-4 right-4 shadow-fancy-two border-white border-[0.5px] size-[100px] object-cover `} src={`${sub}`} alt={''} />
        
        <img className={`object-cover scale-105 mx-auto pt-6 size-[250px]`} src={img} alt={''} />
      </div>
      
      <div className={`p-4 mt-3 text-[14px] font-medium`}>
        <p className={`text-[#636363]`}>{title}</p>
        <h4 className={`text-[#000500] text-[18px] font-bold`}>{desc}</h4>
        <ul className={`flex flex-col gap-[3px] list-disc ml-4 text-[#636363] pt-3`}>
          
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}