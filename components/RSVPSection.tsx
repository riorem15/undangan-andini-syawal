'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import styles from './RSVPSection.module.css';

export default function RSVPSection() {
  const [formData, setFormData] = useState({ name: '', guests: 1, status: 'Hadir' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('rsvp').insert([formData]);
    setLoading(false);
    if (!error) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.successCard}>
          <p className={styles.successEmoji}>✨</p>
          <h2 className="name-font">Terima Kasih!</h2>
          <p>Konfirmasi kehadiran Anda telah tersimpan. Sampai jumpa di hari bahagia kami!</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}><span className="name-font">Konfirmasi Kehadiran</span></h2>
        <p className={styles.subtitle}>Bantu kami mempersiapkan segalanya dengan memberikan konfirmasi kehadiran Anda.</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Nama Lengkap</label>
            <input 
              type="text" 
              required 
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Jumlah Tamu</label>
            <select 
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
            >
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Orang</option>)}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Status Kehadiran</label>
            <div className={styles.radioGroup}>
              {['Hadir', 'Tidak Hadir', 'Ragu-ragu'].map(s => (
                <label key={s} className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="status" 
                    value={s} 
                    checked={formData.status === s}
                    onChange={() => setFormData({...formData, status: s})}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Mengirim...' : 'Kirim Konfirmasi'}
          </button>
        </form>
      </div>
    </section>
  );
}
