import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { AppContext } from "./productcontex";


const About = () => {
  const {myName} = useContext(AppContext);
  const data = {
    name: "599 Ecommerce",
  };

  return(
<>
{myName}
<HeroSection myData={data} />;
</>

  )
   
}


export default About;