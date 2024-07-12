import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDescription from './pages/ProductDescription'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import ReviewOrderSummary from './pages/ReviewOrderSummary'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='products' element={<ProductPage />}/>
        <Route path='product/:productname' element={<ProductDescription />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='shipping' element={<Shipping />}/>
        <Route path='review-order' element={<ReviewOrderSummary />}/>
        <Route path='payment' element={<Payment />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
