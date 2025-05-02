import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/image/tow rooms/photo_2025-04-07_19-42-08.jpg';
import img2 from '../../assets/image/one room/photo_2025-04-07_19-43-01.jpg';
import img3 from '../../assets/image/moaken/ssddff.jpeg';
import { t } from 'i18next';

export default function RoomSection() {
  const rooms = [
    { id: 'suite1', title: t('suite1Title'), img: img1 },
    { id: 'suite2', title: t('suite2Title'), img: img2 },
    { id: 'suite5', title: t('suite5Title'), img: img3 },
  ];

  return (
    <section className="room top" id="room">
      <div className="heading_top container flex1">
        <div className="heading">
          <h5>{t('raiseComfortLevel')}</h5>
          <h2>{t('roomsAndSuites')}</h2>
        </div>
      </div>

      <section className="suites-section">
        {rooms.map((room) => (
          <div className="suite-card" key={room.id}>
            <img src={room.img} alt={room.title} />
            <Link className="suite-btn" to={`/room/${room.id}`}>
              {room.title}
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}
