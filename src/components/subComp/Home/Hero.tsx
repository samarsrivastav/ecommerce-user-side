import { HeroChild } from "../Hero/HeroChild"
import { HeroService } from "../Hero/HeroService"

export const Hero = ({ about }:{about:any}) => {
  return (
    <>
        <div className="hero mb-5 pb-10" id='hero'>
            <div className="bg-[#133e87] text-[#f3f3e0] p-10 justify-center flex">
                <HeroChild about={about}/>
            </div>
            <HeroService/>
        </div>
    </>
  )
}
