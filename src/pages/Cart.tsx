import { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer";
import { CloseButton } from "../components/Icons";

const Cart = () => {
    const cartStoredData = localStorage.getItem("data");
    const [cartData, setCartData] = useState(cartStoredData != null ? JSON.parse(cartStoredData) : []);
    const [totalCartPrice, setTotalCartPrice] = useState(()=>{
       return cartData.reduce((acc, curr)=>acc+curr.basePrice,0)
    });
    const maxQuantity = 6;
    const minQuantity = 1;

    function onIncrement(index: number) {
        let data = cartData[index]
        if (data.quantity < maxQuantity) {
            const updatedCartItem = { ...data, basePrice: (data.basePrice + Math.round(data.price)), quantity: data.quantity + 1 }
            cartData[index] = updatedCartItem;
            setCartData([...cartData]);
            localStorage.removeItem("data");
            localStorage.setItem("data", JSON.stringify(cartData));
            setTotalCartPrice((prev)=>prev-data.basePrice+updatedCartItem.basePrice)
        }
    }

    function onDecrement(index: number) {
        let data = cartData[index]
        if (data.quantity > minQuantity) {
            const updatedCartItem = { ...data, basePrice: data.basePrice - Math.round(data.price), quantity: data.quantity - 1 }
            cartData[index] = updatedCartItem;
            setCartData([...cartData]);
            localStorage.removeItem("data");
            localStorage.setItem("data", JSON.stringify(cartData))
            setTotalCartPrice((prev)=>prev-data.basePrice+updatedCartItem.basePrice)
        }
    }

    function removeItem(index: number) {
        const basePriceOfItem = cartData[index].basePrice;
        console.log(basePriceOfItem);
        setTotalCartPrice((prev)=>prev-basePriceOfItem)
        cartData.splice(index, 1)
        setCartData([...cartData]);
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(cartData));
    }

    return (
        <>
            <Navigation />
            <div className=" mt-32 md:mt-20 flex flex-col  h-screen">
                <div className=" grid md:grid-cols-[2fr_1fr] grow ">
                    <div className=" shopping-cart mx-4 sm:mx-8 md:my-8 my-2 shadow-md sm:px-4 h-max ">
                        <h1 className=" font-bold text-lg">Shopping Cart</h1>
                        <div className="mx-4 my-4 ">
                            {cartData.length > 0 ? cartData.map((data: any, index: number) => {
                                return (
                                    <div key={index} className="cart-products flex gap-2 pt-8 pb-4 border-t-2 min-h-40 relative">
                                        <div className=" absolute right-0 top-1 border-2 rounded-full p-[2px] cursor-pointer hover:bg-gray-100" onClick={() => removeItem(index)} ><CloseButton size={4} /></div>
                                        <div className=" shrink-0 w-25 h-25 self-center"><img src={data.image} alt="" height='100px' width='100px' className="object-contain" /></div>
                                        <div className=" grow flex flex-col gap-2 lg:flex-row lg:gap-4 lg:justify-between ml-2 mr-10">
                                            <span className=" lg:basis-1/2">{data.title}</span>
                                            <div className="quantity space-x-2 lg:basis-3/12 lg:text-center">
                                                <button className=" border-[1px] px-1 " onClick={() => onDecrement(index)}>-</button>
                                                <span>{data.quantity}</span>
                                                <button className=" border-[1px] px-1 " onClick={() => onIncrement(index)}>+</button>
                                            </div>
                                            <div className=" lg:basis-3/12 lg:text-center">&#8377; {data.basePrice}</div>
                                        </div>
                                    </div>
                                )
                            }) : <span>No product present in the cart.</span>}
                        </div>
                    </div>
                    <div className=" cart-value shadow-md h-max my-8">
                        <div className="mx-4 my-4">
                            <h1 className=" text-lg font-bold">Total cart value</h1>
                            <div className=" mt-8 mx-8 space-y-2">
                                <div className=" flex justify-between">
                                    <span>MRP</span>
                                    <span>&#8377; {totalCartPrice}</span>
                                </div>
                                <div className=" flex justify-between">
                                    <span>Discount</span>
                                    <span>&#8377; 0</span>
                                </div>
                                <div className=" border-[1px]" />
                                <div className=" flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>&#8377; {totalCartPrice}</span>
                                </div>
                            </div>
                            <div className=" px-2 py-3 border-2 text-center mt-8 mb-4 font-bold bg-orange-600 text-white cursor-pointer"><button >Place order</button></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Cart