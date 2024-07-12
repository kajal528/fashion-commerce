import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Select from 'react-select'
import { useLocation, useNavigate } from "react-router-dom";

const Shipping = () => {
    let  {state}  = useLocation();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [shippingDetails, setShippingDetails] = useState({});
   
    
    const navigate = useNavigate();
    useEffect(() => {
        getCountries();
    }, [])
    const getCountries = async () => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        const result = await response.json();
        setCountries(result.data.map((country) => {
            return { value: country.name, label: country.name }
        }));
    }
    const getStates = async (country) => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: "POST",
            body: JSON.stringify({ country: country }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        setStates(result.data.states.map((state) => {
            return { value: state.name, label: state.name }
        }));
    }

    function onSave(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        navigate('/review-order', { state: {shippingDetails, priceDetails:state}})
    }

    function inputHandle(event: ChangeEvent<HTMLInputElement>): void {
        setShippingDetails({ ...shippingDetails, [event.target.name]: event.target.value })
    }

    function onCountryChange(event) {
        setSelectedCountry(event.value);
        getStates(event.value);
        setShippingDetails({ ...shippingDetails, country: event.value })
    }
    function onStateChange(event) {
        setSelectedState(event.value);
        setShippingDetails({ ...shippingDetails, states: event.value })
    }

    return (
        <div className=" flex flex-col h-screen">
            <Navigation />
            <div className="shipping-container mt-28 md:mt-16 grow">
                <div className="my-4 mx-4">
                    <div className=" shipping-info px-4 py-4 shadow-md h-full">
                        <span className=" font-bold text-lg">Shipping Information</span>
                        <form className=" mt-4 mb-4 relative h-full " onSubmit={onSave}>
                            <div className=" flex flex-wrap gap-x-10 gap-y-5 mb-20 mt-8">
                            <div className="firstname flex flex-col gap-[1px]">
                                <label htmlFor="firstname" className=" px-1 font-semibold">First Name</label>
                                <input type="text" name="firstname" id="firstname"
                                    placeholder="First Name" className=" border-[1px] rounded-md px-2 py-[2px] h-10"
                                    onChange={inputHandle}
                                />
                            </div>
                            <div className="lastname flex flex-col gap-[1px]">
                                <label htmlFor="lastname" className=" px-1 font-semibold">Last Name</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Last Name" className=" border-[1px] rounded-md px-2 py-[2px] h-10" onChange={inputHandle} />
                            </div>
                            <div className="contact flex flex-col gap-[1px]">
                                <label htmlFor="contact" className=" px-1 font-semibold">Contact Number</label>
                                <input type="tel" name="contact" id="contact" placeholder="Contact Number" className=" border-[1px] rounded-md px-2 py-[2px] h-10" onChange={inputHandle}  />
                            </div>
                            <div className="email flex flex-col gap-[1px] basis-2/5 ">
                                <label htmlFor="email" className=" px-1 font-semibold">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className=" border-[1px] rounded-md px-2 py-[2px] h-10 " onChange={inputHandle}  />
                            </div>
                            <div className="address flex flex-col gap-[1px] basis-2/5 ">
                                <label htmlFor="address" className=" px-1 font-semibold">Address</label>
                                <input type="address" name="address" id="address" placeholder="Address" className=" border-[1px] rounded-md px-2 py-[2px] h-10 " onChange={inputHandle} />
                            </div>
                            <div className="country flex flex-col gap-[1px]">
                                <label htmlFor="country" className=" px-1 font-semibold">Country</label>
                                <Select 
                                      defaultValue={selectedCountry}
                                       onChange={(event)=>{
                                        if(event){
                                            onCountryChange(event)}
                                            else{
                                                setStates([])
                                                setSelectedState(null)
                                                setSelectedCountry(null)
                                            }
                                       }} 
                                       options={countries} placeholder="Select country"
                                        isSearchable={true}
                                         name="country"
                                        className=" w-56"
                                        isClearable={true}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                            </div>
                            <div className="city flex flex-col gap-[1px]">
                                <label htmlFor="city" className=" px-1 font-semibold">City</label>
                                <input type="city" name="city" id="city" placeholder="City" className=" border-[1px] rounded-md px-2 py-[2px] h-10 " onChange={inputHandle}  />
                            </div>
                            <div className="state flex flex-col gap-[1px]">
                                <label htmlFor="state" className=" px-1 font-semibold">State</label>
                                <Select defaultValue={selectedState} onChange={(event)=>{onStateChange(event)}} options={states} isSearchable={true} placeholder="Select state" name="state"
                                        className=" w-56"
                                        isClearable={true}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                            </div>
                            <div className="postal-code flex flex-col gap-[1px]">
                                <label htmlFor="postalcode" className=" px-1 font-semibold">Postal / Zip code</label>
                                <input type="postalcode" name="postalcode" id="postalcode" placeholder="Postal/Zip code" className=" border-[1px] rounded-md px-2 py-[2px] h-10 " onChange={inputHandle} required />
                            </div>
                            </div>
                            <div className=" font-bold text-lg absolute  bottom-0 left-1/2 -translate-x-1/2 text-center  rounded-md py-2 px-8  bg-orange-600 text-white cursor-pointer ">
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shipping