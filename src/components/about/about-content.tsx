
import AboutMainContent from './about-main-content';
import TeamSection from './team-section';
import AboutVision from './about-vision';

export default function AboutContent() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <TeamSection />
        <AboutMainContent />
        <AboutVision />
      </div>
    </section>
  );
}
