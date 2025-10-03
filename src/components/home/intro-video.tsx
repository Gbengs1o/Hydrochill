
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const VIDEO_DURATION_SECONDS = 14;

type IntroVideoProps = {
  onComplete: () => void;
};

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    // Since we can't get events from the iframe, we'll use a timer.
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const currentProgress = (elapsedTime / VIDEO_DURATION_SECONDS) * 100;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
      } else {
        setProgress(100);
      }
    }, 100);

    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, VIDEO_DURATION_SECONDS * 1000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearInterval(progressInterval);
    };
  }, [hasStarted]);

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      onComplete();
    }
  };

  const handlePlayClick = () => {
    setHasStarted(true);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-black transition-opacity duration-1000",
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
      onTransitionEnd={handleAnimationEnd}
    >
      {!hasStarted ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black">
          <h1 className="text-4xl font-extrabold text-white mb-8">Welcome to HydroChill</h1>
          <Button onClick={handlePlayClick} size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
            <PlayCircle className="mr-2 h-5 w-5" />
            Click to Begin
          </Button>
        </div>
      ) : (
        <>
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dipeanbvi&public_id=Untitled_video_-_Made_with_Clipchamp_vpzm9u&profile=cld-default&autoplay=true&mute=1"
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media; picture-in-picture"
            style={{ border: 'none' }}
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
        </>
      )}
    </div>
  );
}
