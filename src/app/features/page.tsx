
'use client';

import ComparisonChart from '@/components/features/comparison-chart';
import FeaturesGrid from '@/components/features/features-grid';
import FeaturesHero from '@/components/features/features-hero';

export default function FeaturesPage() {
  return (
    <div className="animate-fade-in-up">
      <FeaturesHero />
      <FeaturesGrid />
      <ComparisonChart />
    </div>
  );
}
