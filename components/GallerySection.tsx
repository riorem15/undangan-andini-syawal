'use client';
import styles from './GallerySection.module.css';

const images = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.loveAnimation}>
         <div className={`${styles.heart} ${styles.h1}`}>💖</div>
         <div className={`${styles.heart} ${styles.h2}`}>💖</div>
         <div className={`${styles.heart} ${styles.h3}`}>💖</div>
      </div>
      <h2 className="script-font">Galeri Cinta Kami</h2>
      
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className={styles.carouselItem}
              style={{ '--rotate': `${idx * (360 / images.length)}deg` } as any}
            >
              <img src={src} alt={`Gallery ${idx + 1}`} onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/gal${idx}/400/400`; }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
