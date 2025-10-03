
'use client';

import { RefObject } from 'react';

type AboutHeroProps = {
  videoRef: RefObject<HTMLVideoElement>;
};

export default function AboutHero({ videoRef }: AboutHeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        preload="auto"
        playsInline
        muted
        src="/videos/toprotate.mp4"
      >
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
  );
}
