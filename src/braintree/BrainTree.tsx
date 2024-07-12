import { useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'

const BrainTree = (props: any) => {

    useEffect(() => {
        createDropIn()
    }, [props.token])


    async function sendNonce(nonce: string) {
        try {
            const response = await fetch('http://localhost:3000/checkout', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nonce, orderId: props.data.orderId })
            })

            const result = await response.json();

            return result
        }
        catch (error) {
            console.log(error);
        }
    }

    const createDropIn = () => {
        const payButton:HTMLElement = document.querySelector('#pay-button');


        braintree.dropin.create({
            authorization: props.token,
            container: '#dropin-container',
        }, function (err, dropinInstance) {

            if (err) {
                console.log(err);
            }
            payButton?.addEventListener('click', function () {

                const dropincontainer:HTMLElement = document.querySelector('#dropin-container')
                const loader:HTMLElement = document.querySelector('#loader')
                payButton.style.display = 'none'
                dropincontainer.style.display = 'none'
                loader.style.display = 'flex'

                dropinInstance?.requestPaymentMethod(function (err, payload) {
                    if (err) {
                        console.log(err);
                    }
                    sendNonce(payload.nonce).then((res) => {
                        if (res) {
                            props.setIsTransactionSuccessful(res);
                            const loader:HTMLElement = document.querySelector('#loader')
                            if(loader){

                                loader.style.display = 'none'
                            }
                            const paymentStatusMessage:HTMLElement = document.querySelector('#payment-status-message')
                            paymentStatusMessage.style.display = 'block'
                            const payingWithCard:HTMLElement = document.querySelector("[data-braintree-id='methods-label']");
                            payingWithCard.style.margin = "50px 0 20px"
                            payingWithCard.style.fontWeight = "bold"
                            const goToHome:HTMLElement = document.querySelector("#go-to-home");
                            goToHome.style.display = 'block'
                            const chooseAnotherWay:HTMLElement = document.querySelector("[data-braintree-id='toggle']");
                            chooseAnotherWay.style.display = 'none'

                            const orderStatus:HTMLElement = document.querySelector('#order-status');
                            orderStatus.style.display = 'block'


                        }
                        if (!res) {
                            props.setIsTransactionSuccessful(res);
                            const loader:HTMLElement = document.querySelector('#loader')
                            loader.style.display = 'none'
                            const paymentStatusMessage:HTMLElement = document.querySelector('#payment-status-message')
                            paymentStatusMessage.style.display = 'block'
                            const goToHome:HTMLElement = document.querySelector("#go-to-home");
                            goToHome.style.display = 'block'
                            const orderStatus:HTMLElement = document.querySelector('#order-status');
                            orderStatus.style.display = 'block'
                        }
                    }).catch((err) => {
                        console.log(err);
                    }
                    );
                });

            })
        });
    }

    return (
        <>
            <div className=' h-2/3'>
                <div id="dropin-container" ></div>
                <div id="pay-button" className={` px-4 py-2 bg-orange-600 rounded-md text-white mx-auto w-56 text-center font-bold my-8 cursor-pointer`}><button>Pay &#8377;&nbsp;{props.totalCartPrice}</button></div>
                <div id="payment-status-message" className=' hidden px-4 py-2 text-center'>{!props.isTransactionSuccessful ?"Something went wrong":"Payment Successful"}</div>
                <div id="order-status" className={` hidden  px-4 py-2 ${props.isTransactionSuccessful ? 'bg-green-600' : ' bg-red-600'} rounded-md text-white mx-auto w-56 text-center font-bold my-8 `}>{props.isTransactionSuccessful ? 'Order Confirmed' : 'Transaction Failed'}</div>

                <div id="go-to-home" className=' text-center w-full hidden'><a href="/" className=' hover:text-blue-800 text-blue-600' >Go to home</a></div>
                <div id="loader" className='loader hidden h-full justify-center '><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                /></div>
            </div>
        </>
    )
}

export default BrainTree;