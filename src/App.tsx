import Navigation from './components/Navigation'
import SuggestedProducts from './components/SuggestedProducts'
import ProductSection from './components/ProductSection'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return(
  <div>
    <Navigation/>
    <HeroSection/>
    <SuggestedProducts/>
    <ProductSection category='Category'/>
    <ProductSection category='Brand'/>
    <Footer/>
  </div>
  )
}

export default App
