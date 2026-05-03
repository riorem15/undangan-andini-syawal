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
      <div className={styles.sceneContainer}>
        <div className={styles.introImage}></div>
        <HeartParticles />
      </div>

      {!isOpen && (
        <button className={styles.openBtn} onClick={handleOpen}>Buka Undangan</button>
      )}
    </section>
  );
}
