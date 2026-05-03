'use client';
import { useState } from 'react';
import styles from './StoryMapSection.module.css';

const stories = [
  { id: 1, icon: '✦', title: 'Awal Bertemu',      year: '2020', desc: 'Pertama kali kita kenal melalui media sosial. Sebuah perkenalan sederhana yang menjadi awal dari segalanya.',                                                                        batikColor: '#b8860b' },
  { id: 2, icon: '❧', title: 'Tumbuhnya Cinta',   year: '2021', desc: 'Seiring waktu yang berjalan, rasa cinta tumbuh perlahan namun pasti. Setiap hari terasa lebih indah bersamamu.',                                                                          batikColor: '#9e7631' },
  { id: 3, icon: '✿', title: 'Rintangan Terlewati', year: '2022', desc: 'Banyak rintangan yang menghadang, namun kami yakin semuanya dapat terlewati. Cinta kami semakin kuat.',                                                                                    batikColor: '#cba365' },
  { id: 4, icon: '✦', title: 'Mengikat Janji',    year: '2025', desc: 'Sebuah komitmen untuk mengikat hubungan ke jenjang yang serius — melamar dan menyatakan janji setia.',                                                                                       batikColor: '#b8860b' },
  { id: 5, icon: '❦', title: 'Hari Bahagia',      year: '2026', desc: 'Akhirnya, hari bahagia itu tiba. Kami akan memulai babak baru kehidupan bersama untuk selamanya.',                                                                                           batikColor: '#9e7631' },
];

export default function StoryMapSection() {
  const [activeStory, setActiveStory] = useState<null | typeof stories[0]>(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className="name-font">Perjalanan Cinta Kami</span>
      </h2>
      <p className={styles.subtitle}>Klik setiap momen untuk melihat kisahnya</p>

      {/* Journey Path */}
      <div className={styles.pathContainer}>
        <div className={styles.path}></div>
        {stories.map((story, i) => (
          <div
            key={story.id}
            className={`${styles.node} ${i % 2 === 0 ? styles.nodeTop : styles.nodeBottom}`}
            style={{ left: `${(i / (stories.length - 1)) * 88 + 6}%` }}
            onClick={() => setActiveStory(story)}
          >
            <div className={styles.nodeBtn}>
              <span className={styles.nodeIcon}>{story.icon}</span>
            </div>
            <div className={`${styles.nodeLabel} ${i % 2 === 0 ? styles.labelTop : styles.labelBottom}`}>
              <span className={styles.nodeYear}>{story.year}</span>
              <span className={styles.nodeTitle}>{story.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeStory && (
        <div className={styles.modalOverlay} onClick={() => setActiveStory(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveStory(null)}>✕</button>
            <div className={styles.modalImage}
              style={{ background: `radial-gradient(ellipse at 40% 40%, ${activeStory.batikColor}55 0%, #1a0e06 70%)` }}>
              {/* Batik pattern via SVG background */}
              <div className={styles.batikPattern}></div>
              <div className={styles.imageIcon}>{activeStory.icon}</div>
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalYear}>{activeStory.year}</span>
              <h3 className={styles.modalTitle}>{activeStory.title}</h3>
              <p className={styles.modalDesc}>{activeStory.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
