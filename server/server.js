// const express = require('express')
// const braintree = require('braintree')
import express from 'express'
import braintree from 'braintree'
import cors from 'cors'

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json());
const gateway = new braintree.BraintreeGateway(
    {
        environment: braintree.Environment.Sandbox,
        merchantId: "ztwjhf688pf57vkj",
        publicKey: "pzyrtz4hr2xf2zbv",
        privateKey: "225ae967855a64e5c5b3f2d183d033f6"
    }
)

app.get("/client_token",(req,res)=>{
    gateway.clientToken.generate((err, response)=>{
        res.send( response.clientToken)
    })
})


app.post('/checkout', (req, res) => {
    // In production you should not take amounts directly from clients
    // const { amount, payment_method_nonce: paymentMethodNonce } = req.body;

    gateway.transaction
      .sale({
        amount:100,
        paymentMethodNonce:req.body.nonce,
        orderId: req.body.orderId,
        options:{
            submitForSettlement: true
        }
      },(err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
        return res.send(result.success);
      })
  });

app.listen(3000)
