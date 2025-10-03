'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion from framer-motion
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

// Define animation variants for a "fade up" effect
const fadeUp = {
  initial: {
    opacity: 0,
    y: 40, // Start 40px below its final position
  },
  animate: {
    opacity: 1,
    y: 0, // Animate to its final position
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99], // A nice easing function
    },
  },
};

export default function ConceptPhaseSection() {
  return (
    <section id="concept-section" className="w-full py-20 md:py-28 lg:py-36 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* 1. Animate the Intro Section */}
        <motion.div
          className="max-w-3xl text-center mx-auto mb-16 md:mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-6">
            FROM CONCEPT
            <br />
            TO <span className="text-gradient">REALITY</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The HydroChill bottle is more than an idea; it's a journey of innovation. We're currently in the most exciting phase—turning a revolutionary concept into a tangible reality. Scroll down to see how we're doing it.
          </p>
        </motion.div>

        {/* 2. The Animated Journey (Timeline) */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-2 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
          
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                // NEW: Each step is now a `motion.div` that animates into view
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6"
                  initial="initial"        // The state before it enters the viewport
                  whileInView="animate"   // The state to animate to when in view
                  viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the element is visible, and only once
                  variants={fadeUp}       // Use our predefined fadeUp animation
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-card">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </span>
                  </div>
                  <div className="flex-grow pt-1.5">
                    <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{step.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* 3. Animate the Outro/CTA Section */}
        <motion.div
          className="max-w-3xl text-center mx-auto mt-16 md:mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Be Part of the Story</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is where innovation happens. By following our journey, you get a front-row seat to the creation of the future of hydration. We'll be sharing updates, behind-the-scenes content, and exclusive early access opportunities.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
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