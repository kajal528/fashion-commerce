import ProductSection from "./ProductSection"
import SuggestedProducts from "./SuggestedProducts"

const MainSection = () => {
  return (
    <div className="mb-10">
    <SuggestedProducts category='category'/>
    <ProductSection category='brand'/>
    </div>
  )
}

export default MainSection