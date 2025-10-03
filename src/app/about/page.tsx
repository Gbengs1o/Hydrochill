
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const scrollSection = scrollSectionRef.current;

    if (!video || !scrollSection) return;

    // We need to load the video's metadata to get its duration.
    video.load();

    const handleScroll = () => {
      // Calculate how far the user has scrolled through the "scrollSection"
      const { top, height } = scrollSection.getBoundingClientRect();
      
      // We want the video to play out over the height of the scroll section.
      // We add window.innerHeight so the effect starts as the section enters the viewport.
      const scrollableHeight = height - window.innerHeight;
      
      // Calculate the scroll progress within the section (from 0 to 1)
      let scrollProgress = -top / scrollableHeight;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // Clamp between 0 and 1

      // If the video has a duration, update its current time based on scroll progress
      if (video.duration) {
        video.currentTime = scrollProgress * video.duration;
      }
    };
    
    // We can't immediately get the duration, so we wait for the metadata to load.
    const onMetadataLoaded = () => {
       // Start listening to scroll events only after we have video info.
       window.addEventListener('scroll', handleScroll, { passive: true });
    };

    video.addEventListener('loadedmetadata', onMetadataLoaded);

    // Cleanup: remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', onMetadataLoaded);
    };
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Page Header */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
         {/* Background Video */}
         <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            preload="auto"
            playsInline
            muted
          >
            <source src="https://res.cloudinary.com/dipeanbvi/video/upload/v1758907835/Untitled_video_-_Made_with_Clipchamp_vpzm9u.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

         <div className="relative z-20 container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
              About <span className="text-gradient">HydroChill</span>
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-white/80 md:text-xl">
              We are innovators, health enthusiasts, and environmental stewards, dedicated to redefining how the world drinks water.
            </p>
          </div>
      </section>

      {/* This ref is used to define the scrollable area that controls the video */}
      <div ref={scrollSectionRef}>
        {/* Main Content */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight font-headline">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To empower individuals to lead healthier lives by providing access to pure, great-tasting water anytime, anywhere. We believe that superior technology and thoughtful design can solve the fundamental challenges of hydration, making it simple, safe, and sustainable.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight font-headline">The HydroChill Story</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Born from a desire to merge cutting-edge technology with everyday wellness, HydroChill started as a simple idea: what if your water bottle could do more? Our founders, a team of engineers and designers, were tired of single-use plastics and questionably clean reusable bottles. They envisioned a product that not only kept water cold but also purified it on the go, creating a truly seamless and worry-free hydration experience. After years of research and development, the HydroChill smart bottle was born.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight font-headline">Our Vision for the Future</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We see a future where clean water is not a luxury, but a standard. HydroChill is just the beginning. We are committed to expanding our ecosystem of smart hydration products, pushing the boundaries of innovation to promote global health and reduce environmental impact. We're not just building a brand; we're building a movement towards a healthier planet and healthier people.
                  </p>
                </div>
              </div>
              {aboutImage && (
                <div className="flex justify-center">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
