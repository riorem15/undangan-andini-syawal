'use client';
import { useState } from 'react';
import styles from './WeddingGiftSection.module.css';

export default function WeddingGiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className={styles.section}>
      <h2 className="script-font text-gold">Kado Pernikahan</h2>
      <p className={styles.desc}>Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
      
      <div className={styles.cardsContainer}>
        <div className={`glass-panel ${styles.bankCard}`}>
          <h3>BNI</h3>
          <p className={styles.accountNumber}>1808502393</p>
          <p className={styles.accountName}>a.n Syawal</p>
          <button onClick={() => handleCopy('1808502393', 'bni')} className={styles.copyBtn}>
            {copied === 'bni' ? 'Tersalin!' : 'Salin No. Rekening'}
          </button>
        </div>

        <div className={`glass-panel ${styles.bankCard}`}>
          <h3>DANA</h3>
          <p className={styles.accountNumber}>08878821542</p>
          <p className={styles.accountName}>a.n Andini</p>
          <button onClick={() => handleCopy('08878821542', 'dana')} className={styles.copyBtn}>
            {copied === 'dana' ? 'Tersalin!' : 'Salin No. HP'}
          </button>
        </div>
      </div>

      <div className={`glass-panel ${styles.giftForm}`}>
        <h3>Konfirmasi Pengiriman Hadiah</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih atas hadiah Anda!'); }}>
          <input type="text" placeholder="Nama Anda" required />
          <input type="number" placeholder="Nominal (Rp)" required />
          <textarea placeholder="Pesan untuk kami" rows={3} required></textarea>
          <button type="submit" className={styles.submitBtn}>Kirim Konfirmasi</button>
        </form>
      </div>
    </section>
  );
}
