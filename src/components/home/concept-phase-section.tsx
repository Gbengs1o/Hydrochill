'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lightbulb, PencilRuler, BotMessageSquare, TestTubeDiagonal, Rocket } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Lightbulb,
    title: 'The Spark of Innovation',
    description: 'It all started with a simple question: "How can we make hydration smarter and more refreshing?" The idea for a self-chilling, intelligent water bottle was born.',
  },
  {
    icon: PencilRuler,
    title: 'Blueprint & Design',
    description: 'Our team of engineers and designers spent months sketching, modeling, and creating the blueprints. We focused on a sleek, ergonomic design that houses powerful, yet compact, cooling technology.',
  },
  {
    icon: BotMessageSquare,
    title: 'The First Prototype',
    description: 'This is where we are now. The first functional HydroChill prototype is in our hands. It\'s a testament to our vision, but the journey is far from over. We are actively testing and gathering data.',
  },
  {
    icon: TestTubeDiagonal,
    title: 'Rigorous Testing & Refinement',
    description: 'Every component, from the cooling engine to the battery life and insulation, is undergoing rigorous testing. We are using feedback to refine the design for optimal performance and durability.',
  },
  {
    icon: Rocket,
    title: 'Launch & The Future',
    description: 'Our goal is to bring the perfected HydroChill bottle to the world. This isn\'t just a product; it\'s the next step in personal hydration technology. And this is just the beginning.',
  },
];

function RoadmapStep({ step, index, totalSteps, progress }) {
  const Icon = step.icon;
  const stepRef = useRef(null);

  // Calculate animation ranges
  const stepStart = index / totalSteps;
  const stepEnd = (index + 1) / totalSteps;
  const stepMid = (stepStart + stepEnd) / 2;

  // More dramatic opacity curve
  const opacity = useTransform(
    progress,
    [
      Math.max(0, stepStart - 0.15), 
      stepStart, 
      stepMid, 
      stepEnd, 
      Math.min(1, stepEnd + 0.15)
    ],
    [0, 0.3, 1, 0.3, 0]
  );
  
  // Dramatic scale with overshoot
  const iconScale = useTransform(
    progress,
    [
      Math.max(0, stepStart - 0.1), 
      stepMid - 0.05,
      stepMid,
      stepMid + 0.05,
      Math.min(1, stepEnd + 0.1)
    ],
    [0.5, 1, 1.3, 1, 0.5]
  );
  
  // Content slides in from the side
  const contentX = useTransform(
    progress,
    [Math.max(0, stepStart - 0.1), stepMid, Math.min(1, stepEnd + 0.1)],
    [50, 0, -50]
  );

  // Icon glow effect
  const glowOpacity = useTransform(
    progress,
    [Math.max(0, stepStart - 0.05), stepMid, Math.min(1, stepEnd + 0.05)],
    [0, 1, 0]
  );

  return (
    <div ref={stepRef} className="relative">
      <motion.div
        style={{ opacity }}
        className="flex items-center gap-8"
      >
        {/* Icon circle with glow */}
        <div className="relative flex-shrink-0">
          {/* Animated glow ring */}
          <motion.div
            style={{ opacity: glowOpacity, scale: iconScale }}
            className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
          />
          
          {/* Icon container */}
          <motion.div
            style={{ scale: iconScale }}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg"
          >
            <Icon className="h-8 w-8 text-primary-foreground" />
          </motion.div>
        </div>
        
        {/* Content with slide animation */}
        <motion.div style={{ x: contentX }} className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">
            {step.title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ConceptPhaseSection() {
  const sectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ['start center', 'end center'],
  });

  // Draw the line progressively
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="concept-section" 
      ref={sectionRef} 
      className="w-full py-20 md:py-28 lg:py-36 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl text-center mx-auto mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-6"
          >
            OUR KINETIC
            <br />
            JOURNEY TO <span className="text-gradient">REALITY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Trace our path from a single spark of inspiration to a tangible revolution in hydration. 
            As you scroll, you're not just reading our story—you're revealing it.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={stepsContainerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line background */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-border/30 rounded-full" />
          
          {/* Animated vertical line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/50 rounded-full shadow-lg shadow-primary/20"
          />

          {/* Steps */}
          <div className="space-y-32 md:space-y-40 relative pl-24 md:pl-32 py-8">
            {roadmapSteps.map((step, index) => (
              <RoadmapStep
                key={index}
                step={step}
                index={index}
                totalSteps={roadmapSteps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center mx-auto mt-32 md:mt-40"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">The Story Continues...</h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            This is where innovation happens. By following our journey, you get a front-row seat to the 
            creation of the future of hydration. We'll be sharing updates, behind-the-scenes content, 
            and exclusive early access opportunities.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-10 py-6 text-base font-semibold tracking-wider uppercase rounded-full"
          >
            <Link href="/about">
              FOLLOW OUR JOURNEY
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}