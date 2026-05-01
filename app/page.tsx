import CoverSection from '../components/CoverSection';
import StoryMapSection from '../components/StoryMapSection';
import GallerySection from '../components/GallerySection';
import ActionButtonsSection from '../components/ActionButtonsSection';
import WeddingGiftSection from '../components/WeddingGiftSection';
import CommentSection from '../components/CommentSection';

import RevealWrapper from '../components/RevealWrapper';

export default function Home() {
  return (
    <main className="premium-section">
      <CoverSection />
      <RevealWrapper><StoryMapSection /></RevealWrapper>
      <RevealWrapper><GallerySection /></RevealWrapper>
      <RevealWrapper><ActionButtonsSection /></RevealWrapper>
      <RevealWrapper><WeddingGiftSection /></RevealWrapper>
      <RevealWrapper><CommentSection /></RevealWrapper>
    </main>
  );
}
