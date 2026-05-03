import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ornament}>❧</div>
      <div className={styles.signature}>
        <p className={styles.tertanda}>Tertanda,</p>
        <p className={styles.names}>Andini & Syawal</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.branding}>
        <p className={styles.made}>Dibuat dengan ❤ oleh</p>
        <p className={styles.agency}>Jasa Undangan Digital</p>
        <div className={styles.contacts}>
          <a href="https://instagram.com/riorem15" target="_blank" rel="noreferrer" className={styles.contact}>
            <span>📸</span> @Riorem15
          </a>
          <a href="mailto:Riorefki2@gmail.com" className={styles.contact}>
            <span>✉</span> Riorefki2@gmail.com
          </a>
        </div>
      </div>
      <p className={styles.copy}>© 2026 Undangan Digital Andini & Syawal. All rights reserved.</p>
    </footer>
  );
}
