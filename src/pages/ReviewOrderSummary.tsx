import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewOrderSummary = () => {
    const navigate = useNavigate();
    const  {state}  = useLocation();
     const {shippingDetails, priceDetails} = state;

     const { firstname, lastname, address, states, city,  postalcode, country, email, contact } = shippingDetails;
     const { mrp, shippingFee, discount,totalCartPrice} = priceDetails.totalOrderValue;
   
    const cartStoredData = localStorage.getItem("data");
    const orderDetails = cartStoredData? JSON.parse(cartStoredData):[];

    const onClick = ()=>{
        navigate('/payment', {state:{totalCartPrice}})
    }
    
    return (
        <div className=' flex flex-col h-screen'>
            <Navigation />
            <div className='review-order-container mt-28 md:mt-20 grow'>
                <div className=' px-8 py-8 mt-4 mb-16 sm:max-w-[700px] max-w-[500px] mx-auto shadow-lg '>
                    
                    <div className=' shipping-details'>
                     <span className=' font-bold text-lg'>Shipping Address</span>
                     <div className=' text-left my-4'>
                        <span>To</span><br />
                        <span>{firstname}</span>&nbsp;<span>{lastname}</span><br />
                        <span>{address}</span><br/>
                        <span>{city}</span>&#44; &nbsp;<span>{states}</span><br />
                        <span>{country}</span><br />
                        <span>{postalcode}</span>
                     </div>
                    </div>
                    <div className=' flex flex-col sm:flex-row justify-between'>
                    <div className=' order-summary grow my-4'>
                     <span className=' font-bold text-lg'>Order Summary</span>
                     <div className=' my-4 space-y-6'>
                     {orderDetails?.map((order)=>{
                            return(
                               <div className=" flex gap-4" key={order.id}>
                                <div><img src={order.image} alt="" width={50} height={50}/></div>
                                <div className=" flex flex-col gap-[1px] text-sm justify-end">
                                <span>Price: {Math.round(order.price)}</span>
                                <span>Quantity: {order.quantity}</span>
                                </div>
                               </div>
                            )
                           })}
                    </div>
                    </div>
                    <div className=' price-details grow '>
                    <div className=" total-price sm:ml-8 my-4">
                          <div className=' font-bold text-lg pb-4'>Price Details</div>
                           <div className=" flex space-x-2">
                            <span className=" basis-1/2">MRP</span>
                            <span className=" basis-1/2 text-right">&#8377;&nbsp;{mrp}</span>
                           </div>
                           <div className=" flex space-x-2">
                            <span className=" basis-1/2">Discount</span>
                            <span className=" basis-1/2 text-right">&#8377;&nbsp;{discount}</span>
                           </div>
                           <div className=" flex space-x-2">
                            <span className=" basis-1/2">Shipping fee</span>&nbsp;
                            <span className=" basis-1/2 text-right">&#8377;&nbsp;{shippingFee}</span>
                           </div>
                           <div className=' w-full border-[1px] my-4'/>
                           <div className=" flex font-bold space-x-2">
                            <span className=" basis-1/2">Total order value</span>&nbsp;
                            <span className=" basis-1/2 text-right">&#8377;&nbsp;{totalCartPrice}</span>
                           </div>

                        </div>
                    <div className=' sm:max-w-none sm:ml-8 max-w-56 mx-auto mt-8 mb-4 px-5 py-2 bg-orange-600 text-white cursor-pointer rounded-md text-center ' onClick={onClick}><button>Proceed</button></div>

                    </div>
                    </div>
                    </div>
             
            </div>
            <Footer />
        </div>
    )
}

export default ReviewOrderSummary