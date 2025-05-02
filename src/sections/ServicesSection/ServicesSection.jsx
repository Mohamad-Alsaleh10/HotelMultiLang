import React from 'react'
import img1 from '../../assets/image/swimplay.jpg'
import { t } from 'i18next'

export default function ServicesSection() {
  return (
<section className="" id="services">
      <div className="heading_top container flex1">
        <div className="heading">
          <h5> {t('raiseComfortLevel')}</h5>
          <h2>  {t('OurServices')}</h2>
        </div>
        <div className="button">
        </div>
      </div>

      <section className="services">
        <div className="services-container">


          <div className="service-card">
            <img src={img1} alt=" "/>
            <h3>{t('gardensTitle')} </h3>
            <p>{t('gardensDescription')}</p>
          </div>
        

        </div>
      </section>
    </section>
  )
}
