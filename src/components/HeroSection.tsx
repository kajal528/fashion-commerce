import { useState } from "react"
import { boysOvercoat, girlClothing, handBag, sneaker } from "./images";

const HeroSection = () => {
    const [slide, setSlide] = useState<number>(0);
    const img1 = boysOvercoat
    const img2 = girlClothing
    const img3 = handBag
    const img4 = sneaker

    return (
            <div className=" hero-container flex relative h-80 mt-32 ">
              {slide===0 &&
               <div className={` hero-item w-full overflow-hidden `}>
                    <img src={img1} alt={"image-1"} className="w-full h-full object-cover object-center transition ease-in-out duration-200  hover:scale-105"/>
                </div>
               } 
              {slide===1 &&
               <div className={` hero-item w-full overflow-hidden`}>
                    <img src={img2} alt={'imgage2'} className="w-full h-full object-cover object-center transition ease-in-out duration-200 hover:scale-105"/>
                </div>
               } 
              {slide===2 &&
               <div className={` hero-item w-full overflow-hidden`}>
                    <img src={img3} alt={'image-3'} className="w-full h-full object-cover object-center transition ease-in-out duration-200 hover:scale-105"/>
                </div>
               } 
              {slide===3 &&
               <div className={` hero-item w-full overflow-hidden`}>
                    <img src={img4} alt={'image-4'} className="w-full h-full object-cover object-center transition ease-in-out duration-200 hover:scale-105"/>
                </div>
               } 
            
                <div className=" hero-item slide absolute bottom-0 space-x-2 -translate-x-1/2 left-1/2">
                    <button className={`slide-1  w-3 h-3 rounded-full  ${slide === 0 ? 'bg-gray-700' : 'bg-gray-500'}`}
                        onClick={() => setSlide(0)} />
                    <button className={`slide-2  w-3 h-3 rounded-full ${slide === 1 ? 'bg-gray-700' : 'bg-gray-500'}`}
                        onClick={() => setSlide(1)} />
                    <button className={`slide-3  w-3 h-3 rounded-full ${slide === 2 ? 'bg-gray-700' : 'bg-gray-500'}`}
                        onClick={() => setSlide(2)} />
                    <button className={`slide-4  w-3 h-3 rounded-full ${slide === 3 ? 'bg-gray-700' : 'bg-gray-500'}`}
                        onClick={() => setSlide(3)} />
                </div>
            <div className=" absolute border-2 border-orange-300 text-orange-700 bg-white tracking-wide px-3 py-2 rounded-lg font-bold bottom-8 right-8">
                <button>Explore</button>
            </div>
            </div>
    )
}

export default HeroSection