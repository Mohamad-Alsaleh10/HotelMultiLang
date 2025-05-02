import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import tiktok from '../../assets/image/icon/tictok.png';
import snap from '../../assets/image/icon/snap.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-title">{t('followUs')}</h3>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@alshafa_houses?_t=8nttlwyvcod&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={tiktok} alt="TikTok" />
            </a>
            <a
              href="https://tr.ee/PAY7IJP9Yj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={snap} alt="Snapchat" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-rights">{t('allRightsReserved')}</p>
    </footer>
  );
}
