import React from 'react'
import HomeHero from './HomeHero'
import WhatWeDo from './WhatWeDo'
import Services from './Services'
import OurEdge from './OurEdge'
import MetricsSection from './MetricsSection'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <WhatWeDo />
        <Services />
        <OurEdge />
        <MetricsSection />
    </div>
  )
}

export default HomePage