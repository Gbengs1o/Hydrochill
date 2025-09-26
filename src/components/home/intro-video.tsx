
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// YouTube Video ID from the URL: https://youtu.be/zI-raje6Qpc
const VIDEO_ID = 'zI-raje6Qpc';
const VIDEO_DURATION_MS = 23000; // 23 seconds

type IntroVideoProps = {
  onComplete: () => void;
};

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, VIDEO_DURATION_MS);

    // The onComplete callback will be triggered by the onAnimationEnd event
    // which happens after the fade-out animation (1s) completes.

    return () => clearTimeout(fadeTimer);
  }, []);

  const handleAnimationEnd = () => {
    // This function is called when the fade-out animation finishes
    onComplete();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-black transition-opacity duration-1000",
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
      onTransitionEnd={handleAnimationEnd}
    >
      <iframe
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=0&modestbranding=1&iv_load_policy=3`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
