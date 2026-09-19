import React from 'react'
import HomeHero from './HomeHero'
import WhatWeDo from './WhatWeDo'

import OurEdge from './OurEdge'
import MetricsSection from './MetricsSection'
import Process from './Process'
import TechStack from './TechStack'
import Testimonials from './Testimonials'
import CTASection from './CTASection'
import ProjectsAndCTA from './ProjectsAndCTA'
import TechMarquee from './TechMarquee'
import BusinessImpactSection from './BusinessImpactSection'

import Services from './Services'
import ProjectGrid from './ProjectGrid'
import Sectors from './Sectors'
import ElephantCrewStorySection from './ElephantCrewStorySection'
import Reviews from './Reviews'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <TechMarquee />
        <WhatWeDo />
        <BusinessImpactSection />
        <ElephantCrewStorySection />
        <Services />
        <OurEdge />
        <TechStack />
        <Reviews />
        <Testimonials />
        <Sectors />
        {/* <MetricsSection />*/}
         {/*<Process />*/}
        
        
      
        <ProjectGrid />
        <CTASection />
      
    </div>
  )
}

export default HomePage