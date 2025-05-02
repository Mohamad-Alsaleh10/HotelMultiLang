import React from 'react'
import img1 from '../../assets/image/photo_2025-04-07_19-42-02.jpg'
import img2 from '../../assets/image/photo_2025-04-07_19-43-16.jpg'
import { t } from 'i18next'

export default function AboutSection() {
  return (
<section className="about top" id="about">
    <div className="container flex">
      <div className="left">
        <div className="img">
          <img src={img1} alt="" className="image1" loading="lazy"/>
          <img src={img2} alt="" className="image2" loading="lazy"/>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <h5>{t('raiseComfortLevel')}</h5>
          <h2>{t('welcomeMessage')}</h2>
<p>{t('aboutManazelAlshafa')}</p>
<p>{t('manazelDescription')}</p>

            <button className="book-btn" onclick="scrollToBooking()"> {t('BookNow')}</button>
          </div>
      </div>
    </div>
  </section>
  )
}
