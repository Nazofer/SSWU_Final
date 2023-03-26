import React from 'react';
import Hero from '../../components/sections/hero/hero';
import Ads from '../../components/sections/ads/ads';
import About from '../../components/sections/about/about';
import Products from '../../components/sections/products/products';
import Testimonials from '../../components/sections/testimonials/testimonials';

const MainBody = () => {
  return (
    <>
      <Hero></Hero>
      <Ads></Ads>
      <About></About>
      <Products></Products>
      <Testimonials></Testimonials>
    </>
  );
};

export default MainBody;
