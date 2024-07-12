import express from 'express'
import braintree from 'braintree'
import cors from 'cors'
import 'dotenv/config'

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json());
const gateway = new braintree.BraintreeGateway(
    {
        environment: braintree.Environment.Sandbox,
        merchantId: process.env.BT_MERCHANT_ID,
        publicKey: process.env.BT_PUBLIC_KEY,
        privateKey: process.env.BT_PRIVATE_KEY
    }
)

app.get("/client_token",(req,res)=>{
    gateway.clientToken.generate((err, response)=>{
        res.send( response.clientToken)
    })
})


app.post('/checkout', (req, res) => {
    // In production you should not take amounts directly from clients

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
        return res.send(result.success);
      })
  });

app.listen(3000)
