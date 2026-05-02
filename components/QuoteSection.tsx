import styles from './QuoteSection.module.css';

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div className={styles.bismillah}>﷽</div>
          <p className={styles.arabic}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className={styles.translation}>
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <p className={styles.surah}>(Q.S. Ar-Rum: 21)</p>
        </div>
      </div>
    </section>
  );
}
