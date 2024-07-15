import { brand } from "../data/brand";
import ImageCarousel from "./ImageCarousel";

const ProductSection = (props: {category: string}) => {
    return (
            <section className=' mx-2 my-4'>
                <h3 className=" font-bold tracking-widest">Shop by {props.category}</h3>
                <ImageCarousel productData={brand.brand} filter={props.category}/>
            </section>
    )
}

export default ProductSection;