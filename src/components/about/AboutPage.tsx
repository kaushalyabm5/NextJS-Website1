import React from 'react'
import AboutHero from './AboutHero'
import WhoWeAre from './WhoWeAre'
import CoreValues from './CoreValues'
import OurStory from './OurStory'
import WhatWeDoAbout from './WhatWeDoAbout'
import StandsOut from './StandsOut'
import AboutBrands from './AboutBrands'
import Team from './Team'


const AboutPage = () => {
  return (
    <div>
        <AboutHero />
        <WhoWeAre />
    
        <CoreValues />
        <OurStory />
        <WhatWeDoAbout />
        <StandsOut />
        <AboutBrands />
        <Team />
        
        {/*<MissionVision /> */}
        
    </div>
  )
}

export default AboutPage