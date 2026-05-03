import EnvelopeSection from '../components/EnvelopeSection';
import QuoteSection from '../components/QuoteSection';
import ProfileSection from '../components/ProfileSection';
import EventDetailsSection from '../components/EventDetailsSection';
import StoryMapSection from '../components/StoryMapSection';
import GallerySection from '../components/GallerySection';
import ActionButtonsSection from '../components/ActionButtonsSection';
import WeddingGiftSection from '../components/WeddingGiftSection';
import RSVPSection from '../components/RSVPSection';
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
      <RevealWrapper><ActionButtonsSection /></RevealWrapper>
      <RevealWrapper><WeddingGiftSection /></RevealWrapper>
      <RevealWrapper><RSVPSection /></RevealWrapper>
      <RevealWrapper><CommentSection /></RevealWrapper>
      <FooterSection />
    </main>
  );
}

