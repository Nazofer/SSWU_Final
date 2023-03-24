import './styles/global.scss'
import NavMenu from './components/sections/nav-menu/nav-menu';
import Hero from './components/sections/hero/hero';
import Ads from './components/sections/ads/ads';
import About from './components/sections/about/about';
import Testimonials from './components/sections/testimonials/testimonials';
import Products from './components/sections/products/products';
import Order from './components/sections/order-confirmation/order-confirmation';

function App() {
  return (
   <>
   <NavMenu></NavMenu>
   <Hero></Hero>
   <Ads></Ads>
   <About></About>
   <Products></Products>
   <Testimonials></Testimonials>
   <Order name='Health Pistachios' discount='7' price='20'></Order>
   </>
  );
}

export default App;
