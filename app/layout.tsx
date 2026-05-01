import './globals.css';
import type { Metadata } from 'next';
import MusicPlayer from '../components/MusicPlayer';
import DustParticles from '../components/DustParticles';

export const metadata: Metadata = {
  title: 'The Wedding of Andini & Sawal',
  description: 'Undangan pernikahan elektronik premium Andini & Sawal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <DustParticles />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
