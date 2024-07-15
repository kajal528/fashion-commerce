import { Link, useLocation, useParams, useSearchParams } from "react-router-dom"
import Navigation from '../components/Navigation'
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { getProductsList, result } from '../apis/apis.ts';
import Pagination from "../components/Pagination.tsx";

interface ProductsInterface {

    category: string;

    description: string;

    id: number;

    image: string;

    price: number;

    rating: RatingInterface;

    title: string;
}

interface RatingInterface {
    rate: number;
    count: number;
}

const ProductPage = () => {
    const {search} = useLocation();
    const [params] = useSearchParams();
    const gender = params.get("gender");
    const category = params.get("category")
    const brand = params.get("brand")

    const [product, setProduct] = useState<ProductsInterface[]>([]);
    const [currentProduct, setCurrentProduct] = useState<ProductsInterface[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const productPerPage = 12;
    const lastPage = Math.ceil(product.length / productPerPage);
    const pageCount = 5;

    useEffect(() => {
        getProducts();
        // getProductsDuplicate()
    }, [])

    useEffect(() => {
        currentPageProducts(product, currentPageIndex);
    }, [currentPageIndex])

    const currentPageProducts = (results: ProductsInterface[], currentPage: number) => {
        let firstIndex = (currentPage - 1) * productPerPage;
        let lastIndex = firstIndex + productPerPage;
        setCurrentProduct(results.slice(firstIndex, lastIndex))
    }

    const getProducts = async () => {
        let results: ProductsInterface[] = await result();
        setProduct(results);
        currentPageProducts(results, currentPageIndex);
    }
    // const getProductsDuplicate = async () => {
    //     let results = await getProductsList(search)
    // }
   

    return (
        <div className="flex flex-col h-screen" >
            <Navigation />
            <div className=" mt-28 md:mt-16 flex-grow">
                <div className=" mt-1 mb-8">
                <div className=" mx-1 mt-1">
                    <div className=" space-x-2 px-4 py-2 shadow-md border-slate-100 border-[2px] rounded-md">
                    <span className=" font-semibold text-lg">Products</span>
                    
                   {gender && <>
                    <span>&gt;</span>
                   <span className=" font-semibold text-lg">{gender}</span>
                    </> }
                    {category &&
                    <>
                    <span>&gt;</span>
                    <span className=" font-semibold text-lg">{category}</span>
                    </>
                    }
                    {brand &&
                    <>
                    <span>&gt;</span>
                    <span className=" font-semibold text-lg">{brand}</span>
                    </>
                    }
                    </div>
                    <div className=" products-container mx-8 mt-4 mb-8 pt-4 " style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                        gap: "50px",
                        justifyContent: "space-between"
                    }}>
                        {currentProduct.map((data) => {
                            return (
                                 <Link to={`/products/product${search?`${search}&${data.title}`:`?${data.title}`}`} state={data} key={data.id}>
                                    <div className="items flex flex-col justify-center gap-4 h-full">
                                        <img src={data.image} alt="" height='150' width='150'  className="  m-auto" />
                                        <div className=" ">
                                            <div className=" product-name truncate">
                                                {data.title}
                                            </div>
                                            <div className=" price space-x-2">
                                                <span> &#8377;{`${Math.round(data.price)}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                            )
                        })}
                    </div>
                    </div>
                    <Pagination
                        productPerPage={productPerPage}
                        totalProducts={product.length}
                        lastIndex={lastPage}
                        currentPageIndex={currentPageIndex}
                        setCurrentPageIndex={(index: number) => setCurrentPageIndex(index)}
                        pageCount={pageCount}
                    />
                </div>
            </div>
                <Footer />

        </div>

    )
}
export default ProductPage