import React from 'react';
import { useParams } from 'react-router-dom';
import { t } from 'i18next';
import img1 from '../../assets/image/tow rooms/photo_2025-04-07_19-42-08.jpg';
import img2 from '../../assets/image/tow rooms/photo_2025-04-09_19-17-35.jpg';
import img3 from '../../assets/image/tow rooms/photo_2025-04-09_19-17-40.jpg';
import img4 from '../../assets/image/tow rooms/photo_2025-04-09_19-17-49.jpg';
import img5 from '../../assets/image/tow rooms/photo_2025-04-09_19-17-52.jpg';
import img6 from '../../assets/image/tow rooms/photo_2025-04-09_19-18-05.jpg';
import img7 from '../../assets/image/tow rooms/photo_2025-04-09_19-19-20.jpg';
import oneRoomImg from '../../assets/image/one room/photo_2025-04-07_19-43-01.jpg';
import oneImg2 from '../../assets/image/one room/photo_2025-04-09_19-20-10.jpg';
import oneImg3 from '../../assets/image/one room/photo_2025-04-09_19-20-03.jpg';
import oneImg4 from '../../assets/image/one room/photo_2025-04-09_19-20-06.jpg';

import suite5Img1 from '../../assets/image/one room/photo_2025-04-09_19-20-06.jpg';
import suite5Img2 from '../../assets/image/one room/photo_2025-04-09_19-20-10.jpg';

import video1 from '../../assets/image/tow rooms/video_2025-04-09_19-17-44.mp4';
import video2 from '../../assets/image/tow rooms/video_2025-04-09_19-17-56.mp4';
import video3 from '../../assets/image/tow rooms/video_2025-04-09_19-17-25.mp4';
import videoOneRoom from '../../assets/image/one room/video_2025-04-09_19-19-38.mp4';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './RoomDetails.css';

const roomData = {
  suite1: {
    titleKey: 'suite1.title',
    descriptionKey: 'suite1.description',
    images: [img1, img2, img3, img4, img5, img6, img7],
    videos: [video1, video2, video3],
    priceNormal: 1300,
    priceHoliday: 1800,
  },
  suite2: {
    titleKey: 'suite2.title',
    descriptionKey: 'suite2.description',
    images: [oneRoomImg, oneImg2, oneImg3, oneImg4],
    videos: [videoOneRoom],
    priceNormal: 800,
    priceHoliday: 1200,
  },
  suite5: {
    titleKey: 'suite5.title',
    descriptionKey: 'suite5.description',
    images: [suite5Img1, suite5Img2],
    videos: [],
    priceNormal: 800,
    priceHoliday: 1200,
  }
};

export default function RoomDetails() {
  const { id } = useParams();
  const room = roomData[id];

  if (!room) return <div>{t('roomNotFound')}</div>;

  return (
    <>
      <Navbar />
      <div className="details-card" style={{ padding: '2rem' }}>
        <h2>{t(room.titleKey)}</h2>
        <p dangerouslySetInnerHTML={{ __html: t(room.descriptionKey) }} />
        <div className="suite-gallery">
          {room.videos?.map((videoSrc, index) => (
            <div key={`video-${index}`} className="video-container">
              <video autoPlay loop muted playsInline className="background-video" loading="lazy">
                <source src={videoSrc} type="video/mp4" />
                {t('videoNotSupported')}
              </video>
            </div>
          ))}
          {room.images.map((img, index) => (
            <img key={`img-${index}`} src={img} alt={`img-${index}`} style={{ width: '30%' }} />
          ))}
        </div>
        <div className="price">{t('price.normal')}: {room.priceNormal} {t('currency')}</div>
        <div className="price">{t('price.holiday')}: {room.priceHoliday} {t('currency')}</div>
        <a
          href="https://wsend.co/966533060327"
          className="whatsapp-btn"
          target="_blank"
          rel="noreferrer"
        >
          {t('bookViaWhatsapp')}
        </a>
      </div>
      <Footer />
    </>
  );
}
