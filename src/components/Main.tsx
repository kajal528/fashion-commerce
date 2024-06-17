import ProductSection from "./ProductSection"
import SuggestedProducts from "./SuggestedProducts"

const Main = () => {
  return (
    <div className="mb-10">
    <SuggestedProducts/>
    <ProductSection category='Brand'/>
    </div>
   
  )
}

export default Main