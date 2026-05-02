'use client';
import { useEffect, useRef } from 'react';
import styles from './ProfileSection.module.css';

export default function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.profileSection}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h3>Assalamualaikum wr. wb.</h3>
          <p>
            Tanpa mengurangi rasa hormat, kami mengundang bapak/ibu/saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </div>

        <div className={styles.profilesWrapper}>
          {/* Bride Profile */}
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <img src="/images/main foto andini.jpeg" alt="Andini" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/andini/400/500'; }} />
            </div>
            <h2 className="name-font">Andini</h2>
            <p className={styles.parentsInfo}>Putri dari Bapak NANA MULYANA</p>
          </div>

          <div className={styles.ampersand}>
            <h2 className="name-font">&</h2>
          </div>

          {/* Groom Profile */}
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <img src="/images/main foto syawal.jpeg" alt="Syawal" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/sawal/400/500'; }} />
            </div>
            <h2 className="name-font">Syawalludin</h2>
            <p className={styles.parentsInfo}>Putra dari Bapak Sukardi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
