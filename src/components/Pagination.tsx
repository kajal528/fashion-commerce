
import { useState } from "react";
import { ArrowLeft, ArrowRight} from "../components/Icons";
import { usePagination } from "../hooks/usePagination";

const Pagination = (props: any) => {
    const { lastIndex, currentPageIndex, setCurrentPageIndex, pageCount } = props;

    let paginationRange=[]
    function handleArrowLeftClick() {
        if(currentPageIndex>0){
            setCurrentPageIndex((prev: number) => prev - 1);
        }
    }
    function handleArrowRightClick() {
        if(currentPageIndex<lastIndex){
            setCurrentPageIndex((prev: number) => prev + 1);
        }
    }
    paginationRange = usePagination(pageCount, currentPageIndex, lastIndex);
     
    return (
        <div className=" pagination mt-16 mb-8 flex justify-center gap-2 sm:gap-4">
          {!(lastIndex<pageCount) &&  <button className={` border-[1px] rounded-full w-10 h-10 py-2 px-2 border-black disabled:border-inherit`}
             onClick={handleArrowLeftClick}
             disabled={currentPageIndex<=1}
            >
               {currentPageIndex<=1? <ArrowLeft size={5} color="rgb(224,224,224)"/>:<ArrowLeft size={5} />} 
            </button>
}
            <ul className=" flex gap-2 sm:gap-4 justify-center">
                {paginationRange?.map((x, index) => {
                    if(x==="DOTS"){
                        return <span className=" self-end" key={index}>....</span>
                    }
                    return (
                        <li key={index} className={` flex justify-center items-center border-[1px] rounded-full w-10 h-10 cursor-pointer border-black ${currentPageIndex===x?' shadow-lg border-none bg-orange-600 font-bold text-white':""}`} onClick={()=>setCurrentPageIndex(x)}>
                            <div className=" ">{x}</div>
                        </li>
                    )
                })}
            </ul>


            { !(lastIndex<pageCount) && <button className=" border-2 rounded-full w-10 h-10 py-2 px-2 border-black disabled:border-inherit"
             onClick={handleArrowRightClick}
             disabled={!(currentPageIndex<lastIndex)}
            >
                {!(currentPageIndex<lastIndex) ? <ArrowRight size={5} color="rgb(224,224,224)"/>:<ArrowRight size={5} />} 
            </button>
}
        </div>
    )
}

export default Pagination