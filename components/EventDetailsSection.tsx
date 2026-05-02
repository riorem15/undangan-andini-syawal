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
          <h2 className="script-font">Save The Date</h2>
          <div className={styles.countdown}>
            <div className={styles.timeBox}><span>{timeLeft.days}</span><small>Hari</small></div>
            <div className={styles.timeBox}><span>{timeLeft.hours}</span><small>Jam</small></div>
            <div className={styles.timeBox}><span>{timeLeft.minutes}</span><small>Menit</small></div>
            <div className={styles.timeBox}><span>{timeLeft.seconds}</span><small>Detik</small></div>
          </div>
        </div>

        <div className={styles.eventDetails}>
          <h2 className="script-font">Pernikahan</h2>
          <div className={styles.cardsContainer}>
            <div className={`glass-panel ${styles.eventCard}`}>
              <h3>Akad Nikah</h3>
              <div className={styles.eventInfo}>
                <p><strong>Sabtu</strong></p>
                <p className={styles.date}>30 Mei 2026</p>
                <p>Pukul 07.00 s/d Selesai</p>
              </div>
            </div>

            <div className={`glass-panel ${styles.eventCard}`}>
              <h3>Resepsi</h3>
              <div className={styles.eventInfo}>
                <p><strong>Sabtu</strong></p>
                <p className={styles.date}>30 Mei 2026</p>
                <p>Pukul 10.00 s/d Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
