import React from 'react'
import HeaderSection from '../sections/Header/HeaderSection'
import BannerSection from '../sections/Banner/BannerSection'
import Feature from '../sections/Index/Feature'
import AboutSection from '../sections/Index/AboutSection'
import RoadmapSection from '../sections/Index/RoadmapSection'
import MeetRacingDog from '../sections/Index/MeetRacingDog'
import Tokenomics from '../sections/Index/Tokenomics'
import Affiliate from '../sections/Index/Affiliate'
import BuyMetadog from '../sections/Index/BuyMetadog'
import StartPlaying from '../sections/Index/StartPlaying'
import FaqSection from '../sections/Index/FaqSection'
import FooterSection from '../sections/Footer/FooterSection'

const HomePage = () => {
  return (
    <>
        <HeaderSection/>
        <BannerSection/>
        <Feature/>
        <AboutSection/>
        <MeetRacingDog/>
        <Tokenomics/>
        <RoadmapSection/>
        <Affiliate/>
        <BuyMetadog/>
        <StartPlaying/>
        <FaqSection/>
        <FooterSection/>
    </>
  )
}

export default HomePage