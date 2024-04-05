import React from 'react'
import HeaderSection from '../sections/Header/HeaderSection'
import BannerSection from '../sections/Banner/BannerSection'
import Feature from '../sections/Index/Feature'
import AboutSection from '../sections/Index/AboutSection'
import RoadmapSection from '../sections/Index/RoadmapSection'

const HomePage = () => {
  return (
    <>
        <HeaderSection/>
        <BannerSection/>
        <Feature/>
        <AboutSection/>

        <RoadmapSection/>
    </>
  )
}

export default HomePage