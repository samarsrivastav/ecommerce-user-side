import img from '/drill.png'
export const HeroChild = () => {
  return (
    <div className="bg-[#CBDCEB] text-[#608BC1] w-[80%] h-[80%] rounded-md p-5 grid md:grid-cols-2 grid-cols-1 shadow-2xl">
        <div className="font-medium text-[2rem] text-center mt-[10%] text-black flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit!
        </div>
        <div className="img items-end flex justify-center drop-shadow-custom ">
            <img src={img} alt="" className='h-60 '/>
        </div>
    </div>
  )
}
