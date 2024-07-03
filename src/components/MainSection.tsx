import ProductSection from "./ProductSection"
import SuggestedProducts from "./SuggestedProducts"

const MainSection = () => {
  return (
    <div className="mb-10">
    <SuggestedProducts/>
    <ProductSection category='Brand'/>
    </div>
  )
}

export default MainSection