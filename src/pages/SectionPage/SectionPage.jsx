import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../assets/image/photo_2025-04-07_19-41-56.jpg';
import img2 from '../../assets/image/photo_2025-04-07_19-42-02.jpg';
import img3 from '../../assets/image/photo_2025-04-07_19-42-05.jpg';
import img4 from '../../assets/image/photo_2025-04-07_19-42-11.jpg';

import './SectionPage.css'; // Create this file for custom styles
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { t } from 'i18next';

export default function SectionPage() {
  return (
 <>
 <Navbar/>
 <div className="gallery-container">
 <h2>{t('hotelGallery')}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hotel-gallery"
      >
        {[img1, img2, img3, img4].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`صورة ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Footer/>   
 </>
  );
}
