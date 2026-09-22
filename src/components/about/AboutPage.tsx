import React from 'react'
import AboutHero from './AboutHero'
import WhoWeAre from './WhoWeAre'
import CoreValues from './CoreValues'
import OurStory from './OurStory'
import WhatWeDoAbout from './WhatWeDoAbout'
import StandsOut from './StandsOut'
import AboutBrands from './AboutBrands'


const AboutPage = () => {
  return (
    <div>
        <AboutHero />
        <WhoWeAre />
    
        <CoreValues />
        <OurStory />
        <WhatWeDoAbout />
        <AboutBrands />
        {/*<StandsOut /> */}
        {/*<MissionVision /> */}
        
    </div>
  )
}

export default AboutPage