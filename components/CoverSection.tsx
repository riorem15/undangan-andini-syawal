'use client';
import { useEffect, useState } from 'react';
import styles from './CoverSection.module.css';
import HeartParticles from './HeartParticles';

export default function CoverSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) { document.body.style.overflow = 'hidden'; }
  }, [isOpen]);

  return (
    <section className={`${styles.cover} ${isOpen ? styles.opened : ''}`}>
      {/* Background Animated Image */}
      <div className={styles.sceneContainer}>
        <div className={styles.animatedBackground}></div>
        
        {/* Bottom Ornament */}
        <div className={styles.bottomOrnament}></div>

        <HeartParticles />

        {/* Main Content */}
        <div className={styles.content}>
          <h1 className="script-font">The Wedding Of</h1>
          <h2 className="name-font">Andini & Syawal</h2>
        </div>
      </div>

      {/* Wayang Door elements layer */}
      <div className={styles.doorContainer}>
        <div className={`${styles.door} ${styles.doorLeft}`}>
        </div>
        <div className={`${styles.door} ${styles.doorRight}`}>
        </div>
      </div>

      {!isOpen && (
        <button className={styles.openBtn} onClick={handleOpen}>Buka Undangan</button>
      )}
    </section>
  );
}
