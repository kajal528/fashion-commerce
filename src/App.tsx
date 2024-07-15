import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDescription from './pages/ProductDescription'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import ReviewOrderSummary from './pages/ReviewOrderSummary'
import Signup from './pages/Signup'
import { useState } from 'react'
import Error from './pages/Error'
import AuthContextProvider from './context/AuthContextProvider'

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='products/' element={<ProductPage />} />
          <Route path='products/product/' element={<ProductDescription />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='review-order' element={<ReviewOrderSummary />} />
          <Route path='payment' element={<Payment />} />
          <Route path='signup' element={<Signup setUserLoggedIn={(value: boolean) => setUserLoggedIn(value)} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
