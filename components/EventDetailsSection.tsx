'use client';
import { useEffect, useState } from 'react';
import styles from './EventDetailsSection.module.css';

export default function EventDetailsSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-05-30T07:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.eventSection}>
      <div className={styles.container}>
        <div className={styles.saveTheDate}>
          <h2 className="name-font">Save the Date</h2>
          <p className={styles.subtitle}>Pernikahan Andini & Syawal</p>
          <div className={styles.dateInfo}>
            <p className={styles.hijriDate}>13 Dzulhijjah 1447 Hijriah</p>
            <p className={styles.miladDate}>Sabtu, 30 Mei 2026</p>
          </div>
          <div className={styles.countdown}>
            <div className={styles.timeBox}><span>{timeLeft.days}</span><small>HARI</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.hours}</span><small>JAM</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.minutes}</span><small>MENIT</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.seconds}</span><small>DETIK</small></div>
          </div>
        </div>

        <div className={styles.eventDetails}>
          <div className={styles.cardsContainer}>
            <div className={styles.eventCard}>
              <div className={styles.batikCorner}></div>
              <h3 className="name-font">Akad Nikah</h3>
              <div className={styles.eventInfo}>
                <p className={styles.eventDay}>Sabtu, 30 Mei 2026</p>
                <p className={styles.eventHijri}>13 Dzulhijjah 1447 H</p>
                <p className={styles.eventTime}>⏰ Pukul 07.00 – Selesai</p>
                <p className={styles.locationStatic}>📍 Kediaman Mempelai Wanita</p>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.batikCorner}></div>
              <h3 className="name-font">Resepsi</h3>
              <div className={styles.eventInfo}>
                <p className={styles.eventDay}>Sabtu, 30 Mei 2026</p>
                <p className={styles.eventHijri}>13 Dzulhijjah 1447 H</p>
                <p className={styles.eventTime}>⏰ Pukul 10.00 – Selesai</p>
                <p className={styles.locationStatic}>📍 Kediaman Mempelai Wanita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
