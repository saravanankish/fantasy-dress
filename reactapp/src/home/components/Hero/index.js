import React from 'react';


import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = (props) => {
 /*
   explr= {explr}
 )*/

  return (
    <HeroContainer>
      
      
      <HeroContent>
        <HeroItems>
          <HeroH1>WELCOME</HeroH1>
          <HeroP>Look Beautiful</HeroP>
          <HeroBtn onClick={props.data}> Explore</HeroBtn>
        
        </HeroItems>
         
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;