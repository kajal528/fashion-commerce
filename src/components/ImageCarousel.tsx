import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icons"
import { categoryInterface } from "../types";

const ImageCarousel = (props: { productData: categoryInterface[] }) => {
    const imageWidth = 11;
    const { productData } = props;
    const [productIndex, setProductIndex] = useState(0);
    const [imageCarouselItems, setImageCarouselItems] = useState(Math.floor(window.innerWidth / (imageWidth * 16)));
  
    useEffect(() => {
        setProductIndex(0);
        setImageCarouselItems(Math.round(window.innerWidth / (imageWidth * 16)))
    }, [productData])
   
    const handleLeftClick = () => {
        setImageCarouselItems(prev => prev-1);
        setProductIndex((prev) => prev === 0 ? prev : prev - 1);
    }
    const handleRightClick = () => {
        setImageCarouselItems(prev => prev+1);
        setProductIndex((prev) => prev < productData.length - 1 ? prev + 1 : prev = 0);
    }

    return (
        <div className="image-slider h-60 w-full relative flex overflow-hidden" id="image-slider">
            <div className={`slideitem py-4 px-2 flex items-center gap-x-4 transition duration-200 ease-in-out`} style={{
                transform: `translate(${productIndex * -12}rem)`
            }}>
                {productData.map((data, index) => {
                    return (
                        <a href="#" key={data.categoryId}>
                            <div className={`w-${imageWidth*4} shrink-0 border-2 shadow-md border-transparent aria-hidden:${index<productIndex?'true':'false'}`} >
                                <img src={data.categoryImg} alt="image" className="h-40 w-full" />
                                <p className="text-center py-2">{data.categoryName}</p>
                            </div>
                        </a>

                    )
                })}
            </div>
            {productIndex > 0 &&
                <button className=" absolute left-0 top-1/2 -translate-y-1/2 py-2 px-2 border-[1px] rounded-full shadow-sm bg-slate-100 "
                    onClick={handleLeftClick}>
                    <ArrowLeft />
                </button>}
            {imageCarouselItems<productData.length ?
                <button className=" absolute right-0 top-1/2 -translate-y-1/2 py-2 px-2 border-[1px] rounded-full shadow-sm bg-slate-100 "
                    onClick={handleRightClick} >
                    <ArrowRight />
                </button>:""
            }
        </div>
    )
}

export default ImageCarousel