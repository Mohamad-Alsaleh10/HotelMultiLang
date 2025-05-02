import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/image/logo/logo.png';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
      };

      const closeMenu = () => {
        setMenuOpen(false);
      };
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <header className="header" id="navigation-menu">
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="Logo" loading="lazy" />
          </a>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className="nav-link" onClick={closeMenu}>{t('home')}</a></li>
            <li><a href="/#services" className="nav-link" onClick={closeMenu}>{t('services')}</a></li>
            <li><a href="/gallery" className="nav-link" onClick={closeMenu}>{t('gallery')}</a></li>
          </ul>
          <div className="lang-switch">
            <button onClick={toggleLanguage}>
              {i18n.language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
          <div     className={`hambuger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </div>
    </header>
  );
}
