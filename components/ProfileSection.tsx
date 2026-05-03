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
          <h3 className="script-font">Mohon Doa Restu</h3>
        </div>

        <div className={styles.profilesWrapper}>
          {/* Bride Profile */}
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <img src="/images/main foto andini.jpeg" alt="Andini" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/andini/400/500'; }} />
            </div>
            <h2 className="serif-font uppercase">ANDINI</h2>
            <p className={styles.parentsInfo}>Putri Bapak R. Santoso<br/>& Ibu R. Siti Aminah</p>
          </div>

          <div className={styles.separator}>
             <div className={styles.goldenDivider}></div>
          </div>

          {/* Groom Profile */}
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <img src="/images/main foto syawal.jpeg" alt="Syawal" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/sawal/400/500'; }} />
            </div>
            <h2 className="serif-font uppercase">SYAWAL</h2>
            <p className={styles.parentsInfo}>Putra Bapak H. Bambang Irawan<br/>& Ibu Hj. Siti Rohmah</p>
          </div>
        </div>

        <div className={styles.bottomText}>
          <div className={styles.lineDivider}></div>
          <p>
            Dengan segala kerendahan hati, kami sekeluarga memohon doa restu dari Bapak/Ibu/Saudara/i sekalian agar pernikahan ini membawa kebahagiaan dan keberkahan bagi kedua mempelai.
          </p>
        </div>
      </div>
    </section>
  );
}
