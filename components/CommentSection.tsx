'use client';
import { useState, useEffect } from 'react';
import styles from './CommentSection.module.css';

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error('Failed to fetch comments', err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    setLoading(true);

    // Optimistic Update so user immediately sees their comment
    const optimisticComment = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toISOString()
    };
    
    setComments(prev => [...prev, optimisticComment]);
    setName('');
    setMessage('');
    
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: optimisticComment.name, message: optimisticComment.message }),
      });
      if (res.ok) {
        // Silently refresh in background
        fetchComments();
      }
    } catch (err) {
      console.error('Failed to post comment', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className="script-font text-gold">Buku Tamu</h2>
      <p className={styles.subtitle}>Tinggalkan doa dan harapan Anda untuk kami.</p>

      <div className={styles.container}>
        <div className={`glass-panel ${styles.formContainer}`}>
          <h3>Kirim Ucapan</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nama Anda" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              maxLength={50}
            />
            <textarea 
              placeholder="Tulis ucapan dan doa..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4} 
              required 
              maxLength={300}
            />
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </form>
        </div>

        <div className={`glass-panel ${styles.commentsWrapper}`}>
          <h3>Ucapan dari Tamu</h3>
          <div className={styles.commentsList}>
            {comments.slice().reverse().map(comment => (
              <div key={comment.id} className={styles.commentCard}>
                <div className={styles.commentHeader}>
                  <strong>{comment.name}</strong>
                  <small>{new Date(comment.date).toLocaleDateString('id-ID')}</small>
                </div>
                <p>{comment.message}</p>
              </div>
            ))}
            {comments.length === 0 && <p style={{textAlign: 'center', opacity: 0.7}}>Jadilah yang pertama memberi ucapan!</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
