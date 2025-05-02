import { useEffect } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import RoomSection from './sections/roomSection/RoomSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import FasilitiesSection from './sections/FasilitesSection/FasilitiesSection';
import MApSection from './sections/MapSection/MApSection';
import HomePage from './pages/Home/HomePage';
import RoomDetails from './pages/Services/RoomDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SectionPage from './pages/SectionPage/SectionPage';

function App() {
  const { t, i18n } = useTranslation();

  // Update direction on language change
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/gallery" element={<SectionPage />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
