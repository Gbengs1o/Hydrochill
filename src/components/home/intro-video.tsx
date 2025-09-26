
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

// YouTube Video ID from the URL: https://youtu.be/zI-raje6Qpc
const VIDEO_ID = 'zI-raje6Qpc';
const VIDEO_DURATION_MS = 23000; // 23 seconds

type IntroVideoProps = {
  onComplete: () => void;
};

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Timer to start fading out the video
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, VIDEO_DURATION_MS);

    // Interval to update the progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + (100 / (VIDEO_DURATION_MS / 100));
        return Math.min(nextProgress, 100);
      });
    }, 100);

    return () => {
      clearTimeout(fadeTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const handleAnimationEnd = () => {
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
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
       <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
        <div className="w-1/3 max-w-sm flex flex-col items-center text-white text-center">
            <p className="text-lg font-semibold tracking-wider mb-4">Experience the future...</p>
            <div className="relative w-full">
              <Progress value={progress} className="w-full h-2 bg-white/20" />
              <span className="absolute right-0 -bottom-6 text-sm font-mono">{Math.round(progress)}%</span>
            </div>
        </div>
      </div>
    </div>
  );
}
