'use client';
import { useState, useEffect } from 'react';
import styles from './EnvelopeSection.module.css';
import HeartParticles from './HeartParticles';

export default function EnvelopeSection() {
  const [state, setState] = useState<'envelope' | 'opening' | 'opened'>('envelope');
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setState('opening');
    setTimeout(() => {
      setState('opened');
      setTimeout(() => setShowContent(true), 600);
    }, 1800);
  };

  return (
    <div className={`${styles.wrapper} ${state === 'opened' ? styles.wrapperOpened : ''}`}>

      {/* ===== AMPLOP ===== */}
      {state !== 'opened' && (
        <div className={`${styles.envelopeScene} ${state === 'opening' ? styles.sceneOpening : ''}`}>
          <HeartParticles />
          <p className={styles.fromText}>Sebuah undangan istimewa untuk Anda</p>
          <div className={styles.envelopeWrap} onClick={state === 'envelope' ? handleOpen : undefined}>
            {/* Flap */}
            <div className={`${styles.flap} ${state === 'opening' ? styles.flapOpen : ''}`}>
              <div className={styles.flapInner}></div>
            </div>
            {/* Body */}
            <div className={styles.body}>
              <div className={styles.seal}>
                <span className={styles.sealText}>A&S</span>
              </div>
              <div className={styles.bodyLines}>
                <span></span><span></span><span></span>
              </div>
            </div>
            {/* Letter sliding out */}
            <div className={`${styles.letter} ${state === 'opening' ? styles.letterSlide : ''}`}>
              <p className={styles.letterPreview}>Undangan Pernikahan</p>
              <p className={styles.letterNames}>Andini & Syawal</p>
            </div>
          </div>
          {state === 'envelope' && (
            <button className={styles.openBtn} onClick={handleOpen}>
              ✉ Buka Undangan
            </button>
          )}
          {state === 'opening' && (
            <p className={styles.openingText}>Membuka undangan...</p>
          )}
        </div>
      )}

      {/* ===== KONTEN UTAMA (setelah amplop dibuka) ===== */}
      {state === 'opened' && (
        <div className={`${styles.mainContent} ${showContent ? styles.contentVisible : ''}`}>
          <HeartParticles />
          {/* 2D Illustration - crop header away */}
          <div className={styles.illustrationWrap}>
            <div className={styles.illustration}></div>
          </div>
        </div>
      )}
    </div>
  );
}
