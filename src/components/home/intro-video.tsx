
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

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
  }, [onComplete]);

  const handleAnimationEnd = () => {
    // This function is called when the fade-out animation finishes
    if (isFadingOut) {
      onComplete();
    }
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
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
       <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
        <div className="flex flex-col items-center text-white">
          <Loader2 className="h-12 w-12 animate-spin mb-4" />
          <p className="text-xl font-semibold tracking-wider">SITE LOADING...</p>
        </div>
      </div>
    </div>
  );
}
