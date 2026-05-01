'use client';
import { useEffect, useState } from 'react';
import styles from './CoverSection.module.css';

export default function CoverSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    // Generate random falling hearts
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`
    }));
    setHearts(newHearts);

    const targetDate = new Date('2026-05-30T00:00:00').getTime();
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

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) { document.body.style.overflow = 'hidden'; }
  }, [isOpen]);

  return (
    <section className={`${styles.cover} ${isOpen ? styles.opened : ''}`}>
      {/* Background elements */}
      <div className={styles.sceneContainer}>
        {/* Pink/White mountains */}
        <div className={`${styles.mountain} ${styles.mountain1}`}></div>
        <div className={`${styles.mountain} ${styles.mountain2}`}></div>
        
        {/* Gold flash overlay */}
        <div className={styles.goldFlash}></div>

        {/* Falling hearts rain */}
        <div className={styles.heartRain}>
          {hearts.map(h => (
            <div key={h.id} className={styles.fallingHeart} style={{ left: h.left, animationDuration: h.duration, animationDelay: h.delay }}>💖</div>
          ))}
        </div>

        {/* 4 Corner Roses */}
        <div className={`${styles.cornerRose} ${styles.topLeft}`}>
           <span className={styles.stem}>|</span>🌹
        </div>
        <div className={`${styles.cornerRose} ${styles.topRight}`}>
           🌹<span className={styles.stem}>|</span>
        </div>
        <div className={`${styles.cornerRose} ${styles.bottomLeft}`}>
           <span className={styles.stem}>|</span>🌹
        </div>
        <div className={`${styles.cornerRose} ${styles.bottomRight}`}>
           🌹<span className={styles.stem}>|</span>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <h1 className="script-font">The Wedding of</h1>
          <h2 className="script-font">Andini & Syawal</h2>
          
          <div className={styles.photoContainer}>
            <div className={styles.photoLeft}>
               <img src="/images/main foto andini.jpeg" alt="Andini" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/andini/400/400'; }} />
            </div>
            <div className={styles.loveIcon}>💖</div>
            <div className={styles.photoRight}>
               <img src="/images/main foto syawal.jpeg" alt="Syawal" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/sawal/400/400'; }} />
            </div>
          </div>

          <div className={styles.countdown}>
            <div className={styles.timeBox}><span>{timeLeft.days}</span><small>Hari</small></div>
            <div className={styles.timeBox}><span>{timeLeft.hours}</span><small>Jam</small></div>
            <div className={styles.timeBox}><span>{timeLeft.minutes}</span><small>Menit</small></div>
            <div className={styles.timeBox}><span>{timeLeft.seconds}</span><small>Detik</small></div>
          </div>
        </div>
      </div>

      {/* Door elements layer */}
      <div className={styles.doorContainer}>
        <div className={`${styles.door} ${styles.doorLeft}`}>
          <div className={styles.doorHandleRight}></div>
          <div className={styles.sparkles}></div>
        </div>
        <div className={`${styles.door} ${styles.doorRight}`}>
          <div className={styles.doorHandleLeft}></div>
          <div className={styles.sparkles}></div>
        </div>
      </div>

      {!isOpen && (
        <button className={styles.openBtn} onClick={handleOpen}>Buka Undangan</button>
      )}
    </section>
  );
}
