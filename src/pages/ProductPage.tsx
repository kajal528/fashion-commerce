import { Link } from "react-router-dom"
import Navigation from '../components/Navigation'
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { result } from '../apis/apis.ts';
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
    const [product, setProduct] = useState<ProductsInterface[]>([]);
    const [currentProduct, setCurrentProduct] = useState<ProductsInterface[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const productPerPage = 12;
    const lastPage = Math.ceil(product.length / productPerPage);

    useEffect(() => {
        getProducts();
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

    return (
        <>
            <Navigation />
            <div className=" mt-28 md:mt-16 flex flex-col h-screen">
                <div className="flex-grow mx-2">
                    <div className=" products-container mx-4 mt-4 mb-8 pt-8 " style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                        gap: "50px",
                        justifyContent: "space-between"
                    }}>
                        {currentProduct.map((data) => {
                            return (
                                 <Link to={`/product/${data.title}`} state={data} key={data.id}>
                                    <div className="items flex flex-col justify-center gap-4 h-full">
                                        <img src={data.image} alt="" height='150' width='150'  className="  m-auto" />
                                        <div className=" ">
                                            <div className=" product-name truncate">
                                                {data.title}
                                            </div>
                                            <div className=" price">
                                                {`Rs. ${Math.round(data.price)}`}
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                            )
                        })}
                    </div>
                    <Pagination
                        productPerPage={productPerPage}
                        totalProducts={product.length}
                        lastIndex={lastPage}
                        currentPageIndex={currentPageIndex}
                        setCurrentPageIndex={(index: number) => setCurrentPageIndex(index)}
                        pageCount={5}
                    />
                </div>
                <Footer />
            </div>

        </>

    )
}
export default ProductPage