interface Props {
  image: string,
  title: string,
  features: string[]
}

export const ProductFish = ({ title, features, image}: Props) => {
  
  return (
    <div className={`max-w-[400px] w-full bg-[#F5F5F5] border-white border-[2px] shadow-fancy-two rounded-[16px] overflow-hidden h-full flex-1`}>
      
      <div className={`relative pb-4 size-[250px] w-full`}>
        {/*<img className={`absolute z-20 rounded-full top-4 right-4 shadow-fancy-two border-white border-[0.5px] size-[100px] object-cover `} src={`${sub}`} alt={''} />*/}
        
        <div className="pointer-events-none absolute bottom-0 z-10 left-0 w-full inset-0 bg-gradient-to-t from-[#F3F3F3]/20 via-[#F3F3F3]/10 to-transparent" />
        
        
        <img className={`object-cover absolute inset-0 w-full h-[250px]`} src={image} alt={''} />
      </div>
      
      <div className={`p-4 text-[14px] font-medium`}>
        {/*<p className={`text-[#636363]`}>{title}</p>*/}
        <h4 className={`text-[#000500] text-[18px] font-bold`}>{title}</h4>
        <ul className={`flex flex-col gap-[3px] list-disc ml-4 text-[#636363] pt-3`}>
          
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}