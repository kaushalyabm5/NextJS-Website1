import React from 'react'
import HomeHero from './HomeHero'
import WhatWeDo from './WhatWeDo'
import Services from './Services'
import OurEdge from './OurEdge'
import MetricsSection from './MetricsSection'
import Process from './Process'
import TechStack from './TechStack'
import Testimonials from './Testimonials'
import ProjectShowcase from './ProjectShowcase'
import CTASection from './CTASection'
import ProjectsAndCTA from './ProjectsAndCTA'
import TechMarquee from './TechMarquee'
import BusinessImpactSection from './BusinessImpactSection'
import ElephantCrewStorySection from './ElephantCrewStorySection'

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
        <MetricsSection />
        <Process />
        <TechStack />
        <Testimonials />
        <ProjectShowcase />
        <CTASection />
      
    </div>
  )
}

export default HomePage