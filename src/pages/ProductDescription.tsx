import { useLocation, useSearchParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { StarFilled, StarHalfFilled, StarUnfilled } from "../components/Icons";
import { useState } from "react";

const ProductDescription = () => {

  let { state, search } = useLocation();
  let { id, title, description, image, price, rating } = state;

  const cartStoredData = localStorage.getItem("data")
  const [cartData,setCartData] =  useState(cartStoredData != null ? JSON.parse(cartStoredData) : []);
 

  const [totalCartItems, setTotalCartItems] = useState(cartData.reduce((acc, curr)=>
     acc+curr.quantity
  ,0))
  // const brand = 'Adidas';
  const [params] = useSearchParams();
  const gender = params.get("gender");
  const category = params.get("category")
  const brand = params.get("brand")
  const expectedRating = 5
  const actualRating = rating.rate
  const ratingCount = rating.count

  function addtoCart() {
    let data = cartData;
    const dataExistsIndex = cartData.findIndex((ele)=>ele.id===id)
    
    if(dataExistsIndex>=0){
      // state = { ...state, quantity: data[dataExistsIndex].quantity+1, basePrice: Math.round(price) }
      // cartData[dataExistsIndex] = {...cartData[dataExistsIndex], quantity: cartData[dataExistsIndex].quantity+1, basePrice:cartData[dataExistsIndex].basePrice+Math.round(price)}
      data[dataExistsIndex] = {...cartData[dataExistsIndex], quantity: cartData[dataExistsIndex].quantity+1, basePrice:cartData[dataExistsIndex].basePrice+Math.round(price)}
      
    }
    else{
      state = { ...state, quantity:1, basePrice: Math.round(price) }
      data = [...cartData, state]

    }
    setCartData(data)
    setTotalCartItems((prev)=>prev+1)
    localStorage.setItem("data", JSON.stringify(data));
  }

  function ratingStar(expectedRating: number) {

    const ratingArray = Array(expectedRating).fill(1).map((index) => {
      return index;
    })

    return (
      <div className=" flex ">{
        ratingArray.map((value, index) => {
          if ((actualRating - index) > 1) {
            return (
              <div className=" w-4 h-4" key={index}>
                <StarFilled />
              </div>
            )
          }
          else if ((actualRating - index) > 0) {
            return (
              <div className=" w-4 h-4" key={index}>
                <StarHalfFilled />
              </div>
            )
          }
          else {
            return (

              <div className=" w-4 h-4" key={index}>
                <StarUnfilled />
              </div>
            )
          }
        })

      }</div>


    )
  }

  
  return (
    <div className=" flex flex-col h-screen ">
      <Navigation  totalCartItems={totalCartItems}/>
      <div className=" mt-28 md:mt-16 flex-grow ">
        <div className=" space-x-2 px-4 py-2 shadow-md border-slate-100 border-[2px] rounded-md">
          <span className=" font-semibold text-lg">Products</span>

          {gender && <>
            <span>&gt;</span>
            <span className=" font-semibold text-lg">{gender}</span>
          </>}
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
        <div className=" product-container md:grid-cols-2 md:grid justify-center mx-4 my-4">
          <div className="my-8"> <img src={image} alt="" className=" justify-self-center h-72 w-72 m-auto object-contain" /></div>
          <div className=" product-information px-2 py-2">
            <div className=" my-1 text-lg">{title}</div>
            <div className=" flex flex-wrap items-center gap-2 my-1">
              <div className="">
                {ratingStar(expectedRating)}
              </div>
              <div> <span>{actualRating}</span> <span>({ratingCount})</span>
              </div>
            </div>
            

            <div className=" price space-x-2">
                                                <span className=" text-lg font-semibold"> &#8377;{`${Math.round(price)}`}</span>
                                            </div>

            <div className=" product-description my-2">{description}</div>
            <div className=" my-5 flex flex-col sm:flex-row ">
              <button className=" px-4 py-2 border-2 rounded-md font-bold my-1 mx-1" onClick={addtoCart}>Add to cart</button>
              <button className=" px-4 py-2 border-2 rounded-md font-bold my-1 mx-1">Wishlist</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ProductDescription