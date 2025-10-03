
"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PlayCircle, Volume2, VolumeX } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type IntroVideoProps = {
  onComplete: () => void;
};

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasStarted || !videoRef.current) return;

    const video = videoRef.current;
    video.muted = isMuted;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleVideoEnd = () => {
      setIsFadingOut(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);

    video.play().catch(error => {
      console.error("Video play failed:", error);
      // If autoplay fails, we might want to show the play button again
      setHasStarted(false);
    });

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [hasStarted, isMuted]);

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      onComplete();
    }
  };

  const handlePlayClick = () => {
    setHasStarted(true);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
        videoRef.current.muted = !isMuted;
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
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
            <div className="w-1/3 max-w-sm flex flex-col items-center text-white text-center">
                <p className="text-lg font-semibold tracking-wider mb-4">Experience the future...</p>
                <div className="relative w-full">
                  <Progress value={progress} className="w-full h-2 bg-white/20" />
                  <span className="absolute right-0 -bottom-6 text-sm font-mono">{Math.round(progress)}%</span>
                </div>
            </div>
          </div>
          <Button
            onClick={toggleMute}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white"
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
            <span className="sr-only">Toggle mute</span>
          </Button>
        </>
      )}
    </div>
  );
}
