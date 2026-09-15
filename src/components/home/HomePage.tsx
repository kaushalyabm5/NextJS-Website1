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
import ElephantCrewStorySection from './ElephantCrewStorySection'
import Services from './Services'
import ProjectGrid from './ProjectGrid'
import Sectors from './Sectors'

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
        <Sectors />
        <MetricsSection />
        <Process />
        <TechStack />
        <Testimonials />
      
        <ProjectGrid />
        <CTASection />
      
    </div>
  )
}

export default HomePage