'use client';
import { useState } from 'react';
import styles from './GallerySection.module.css';

const images = [
  '/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg',
  '/images/5.jpeg', '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg',
  '/images/9.jpeg', '/images/10.jpeg', '/images/11.jpeg', '/images/12.jpeg',
  '/images/13.jpeg',
];

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Duplicate for infinite scroll feel
  const track1 = [...images, ...images];
  const track2 = [...images.slice(6), ...images.slice(6)];

  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        {/* Row 1 - left scroll */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {track1.map((src, i) => (
              <div key={i} className={styles.marqueeItem}>
                <img src={src} alt={`Foto ${i + 1}`}
                  onError={e => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${i+10}/300/300`; }} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - right scroll */}
        <div className={`${styles.marqueeRow} ${styles.reverse}`}>
          <div className={`${styles.marqueeTrack} ${styles.trackReverse}`}>
            {track2.map((src, i) => (
              <div key={i} className={styles.marqueeItem}>
                <img src={src} alt={`Foto ${i + 1}`}
                  onError={e => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${i+25}/300/300`; }} />
              </div>
            ))}
          </div>
        </div>

        {/* Center CTA Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <p className={styles.overlayLabel}>Galeri Cinta Kami</p>
            <h2 className={`name-font ${styles.overlayTitle}`}>Andini & Syawal</h2>
            <button className={styles.openGalleryBtn} onClick={() => setIsOpen(true)}>
              📷 Kunjungi Galeri Kami
            </button>
          </div>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {isOpen && (
        <div className={styles.galleryModal} onClick={() => setIsOpen(false)}>
          <div className={styles.galleryModalInner} onClick={e => e.stopPropagation()}>
            <button className={styles.galleryClose} onClick={() => setIsOpen(false)}>✕ Tutup</button>
            <h3 className={styles.galleryModalTitle}>
              <span className="name-font">Galeri Cinta Kami</span>
            </h3>
            <div className={styles.galleryGrid}>
              {images.map((src, i) => (
                <div key={i} className={styles.galleryGridItem} onClick={() => setLightbox(src)}>
                  <img src={src} alt={`Foto ${i + 1}`}
                    onError={e => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${i+10}/300/300`; }} />
                  <div className={styles.galleryItemHover}>🔍</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Preview" />
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </section>
  );
}
