import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gem, Shield, Smartphone, ThermometerSnowflake, Sparkles, Droplet, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'UV-C Purification',
    description: 'Neutralizes 99.9% of harmful bio-contaminants in 60 seconds. Enjoy pure water from any source, worry-free.',
    details: [
      'Medical-grade UV-C LED technology',
      'Automatic purification every 2 hours',
      'Eliminates bacteria, viruses, and protozoa',
      'Safe, chemical-free purification'
    ],
    media: 'https://www.youtube.com/embed/fHCkbRKn6K8?autoplay=1&mute=1&loop=1&playlist=fHCkbRKn6K8&controls=0&showinfo=0&modestbranding=1&rel=0',
    color: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'text-blue-500',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Temp-Lock Insulation',
    description: 'Double-wall vacuum insulation keeps drinks cold for up to 24 hours or hot for 12 hours. The perfect temperature, guaranteed.',
    details: [
      'Triple-layer vacuum insulation',
      'Cold for 24+ hours, hot for 12+ hours',
      'No condensation on exterior',
      'Temperature-sensitive LED indicator'
    ],
    media: 'https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/10/eclips.png',
    color: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Smart Hydration Tracking',
    description: 'A sensor in the cap tracks your intake and syncs with our app, providing personalized goals and reminders.',
    details: [
      'Real-time hydration monitoring',
      'AI-powered personalized goals',
      'Weather and activity-based reminders',
      'Integration with Apple Health & Google Fit'
    ],
    media: 'https://www.youtube.com/embed/WorMHAGBqvM?autoplay=1&mute=1&loop=1&playlist=WorMHAGBqvM&controls=0&showinfo=0&modestbranding=1&rel=0',
    color: 'from-green-500/20 to-emerald-500/20',
    accentColor: 'text-green-500',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Crafted from surgical-grade 18/8 stainless steel and BPA-free plastics for durability and a pure taste.',
    details: [
      'Surgical-grade 18/8 stainless steel',
      'BPA-free, food-safe materials',
      'Scratch-resistant powder coating',
      'Dishwasher safe components'
    ],
    media: 'https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/10/slide.png',
    color: 'from-amber-500/20 to-orange-500/20',
    accentColor: 'text-amber-500',
  },
];

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const Icon = feature.icon;
  const isVideo = feature.media.includes('youtube');
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Different animation styles for each card
  const animationStyles = [
    // Style 1: Slide from left with rotation
    {
      x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['-100%', '0%', '0%', '100%']),
      rotate: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-10, 0, 0, 10]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    },
    // Style 2: Scale up with parallax
    {
      scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]),
      y: useTransform(scrollYProgress, [0, 0.5, 1], ['20%', '0%', '-20%']),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    },
    // Style 3: Slide from right with perspective
    {
      x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['100%', '0%', '0%', '-100%']),
      rotateY: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [45, 0, 0, -45]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    },
    // Style 4: Fade and float up
    {
      y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['30%', '0%', '0%', '-30%']),
      scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1.05, 1.05, 0.9]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    },
  ];

  const style = animationStyles[index % 4];

  // Layout alternates between left and right
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative min-h-screen flex items-center py-20">
      <motion.div
        style={style}
        className="w-full max-w-7xl mx-auto px-4 md:px-6"
      >
        <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
          {/* Content side */}
          <div className={`space-y-6 ${!isEven ? 'md:order-2' : ''}`}>
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10`}
            >
              <Icon className={`h-10 w-10 ${feature.accentColor}`} />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold font-headline"
            >
              {feature.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {feature.description}
            </motion.p>

            {/* Detail points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 pt-4"
            >
              {feature.details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`mt-1 h-2 w-2 rounded-full ${feature.accentColor} bg-current flex-shrink-0`} />
                  <span className="text-muted-foreground">{detail}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute -top-20 ${isEven ? '-left-20' : '-right-20'} w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl -z-10`}
            />
          </div>

          {/* Media side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${!isEven ? 'md:order-1' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-white/10">
              {isVideo ? (
                <div className="aspect-video">
                  <iframe
                    src={feature.media}
                    className="w-full h-full"
                    allow="autoplay; loop"
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                <div className="aspect-square md:aspect-video">
                  <img
                    src={feature.media}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Overlay glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} mix-blend-overlay pointer-events-none`} />
              
              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full blur-xl`} />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-6 -right-6 px-4 py-2 bg-gradient-to-r ${feature.color} backdrop-blur-xl rounded-full border border-white/20 shadow-lg`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className={`h-4 w-4 ${feature.accentColor}`} />
                <span className="text-sm font-bold">Featured</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* Section header */}
      <div className="container px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cutting-Edge Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline">
            Experience the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is meticulously engineered to elevate your hydration experience to unprecedented levels.
          </p>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="relative">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}