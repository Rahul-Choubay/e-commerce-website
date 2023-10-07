import React from 'react'
import HeroSection from './HeroSection';
import Trusted from "./Trusted"
import Services from "./Services"
import FeatureProduct from './FeatureProduct';

const Home = () => {
  const data = {
    name: "599 Store",
  };

  return (
  <>
 <HeroSection  myData={data} />
 <FeatureProduct  />
  <Trusted />
  <Services />

  </>
  )
}

export default Home;
