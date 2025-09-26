
"use client";

import { useState, useEffect } from 'react';
import BenefitsSection from '@/components/home/benefits-section';
import HeroSection from '@/components/home/hero-section';
import ProductIntroSection from '@/components/home/product-intro-section';
import IntroVideo from '@/components/home/intro-video';

const SESSION_STORAGE_KEY = 'hydrochill_intro_played';

export default function Home() {
  const [showVideo, setShowVideo] = useState<boolean | null>(null);

  useEffect(() => {
    // This logic runs only on the client, after the initial render.
    const introPlayed = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!introPlayed) {
      setShowVideo(true);
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } else {
      setShowVideo(false);
    }
  }, []);

  const handleVideoComplete = () => {
    setShowVideo(false);
  };
  
  if (showVideo === null) {
    // Render nothing on the server and during the initial client render
    // to prevent hydration mismatch.
    return null;
  }

  return (
    <div className="flex flex-col min-h-dvh">
      {showVideo ? (
        <IntroVideo onComplete={handleVideoComplete} />
      ) : (
        <main className="flex-1">
          <HeroSection />
          <BenefitsSection />
          <ProductIntroSection />
        </main>
      )}
    </div>
  );
}
