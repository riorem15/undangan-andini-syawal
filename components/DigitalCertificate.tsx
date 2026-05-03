'use client';
import styles from './DigitalCertificate.module.css';

interface Props {
  onClose: () => void;
  guestName: string;
}

export default function DigitalCertificate({ onClose, guestName }: Props) {
  const handleDownload = () => {
    // Basic screenshot simulation by printing or asking to screenshot
    window.print();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.certificate} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.border}>
          <div className={styles.content}>
            <p className={styles.preTitle}>Sertifikat Terima Kasih</p>
            <h2 className={styles.mainTitle}>Tanda Kasih Online</h2>
            
            <div className={styles.divider}>✦</div>
            
            <p className={styles.text}>Diberikan kepada:</p>
            <p className={styles.guestName}>{guestName || 'Tamu Terhormat'}</p>
            
            <p className={styles.description}>
              Terima kasih yang sebesar-besarnya atas kado online dan tanda cinta yang Anda berikan. 
              Kebaikan Anda sangat berarti bagi awal perjalanan kehidupan baru kami.
            </p>
            
            <div className={styles.signature}>
              <p className={styles.tertanda}>Tertanda,</p>
              <h3 className="name-font">Andini & Syawaludin</h3>
            </div>
            
            <p className={styles.date}>30 Mei 2026</p>
          </div>
        </div>
        
        <button className={styles.downloadBtn} onClick={handleDownload}>
          ⬇ Simpan Sertifikat
        </button>
        <p className={styles.hint}>*Gunakan fitur screenshot untuk menyimpan di ponsel Anda</p>
      </div>
    </div>
  );
}
