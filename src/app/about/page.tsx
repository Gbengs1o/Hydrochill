
'use client';

import { useEffect, useRef } from 'react';
import AboutHero from '@/components/about/about-hero';
import AboutMainContent from '@/components/about/about-main-content';
import TeamSection from '@/components/about/team-section';
import AboutVision from '@/components/about/about-vision';

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const scrollSection = scrollSectionRef.current;

    if (!video || !scrollSection) return;

    const handleScroll = () => {
      const { top, height } = scrollSection.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      let scrollProgress = -top / scrollableHeight;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress)); 

      if (video.duration) {
        video.currentTime = scrollProgress * video.duration;
      }
    };
    
    const onMetadataLoaded = () => {
       window.addEventListener('scroll', handleScroll, { passive: true });
    };

    video.addEventListener('loadedmetadata', onMetadataLoaded);
    // Ensure metadata is loaded if video is cached
    if (video.readyState >= 1) {
      onMetadataLoaded();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', onMetadataLoaded);
    };
  }, []);

  return (
    <div className="animate-fade-in-up">
      <AboutHero videoRef={videoRef} />
      {/* This ref is used to define the scrollable area that controls the video */}
      <div ref={scrollSectionRef}>
        <TeamSection />
        <AboutMainContent />
        <AboutVision />
      </div>
    </div>
  );
}
