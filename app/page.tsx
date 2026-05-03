import EnvelopeSection from '../components/EnvelopeSection';
import QuoteSection from '../components/QuoteSection';
import ProfileSection from '../components/ProfileSection';
import EventDetailsSection from '../components/EventDetailsSection';
import StoryMapSection from '../components/StoryMapSection';
import GallerySection from '../components/GallerySection';
import PuzzleGame from '../components/PuzzleGame';
import ActionButtonsSection from '../components/ActionButtonsSection';
import WeddingGiftSection from '../components/WeddingGiftSection';
import CommentSection from '../components/CommentSection';
import FooterSection from '../components/FooterSection';

import RevealWrapper from '../components/RevealWrapper';

export default function Home() {
  return (
    <main className="premium-section">
      <EnvelopeSection />
      <RevealWrapper><QuoteSection /></RevealWrapper>
      <RevealWrapper><ProfileSection /></RevealWrapper>
      <RevealWrapper><EventDetailsSection /></RevealWrapper>
      <RevealWrapper><StoryMapSection /></RevealWrapper>
      <GallerySection />
      <RevealWrapper><PuzzleGame /></RevealWrapper>
      <RevealWrapper><ActionButtonsSection /></RevealWrapper>
      <RevealWrapper><WeddingGiftSection /></RevealWrapper>
      <RevealWrapper><CommentSection /></RevealWrapper>
      <FooterSection />
    </main>
  );
}
