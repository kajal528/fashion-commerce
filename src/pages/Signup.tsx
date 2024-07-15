import { ChangeEvent, FormEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import FormAction from './'
import { AuthContext } from "../context/AuthContextProvider";

const Signup = (props:{setUserLoggedIn:(value:boolean)=>void}) => {
    const navigate = useNavigate()
    const {setUserLoggedIn} = useContext(AuthContext);
    const [userData, setUserData] = useState<Object>({})
    let data:any = [];

    const redirect = (event)=>{
        event.preventDefault();
        localStorage.setItem('user',JSON.stringify(userData));
        setUserLoggedIn();
        navigate('/cart')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
         const newdata = {...userData, [event.target.name]:event.target.value}
         setUserData(newdata)
    }
    

    return (
        <div className=" h-screen w-full flex items-center">
            <div className='w-[600px] max-w-max max-h-max border-[1px] px-4 py-4 shadow-md rounded-lg m-auto'>
                <span className=' text-center font-bold text-2xl text-orange-600'>Sign up</span>
                <div className=' mt-8 mb-4 mx-4'>
                    <form name="signup" onSubmit={redirect}  >
                        <div className=" flex flex-wrap gap-4 justify-between">
                        <div className=" flex flex-col gap-1  grow">
                            <label htmlFor="firstname" className=" ">First Name</label>
                            <input type="text" name='firstname' required className=" border-2 border-orange-300 rounded-lg  focus:outline-none px-2 py-1 text-lg "
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className=" flex flex-col gap-1 grow">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name='lastname'  className=" border-2 border-orange-300
                             rounded-lg focus:outline-none px-2 py-1 text-lg"
                             onChange={handleInputChange}/>
                        </div>
                        <div className=" flex flex-col gap-1 basis-full">
                            <label htmlFor="email-address">Email</label>
                            <input type="email" name='email' id="email-address"  required className=" border-2 border-orange-300 rounded-lg 
                            focus:outline-none px-2 py-1 text-lg" 
                            onChange={handleInputChange}/>
                        </div>
                        <div className=" flex flex-col gap-1 basis-full">
                            <label htmlFor="password">Create password</label>
                            <input type="password" name='password'  required className=" border-2 border-orange-300 
                            rounded-lg focus:outline-none px-2 py-1 text-lg" 
                            onChange={handleInputChange}/>
                        </div>
                        </div>
                        <div className=" px-4 py-3 border-2 bg-orange-600 rounded-lg text-white text-center mt-8 mb-4 max-w-40 m-auto font-bold text-lg">
                            <button type="submit">Sign up</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup