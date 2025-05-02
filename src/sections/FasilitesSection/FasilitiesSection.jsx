import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FasilitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const toggleFacilities = () => setShowAll(!showAll);

  const hiddenFacilities = [
    {
      title: t('internet'),
      items: [t('wifiAvailable')]
    },
    {
      title: t('roomFacilities'),
      items: [
        t('socketNearBed'),
        t('dryingRack'),
        t('clothesHanger'),
        t('tileFloor'),
        t('soundproof'),
        t('ironingFacilities'),
        t('iron')
      ]
    },
    {
      title: t('kitchen'),
      items: [
        t('cleaningProducts'),
        t('fridge'),
        t('kitchenware'),
        t('electricKettle'),
        t('washingMachine')
      ]
    },
    {
      title: t('accessibleServices'),
      items: [
        t('wheelchairRamp'),
        t('vibratingAlarm'),
        t('toiletGrabBars'),
        t('emergencyBell'),
        t('bathroomChair')
      ]
    },
    {
      title: t('spokenLanguages'),
      items: [t('arabic'), t('english')]
    },
    {
      title: t('receptionServices'),
      items: [
        t('invoiceOnRequest'),
        t('lockers'),
        t('privateCheckInOut'),
        t('expressCheckInOut'),
        t('reception24h')
      ]
    },
    {
      title: t('security'),
      items: [
        t('fireExtinguishers'),
        t('outdoorCameras'),
        t('indoorCameras'),
        t('smokeAlarms'),
        t('alarms'),
        t('keyAccess'),
        t('safeBox'),
        t('fullySecured')
      ]
    },
    {
      title: t('cleaningFacilities'),
      items: [
        t('dailyCleaning'),
        t('ironingService'),
        t('laundryFacilities')
      ]
    },
    {
      title: t('parking'),
      items: [t('accessibleParking')]
    }
  ];

  return (
    <section>
      <div className="heading_top container flex1">
        <div className="heading">
          <h5>{t('raiseComfortLevel')}</h5>
          <h2>{t('facilities')}</h2>
        </div>
      </div>

      <section className="facilities-section">
        <p className="facilities-subtitle">{t('commonFacilities')}</p>

        <div className="facilities-container">
          <div className="facility-card">
            <h3>{t('outdoorActivities')}</h3>
            <p>{t('balcony')}</p>
            <p>{t('seating')}</p>
            <p>{t('garden')}</p>
          </div>
          <div className="facility-card">
            <h3>{t('bedroom')}</h3>
            <p>{t('alarmClock')}</p>
            <p>{t('closet')}</p>
            <p>{t('bedLinen')}</p>
          </div>
          <div className="facility-card">
            <h3>{t('bathroom')}</h3>
            <p>{t('toiletPaper')}</p>
            <p>{t('towels')}</p>
            <p>{t('slippers')}</p>
            <p>{t('privateBathroom')}</p>
            <p>{t('toilet')}</p>
            <p>{t('toiletries')}</p>
            <p>{t('hairDryer')}</p>
            <p>{t('shower')}</p>
          </div>

          {showAll && hiddenFacilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <h3>{facility.title}</h3>
              {facility.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        <button className="btn" onClick={toggleFacilities}>
          {showAll ? t('hideFacilities') : t('showAllFacilities')}
        </button>
      </section>
    </section>
  );
}
