import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { womenCategory } from "../data/womenCategory"
import { menCategory } from "../data/menCategory"

const SuggestedProducts = (props:{category:string}) => {

  const [activeMenButton, setActiveMenButton] = useState(true);

  return (
    <section className='men-women-section mt-5 mx-2'>
      <h3 className=" font-bold text-center tracking-wider">Shop for</h3>
      <div className="my-1 flex justify-center">
        <button className={`px-5 py-2 w-36 font-bold transition ease-in duration-300 hover:text-black ${activeMenButton ? ' border-b-2 border-b-black text-black z-10' : "text-gray-600"}`}
          onClick={() => setActiveMenButton(true)}>
          Men
        </button>
        <button className={`px-5 py-2 w-36 font-bold transition ease-in duration-300 hover:text-black ${!activeMenButton ? 'border-b-2 border-b-black text-black z-10' : "text-gray-600"}`}
          onClick={() => setActiveMenButton(false)}>
          Women
        </button>
      </div>
      <div className=" slider w-full h-[1px] bg-gray-400 -translate-y-[5px]"></div>
      <ImageCarousel productData={activeMenButton?menCategory.menCategory:womenCategory.womenCategory} query={`gender=${activeMenButton?"Men":"Women"}`} filter={props.category}/>
    </section>
  )
}

export default SuggestedProducts