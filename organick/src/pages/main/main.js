import React from 'react';
import Hero from '../../components/sections/hero/hero';
import AboutAds from '../../components/sections/about-ads/about-ads';
import About from '../../components/sections/about/about';
import Products from '../../components/sections/products/products';
import Testimonials from '../../components/sections/testimonials/testimonials';
import Offers from '../../components/sections/offers/offers';
import EcoFriendly from '../../components/sections/eco-friendly/eco-friendly';
import EcoFriendlyAds from '../../components/sections/eco-friendly-ads/eco-friendly-ads';

const MainBody = () => {
  return (
    <>
      <Hero></Hero>
      <AboutAds></AboutAds>
      <About></About>
      <Products></Products>
      <Testimonials></Testimonials>
      <Offers></Offers>
      <EcoFriendly></EcoFriendly>
      <EcoFriendlyAds></EcoFriendlyAds>
    </>
  );
};

export default MainBody;
