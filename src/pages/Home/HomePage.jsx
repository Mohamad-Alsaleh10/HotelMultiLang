import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeSection from '../../sections/HomeSection/HomeSection'
import AboutSection from '../../sections/AboutSection/AboutSection'
import RoomSection from '../../sections/roomSection/RoomSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'
import FasilitiesSection from '../../sections/FasilitesSection/FasilitiesSection'
import Footer from '../../components/Footer/Footer'
import MApSection from '../../sections/MapSection/MApSection'
import { t } from 'i18next'

export default function HomePage() {
  return (
    <div>
       <Navbar/>
       <a
  href="https://wsend.co/966533060327"
  className="whatsapp-btn"
  target="_blank"
>
  <i className="fab fa-whatsapp" /> {t('bookViaWhatsapp')}
</a>

      <HomeSection/>
      <AboutSection/>
      <RoomSection/>
      <ServicesSection/>
      <FasilitiesSection/>
      <MApSection/>
      <Footer/>
    </div>
  )
}
