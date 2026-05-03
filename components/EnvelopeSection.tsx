'use client';
import { useState, useEffect } from 'react';
import styles from './EnvelopeSection.module.css';

type Phase = 'envelope' | 'opening' | 'cover';

export default function EnvelopeSection() {
  const [phase, setPhase] = useState<Phase>('envelope');
  const [coverVisible, setCoverVisible] = useState(false);

  const handleOpen = () => {
    if (phase !== 'envelope') return;
    setPhase('opening');
    setTimeout(() => {
      setPhase('cover');
      setTimeout(() => setCoverVisible(true), 200);
    }, 2000);
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      {/* ======== PHASE 1 & 2: ENVELOPE ======== */}
      {phase !== 'cover' && (
        <div className={`${styles.envelopeWrapper} ${phase === 'opening' ? styles.wrapperFading : ''}`}>
        <div className={styles.envelopeScene}>
            <p className={styles.fromText}>Sebuah undangan istimewa untuk Anda ✦</p>

            {/* Envelope */}
            <div
              className={`${styles.envelopeWrap} ${phase === 'opening' ? styles.envelopeShake : ''}`}
              onClick={handleOpen}
            >
              {/* Flap */}
              <div className={`${styles.flap} ${phase === 'opening' ? styles.flapOpen : ''}`}>
                <div className={styles.flapInner}></div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                {/* Wayang SVG seal replacing "A&S" */}
                <div className={styles.seal}>
                  <svg viewBox="0 0 80 100" width="52" height="65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Gunungan / Wayang shape */}
                    <path d="M40 2 L75 45 L60 48 L55 95 L40 100 L25 95 L20 48 L5 45 Z"
                      fill="rgba(255,255,255,0.15)" stroke="#e3c078" strokeWidth="1.5"/>
                    <path d="M40 12 L68 47 L55 50 L50 88 L40 92 L30 88 L25 50 L12 47 Z"
                      fill="none" stroke="#e3c078" strokeWidth="0.8" strokeDasharray="3,2"/>
                    {/* Inner ornament */}
                    <circle cx="40" cy="48" r="12" fill="none" stroke="#e3c078" strokeWidth="1"/>
                    <path d="M34 48 Q40 38 46 48 Q40 58 34 48Z" fill="#e3c078" opacity="0.6"/>
                    {/* Top crown */}
                    <path d="M35 12 L40 4 L45 12 L40 10 Z" fill="#e3c078" opacity="0.8"/>
                    {/* Side decorations */}
                    <path d="M15 46 Q8 50 15 54" stroke="#e3c078" strokeWidth="1" fill="none"/>
                    <path d="M65 46 Q72 50 65 54" stroke="#e3c078" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <div className={styles.bodyLines}>
                  <span></span><span></span>
                </div>
              </div>

              {/* Letter sliding out */}
              <div className={`${styles.letter} ${phase === 'opening' ? styles.letterSlide : ''}`}>
                <p className={styles.letterPreview}>Undangan Pernikahan</p>
                <p className={styles.letterNames}>Andini & Syawal</p>
              </div>
            </div>

            {phase === 'envelope' && (
              <button className={styles.openBtn} onClick={handleOpen}>
                ✉ Buka Undangan
              </button>
            )}
            {phase === 'opening' && (
              <p className={styles.openingText}>Membuka undangan...</p>
            )}
          </div>
        </div>
      )}

      {/* ======== PHASE 3: COVER PHOTO ======== */}
      {phase === 'cover' && (
        <section className={`${styles.cover} ${coverVisible ? styles.coverVisible : ''}`}>
          {/* Photo Background */}
          <div className={styles.photoBg}></div>
          {/* Dark overlay */}
          <div className={styles.overlay}></div>

          {/* Wayang silhouettes */}
          <div className={`${styles.wayang} ${styles.wayangLeft}`}></div>
          <div className={`${styles.wayang} ${styles.wayangRight}`}></div>

          {/* Animated Content */}
          <div className={`${styles.content} ${coverVisible ? styles.contentVisible : ''}`}>
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
      )}
    </>
  );
}
