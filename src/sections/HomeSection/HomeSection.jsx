import React, { useState, useEffect } from 'react';
import './HomeSection.css'; 
import slide1 from '../../assets/image/slides/1.jpg'
import slide2 from '../../assets/image/slides/2.jpg'
import slide3 from '../../assets/image/slides/3.jpg'
import slide4 from '../../assets/image/slides/4.jpg'
import { t } from 'i18next';

export default function HomeSection() {
  const images = [slide1, slide2, slide3, slide4];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const scrollToBooking = () => {
    document.getElementById("room")?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manual reset logic
  const resetAutoSlide = () => {
    setCurrentIndex(index => index); // Forces re-render to reset interval
  };

  return (
    <section className="home" id="home">
      <div className="head_container">
        <div className="box">
          <div className="text">
            <h1>{t('WelcomeManazelAlshafa')} </h1>
            <p>{t('WelcomeManazelAlshafaDesc')}</p>
            <button className="book-btn" onClick={scrollToBooking}> {t('BookNow')}</button>
          </div>
        </div>
        <div className="image">
          <img src={images[currentIndex]} className="slide" alt="Main" loading="lazy" />
        </div>
        <div className="image_item">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
