export const DOTS = "DOTS";
export const usePagination = (pageCount: number, currentPageIndex: number, lastPageIndex: number) => {
     const firstPageIndex = 1;
   

    if(lastPageIndex<=pageCount){
        const paginationRange = Array.from({length:lastPageIndex},(_v,i)=> i+1);
        return paginationRange;
    }

    if(pageCount-currentPageIndex>0){
        const paginationRange = Array.from({length:pageCount},(_v,i)=> i+1);
        return [...paginationRange, DOTS, lastPageIndex];
    }

    if(pageCount-currentPageIndex<=0 && lastPageIndex-currentPageIndex>=pageCount){
        return [firstPageIndex, DOTS,currentPageIndex-1,currentPageIndex, currentPageIndex+1,DOTS, lastPageIndex];
    }

    if(pageCount-currentPageIndex<=0 && lastPageIndex-currentPageIndex<pageCount){
        const paginationRange = Array.from({length:pageCount},(_v,i)=> lastPageIndex-pageCount+i+1);
        return [firstPageIndex, DOTS, ...paginationRange]
    }
}

