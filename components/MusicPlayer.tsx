'use client';
import { useState, useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Start playing automatically after user interaction (browser policy)
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
          setIsPlaying(false);
        });
      }
      document.removeEventListener('click', playMusic);
    };
    document.addEventListener('click', playMusic);

    return () => document.removeEventListener('click', playMusic);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Music/music.mp3" loop />
      <button 
        onClick={togglePlay}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'var(--gold-gradient)',
          border: 'none',
          color: '#3e2723',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: isPlaying ? 'spin 4s linear infinite' : 'none'
        }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
