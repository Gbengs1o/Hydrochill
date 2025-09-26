import BenefitsSection from '@/components/home/benefits-section';
import HeroSection from '@/components/home/hero-section';
import ProductIntroSection from '@/components/home/product-intro-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ProductIntroSection />
      </main>
    </div>
  );
}
