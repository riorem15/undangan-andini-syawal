'use client';
import { useEffect, useRef } from 'react';
import styles from './StoryMapSection.module.css';

const storySteps = [
  { id: 1, title: 'Awal Bertemu', desc: 'Pertama kali kita kenal melalui sosmed.' },
  { id: 2, title: 'Tumbuhnya Cinta', desc: 'Seiring waktu yang berjalan disitu rasa cinta tumbuh.' },
  { id: 3, title: 'Rintangan Terlewati', desc: 'Setelah banyaknya rintangan yang menghadang dalam hubungan tetapi kami yakin semuanya bisa terlewati dan untuk dijadikan tempat berlabuhan terakhir.' },
  { id: 4, title: 'Mengikat Janji', desc: 'Sebuah komitmen untuk mengikat hubungan ke jenjang yang serius.' },
  { id: 5, title: 'Hari Bahagia', desc: 'Akhirnya di hari bahagia ini tiba dimana kita akan hidup selamanya.' },
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
