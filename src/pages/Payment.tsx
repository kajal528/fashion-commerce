import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import BrainTree from '../braintree/BrainTree.tsx'
import Navigation from '../components/Navigation.tsx';
import Footer from '../components/Footer.tsx';
import { RotatingLines } from 'react-loader-spinner';

const Payment = () => {

  let  {state}  = useLocation();
  
  const {totalCartPrice} = state;

  const[token, setToken] = useState("");
    const[isTransactionSuccessful, setIsTransactionSuccessful] = useState();
    let data = {
      orderId:22222,
    }

    useEffect(()=>{
         getToken();
    },[])

   

    async function getToken() {
        const url = "http://localhost:3000/client_token";
        try {
          const response = await fetch(url,{
           
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.text();
         
          setToken(json);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className=' flex flex-col h-screen'>
        <Navigation/>
        <div className=' mt-28 md:mt-16 grow'>
        {token? <div className=' px-4 my-4 h-full'>
          <span className=' font-bold text-lg'>Payment</span>
     <BrainTree
      token={token}
        data={data}
        setIsTransactionSuccessful={(data:boolean)=>{setIsTransactionSuccessful(data)}}
       
        totalCartPrice={totalCartPrice}
        isTransactionSuccessful={isTransactionSuccessful}
      />
      </div>:<div className=' h-full flex justify-center'><RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    /></div>}
      </div>
      <Footer/>
  
    </div>
  )
}

export default Payment