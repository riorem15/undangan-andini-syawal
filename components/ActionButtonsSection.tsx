'use client';
import { useState } from 'react';
import styles from './ActionButtonsSection.module.css';

export default function ActionButtonsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  type ModalKey = 'date' | 'location' | 'card';
  type ModalContent = { title: string; content: string; isMap?: boolean };

  const modals: Record<ModalKey, ModalContent> = {
    date: { title: '30 Mei 2026', content: 'Tanggal ini adalah tanggal yang dinanti karena kami akan mengikat janji suci untuk selamanya. Kami sangat berharap kehadiran Anda.' },
    location: { title: 'Lokasi Resepsi', content: 'Gedung Serbaguna Impian, Jl. Cinta Damai No. 123, Jakarta. Klik tombol di bawah untuk membuka Google Maps.', isMap: true },
    card: { title: 'Terima Kasih', content: 'Terima kasih atas segala doa dan dukungan Anda. Kehadiran Anda adalah hadiah terbesar bagi kami berdua.' }
  };

  return (
    <section className={styles.section}>
      <div className={styles.buttonsContainer}>
        <button className={styles.actionBtn} onClick={() => setActiveModal('date')}>
          <span className={styles.icon}>📅</span>
          <span>Tanggal</span>
        </button>
        <button className={styles.actionBtn} onClick={() => setActiveModal('location')}>
          <span className={styles.icon}>📍</span>
          <span>Lokasi</span>
        </button>
        <button className={styles.actionBtn} onClick={() => setActiveModal('card')}>
          <span className={styles.icon}>💌</span>
          <span>Ucapan</span>
        </button>
      </div>

      {activeModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>×</button>
            <h3 className="script-font text-gold">{modals[activeModal as ModalKey].title}</h3>
            <p>{modals[activeModal as ModalKey].content}</p>
            {modals[activeModal as ModalKey].isMap && (
               <a href="https://maps.google.com/?q=-6.200000,106.816666" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Buka di Google Maps</a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
