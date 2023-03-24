import './Styles/global.scss'
import NavMenu from './components/sections/nav-menu/nav-menu';
import Hero from './components/sections/hero/hero';
import Ads from './components/sections/ads/ads';
import About from './components/sections/about/about';
import Testimonials from './components/sections/testimonials/testimonials';

function App() {
  return (
   <>
   <NavMenu></NavMenu>
   <Hero></Hero>
   <Ads></Ads>
   <About></About>
   <Testimonials></Testimonials>
   </>
  );
}

export default App;
