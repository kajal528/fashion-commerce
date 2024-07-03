import { useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const ProductDescription = () => {

  let {state} = useLocation();
  let {title, description, image, price} = state;
  const brand = 'Adidas';

  function addtoCart(){
      const cartData = localStorage.getItem("data")
      let data = cartData!=null?JSON.parse(cartData):[];
      state = {...state, quantity:1, basePrice: Math.round(price)}
      data = [...data, state]
      localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <>
    <Navigation/>
    <div className=" flex flex-col h-screen">
      <div className=" product-container md:grid-cols-2 md:grid justify-center mx-4 mt-32 md:mt-20 flex-grow">
          <img src={image} alt="" className=" justify-self-center h-72 w-72 m-auto"/>
        <div className=" product-information px-2 py-2">
          <div className=" text-xl font-bold">{brand}</div>
          <div>{title}</div>
          <div>Rating</div>
          <div className=" text-lg font-semibold">&#8377; {Math.round(price)}</div>
          <div className=" product-description">{description}</div>
          <div className=" my-5 flex flex-col sm:flex-row ">
            <button className=" px-4 py-2 border-2 rounded-md font-bold my-1 mx-1" onClick={addtoCart}>Add to cart</button>
            <button className=" px-4 py-2 border-2 rounded-md font-bold my-1 mx-1">Wishlist</button>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default ProductDescription