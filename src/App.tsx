import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDescription from './pages/ProductDescription'
import Cart from './pages/Cart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='products' element={<ProductPage />}/>
        <Route path='product/:productname' element={<ProductDescription />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
