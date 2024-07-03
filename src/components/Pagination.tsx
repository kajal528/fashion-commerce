
import { ArrowLeft, ArrowRight} from "../components/Icons";
import { usePagination } from "../hooks/usePagination";

const Pagination = (props: any) => {
    const { lastIndex, currentPageIndex, setCurrentPageIndex, pageCount } = props;

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
    const paginationRange = usePagination(pageCount, currentPageIndex, lastIndex);
     
    return (
        <div className=" pagination my-4 flex justify-center gap-5">
            <button className={` border-2 rounded-full w-10 h-10 py-2 px-2 border-gray-500 disabled:border-inherit`}
             onClick={handleArrowLeftClick}
             disabled={currentPageIndex<=1}
            >
                <ArrowLeft size={5} />
            </button>

            <ul className=" flex gap-5 justify-center">
                {paginationRange?.map((x, index) => {
                    if(x==="DOTS"){
                        return <span className=" self-end" key={index}>....</span>
                    }
                    return (
                        <li key={index} className={` border-2 rounded-full w-10 h-10 text-center py-1 cursor-pointer border-gray-500 ${currentPageIndex===x?'bg-gray-300':""}`} onClick={()=>setCurrentPageIndex(x)}>
                            {x}
                        </li>
                    )
                })}
            </ul>

            <button className=" border-2 rounded-full w-10 h-10 py-2 px-2  border-gray-500 disabled:border-inherit"
             onClick={handleArrowRightClick}
             disabled={!(currentPageIndex<lastIndex)}
            >
                <ArrowRight size={5} />
            </button>
        </div>
    )
}

export default Pagination