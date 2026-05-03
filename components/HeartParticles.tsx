'use client';
import { useEffect, useState } from 'react';
import styles from './HeartParticles.module.css';

interface Particle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
}

export default function HeartParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 30 heart particles with random positions, sizes, and animation speeds
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 10 + 8}px`, // sizes between 8px and 18px
      duration: `${Math.random() * 10 + 8}s`, // fall duration between 8s and 18s
      delay: `${Math.random() * 10}s`, // staggered start
      opacity: Math.random() * 0.5 + 0.3, // opacity between 0.3 and 0.8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((p) => (
        <div 
          key={p.id}
          className={styles.particle}
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            '--base-opacity': p.opacity,
          } as React.CSSProperties}
        >
          ❤
        </div>
      ))}
    </div>
  );
}
