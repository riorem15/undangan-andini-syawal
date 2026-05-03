'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './PuzzleGame.module.css';

const GRID = 3; // 3x3 puzzle
const TOTAL = GRID * GRID;
const PUZZLE_IMAGE = '/images/main foto andini.jpeg';

function createSolved() {
  return Array.from({ length: TOTAL }, (_, i) => i);
}

function shuffle(arr: number[]) {
  const a = [...arr];
  // Fisher-Yates shuffle, run multiple times to ensure solvable
  for (let i = a.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isSolved(tiles: number[]) {
  return tiles.every((v, i) => v === i);
}

export default function PuzzleGame() {
  const [tiles, setTiles] = useState<number[]>(createSolved());
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const [imgSize, setImgSize] = useState({ w: 300, h: 300 });

  const tileSize = imgSize.w / GRID;

  const startGame = useCallback(() => {
    let shuffled: number[];
    do { shuffled = shuffle(createSolved()); } while (isSolved(shuffled));
    setTiles(shuffled);
    setMoves(0);
    setStarted(true);
    setWon(false);
  }, []);

  const handleTileClick = (idx: number) => {
    if (!started || won) return;
    const emptyIdx = tiles.indexOf(TOTAL - 1); // last tile = empty
    const row = Math.floor(idx / GRID), col = idx % GRID;
    const eRow = Math.floor(emptyIdx / GRID), eCol = emptyIdx % GRID;
    const isAdjacent = (Math.abs(row - eRow) === 1 && col === eCol) ||
                        (Math.abs(col - eCol) === 1 && row === eRow);
    if (!isAdjacent) return;
    const newTiles = [...tiles];
    [newTiles[idx], newTiles[emptyIdx]] = [newTiles[emptyIdx], newTiles[idx]];
    setTiles(newTiles);
    setMoves(m => m + 1);
    if (isSolved(newTiles)) setWon(true);
  };

  useEffect(() => {
    const update = () => {
      const w = Math.min(300, window.innerWidth - 80);
      setImgSize({ w, h: w });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}><span className="name-font">Mini Puzzle</span></h2>
      <p className={styles.subtitle}>Susun kepingan foto kami! Klik kepingan di sebelah kotak kosong untuk menggesernya.</p>

      <div className={styles.gameWrapper}>
        {/* Preview button */}
        <div className={styles.previewWrap}>
          <img src={PUZZLE_IMAGE} alt="Preview Puzzle"
            className={styles.preview}
            onError={e => { (e.currentTarget as HTMLImageElement).src = '/images/1.jpeg'; }}
          />
          <p className={styles.previewLabel}>Foto Asli</p>
        </div>

        {/* Board */}
        <div className={styles.boardWrap}>
          <div
            className={styles.board}
            style={{ width: imgSize.w, height: imgSize.h }}
          >
            {tiles.map((tile, idx) => {
              const isEmpty = tile === TOTAL - 1;
              const tileRow = Math.floor(tile / GRID);
              const tileCol = tile % GRID;
              return (
                <div
                  key={idx}
                  className={`${styles.tile} ${isEmpty ? styles.empty : ''}`}
                  style={{
                    width: tileSize,
                    height: tileSize,
                    backgroundImage: isEmpty ? 'none' : `url(${PUZZLE_IMAGE})`,
                    backgroundSize: `${imgSize.w}px ${imgSize.h}px`,
                    backgroundPosition: `-${tileCol * tileSize}px -${tileRow * tileSize}px`,
                  }}
                  onClick={() => handleTileClick(idx)}
                />
              );
            })}
          </div>
          <div className={styles.info}>
            <span className={styles.moves}>Langkah: <strong>{moves}</strong></span>
            <button className={styles.startBtn} onClick={startGame}>
              {started && !won ? '🔀 Acak Ulang' : '▶ Mulai'}
            </button>
          </div>
        </div>
      </div>

      {/* Win state */}
      {won && (
        <div className={styles.winBanner}>
          <div className={styles.winCard}>
            <p className={styles.winEmoji}>🎉</p>
            <h3 className={styles.winTitle}>Selamat!</h3>
            <p className={styles.winDesc}>Anda berhasil menyusun foto kami dalam <strong>{moves} langkah</strong>. Terima kasih sudah bermain!</p>
            <button className={styles.startBtn} onClick={startGame}>Main Lagi</button>
          </div>
        </div>
      )}
    </section>
  );
}
