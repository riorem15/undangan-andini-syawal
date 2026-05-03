'use client';
import { useState, useEffect } from 'react';
import styles from './EnvelopeSection.module.css';
import HeartParticles from './HeartParticles';

export default function EnvelopeSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation on mount
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className={styles.cover}>
      {/* Photo Background */}
      <div className={styles.photoBg}></div>
      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Wayang silhouettes */}
      <div className={`${styles.wayang} ${styles.wayangLeft}`}></div>
      <div className={`${styles.wayang} ${styles.wayangRight}`}></div>

      {/* Floating petals */}
      <HeartParticles />

      {/* Animated Content */}
      <div className={`${styles.content} ${visible ? styles.contentVisible : ''}`}>
        <p className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <p className={styles.theWedding}>The Wedding of</p>
        <h1 className={`name-font ${styles.names}`}>Andini & Syawal</h1>
        <div className={styles.dateLine}>
          <span className={styles.dateText}>30 Mei 2026 Masehi</span>
          <span className={styles.dateSeparator}>✦</span>
          <span className={styles.dateText}>13 Dzulhijjah 1447 H</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollBtn} onClick={scrollDown} aria-label="Scroll ke bawah">
        <span className={styles.scrollText}>Gulir ke bawah</span>
        <div className={styles.scrollArrow}>
          <div className={styles.arrow}></div>
        </div>
      </button>
    </section>
  );
}
