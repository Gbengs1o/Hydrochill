import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, Droplets } from 'lucide-react';

export default function FeaturesHero() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Floating particles data
  const particles = [
    { delay: 0, duration: 3, x: '10%', y: '20%' },
    { delay: 0.5, duration: 4, x: '85%', y: '15%' },
    { delay: 1, duration: 3.5, x: '15%', y: '75%' },
    { delay: 1.5, duration: 4.5, x: '80%', y: '70%' },
    { delay: 0.8, duration: 3.8, x: '50%', y: '10%' },
    { delay: 1.2, duration: 4.2, x: '45%', y: '85%' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-card via-card to-background overflow-hidden min-h-[70vh] flex items-center"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[900px] h-[900px] bg-primary/15 rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 px-4 md:px-6 py-20 md:py-28 text-center"
      >
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">Revolutionary Technology</span>
        </motion.div>

        {/* Main heading with stagger */}
        <div className="mb-6 space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline"
          >
            Unparalleled
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline">
              <span className="text-gradient">Innovation</span>
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed"
        >
          Discover the technology that sets HydroChill apart from any bottle
          you've ever owned.
        </motion.p>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12"
        >
          {[
            { icon: Zap, label: 'Instant Cooling', color: 'text-yellow-500' },
            { icon: Droplets, label: 'Smart Hydration', color: 'text-blue-500' },
            { icon: Sparkles, label: 'Premium Design', color: 'text-purple-500' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-sm font-semibold text-card-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-primary rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}