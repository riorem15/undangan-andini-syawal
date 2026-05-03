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
          <h2 className="name-font">Event & Information</h2>
          <p className={styles.subtitle}>For the Wedding of Andini & Syawal</p>
          <div className={styles.countdown}>
            <div className={styles.timeBox}><span>{timeLeft.days}</span><small>DAYS</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.hours}</span><small>HOURS</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.minutes}</span><small>MINUTES</small></div>
            <span className={styles.timeSeparator}>:</span>
            <div className={styles.timeBox}><span>{timeLeft.seconds}</span><small>SECONDS</small></div>
          </div>
        </div>

        <div className={styles.eventDetails}>
          <div className={styles.cardsContainer}>
            <div className={styles.eventCard}>
              <div className={styles.batikCorner}></div>
              <h3 className="name-font">Akad Nikah</h3>
              <div className={styles.eventInfo}>
                <p><strong>Saturday, October 26th, 2026</strong></p>
                <p>08:00 AM - 10:00 AM</p>
                <br/>
                <p>Pendopo Agung Hotel</p>
                <p>Ambarrukmo, Yogyakarta</p>
                <br/>
                <p>Dress Code:</p>
                <p>Traditional Javanese attire</p>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.batikCorner}></div>
              <h3 className="name-font">Resepsi</h3>
              <div className={styles.eventInfo}>
                <p><strong>Saturday, October 26th, 2026</strong></p>
                <p>11:00 AM - 02:00 PM</p>
                <br/>
                <p>The Grand Ballroom,</p>
                <p>Hotel Ambarrukmo, Yogyakarta</p>
                <br/>
                <p>Dress Code:</p>
                <p>Formal Javanese or Evening Wear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
