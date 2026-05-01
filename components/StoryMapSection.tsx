'use client';
import { useEffect, useRef } from 'react';
import styles from './StoryMapSection.module.css';

const storySteps = [
  { id: 1, title: 'Awal Bertemu', desc: 'Kami pertama kali bertemu di sebuah acara dan saling mengenal.' },
  { id: 2, title: 'Menjalani Hubungan', desc: 'Seiring waktu, tumbuh rasa nyaman dan kami memutuskan untuk bersama.' },
  { id: 3, title: 'Memantapkan Hati', desc: 'Setelah banyak rintangan, kami yakin satu sama lain adalah pelabuhan terakhir.' },
  { id: 4, title: 'Mengikat Janji', desc: 'Sebuah komitmen diucapkan untuk melangkah ke jenjang yang lebih serius.' },
  { id: 5, title: 'Mempersunting', desc: 'Akhirnya, hari bahagia ini tiba di mana kami akan hidup bersama selamanya.' },
];

export default function StoryMapSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, { threshold: 0.2 });

    const blocks = containerRef.current?.querySelectorAll(`.${styles.storyBlock}`);
    blocks?.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className="script-font">Perjalanan Cinta Kami</h2>
      <div className={styles.timeline} ref={containerRef}>
        {storySteps.map((step, index) => (
          <div key={step.id} className={`${styles.storyBlock} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={`${styles.content} glass-panel`}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
