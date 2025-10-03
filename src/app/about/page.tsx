
'use client';

import AboutHero from '@/components/about/about-hero';
import AboutMainContent from '@/components/about/about-main-content';
import TeamSection from '@/components/about/team-section';
import AboutVision from '@/components/about/about-vision';

export default function AboutPage() {
  return (
    <div className="animate-fade-in-up">
      <AboutHero />
      <TeamSection />
      <AboutMainContent />
      <AboutVision />
    </div>
  );
}
