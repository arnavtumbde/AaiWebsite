import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// A simple floating particles component for that unorthodox interactive beauty
const FloatingParticles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {[...Array(15)].map((_, i) => {
        const speed = (i % 5) + 1;
        const xOffset = (mousePosition.x / window.innerWidth - 0.5) * 50 * speed;
        const yOffset = (mousePosition.y / window.innerHeight - 0.5) * 50 * speed;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-warm-rust/20 blur-sm"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
            animate={{
              x: xOffset,
              y: yOffset,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          />
        );
      })}
    </div>
  );
};

export default function AboutAstitva() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color interpolation from Charcoal to Soft Pearl at 50%
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['#111827', '#111827', '#FAFAFA', '#FAFAFA']
  );

  // Text color interpolations
  const mainTextColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['#FAFAFA', '#FAFAFA', '#111827', '#111827']
  );

  const accentTextColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['#9CA3AF', '#9CA3AF', '#475569', '#475569']
  );

  // Ink bleed scale
  const inkScale = useTransform(scrollYProgress, [0, 0.15], [1, 100]);
  const inkOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);

  // 'अ' rotation
  const aRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const aOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 0.05, 0.05, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full min-h-[400vh] transition-colors duration-700 ease-out font-playfair"
    >
      <FloatingParticles />

      {/* Section 1: The Witness (Dark Prologue) - 0 to 25% */}
      <div className="h-[100vh] sticky top-0 flex flex-col items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ scale: inkScale, opacity: inkOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          {/* Abstract Ink Bleed Shape */}
          <div className="w-10 h-10 bg-warm-rust rounded-full blur-xl opacity-30" />
        </motion.div>

        <motion.div
          className="z-10 text-center max-w-3xl"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]) }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair text-warm-pearl mb-8 tracking-wide"
          >
            We speak of her silence.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-xl md:text-2xl font-sans font-medium text-slate-400 mb-6 italic"
          >
            "Before we knew her words, we knew the weight of her silence. We are the ink she saved for later."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            style={{ fontFamily: "'Tiro Marathi', serif" }}
            className="text-2xl md:text-3xl text-warm-pearl"
          >
            तिच्या शांततेत आमचे शब्द दडलेले होते.
          </motion.p>
        </motion.div>
      </div>

      {/* Section 2: The Unfolding (Sticky Side Scrolling) - 25% to 50% */}
      <div className="h-[100vh] relative z-20 pointer-events-none">
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            opacity: aOpacity,
            rotate: aRotation,
            fontFamily: "'Tiro Marathi', serif"
          }}
        >
          <span className="text-[40vw] text-warm-pearl/20 leading-none select-none">अ</span>
        </motion.div>

        <motion.div
          className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24"
          style={{
            opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]),
            y: useTransform(scrollYProgress, [0.2, 0.3], [100, 0])
          }}
        >
          <div className="md:w-1/2 flex flex-col gap-8 max-w-xl">
            {/* Child 1 Voice */}
            <p className="text-2xl md:text-4xl font-playfair font-bold text-warm-pearl">
              We watched her hands rewrite a script she never chose.
            </p>
            {/* Child 2 Voice */}
            <p className="text-xl md:text-2xl font-sans italic text-slate-400">
              She didn't just survive; she was drafting a masterpiece.
            </p>

            <p style={{ fontFamily: "'Tiro Marathi', serif" }} className="text-2xl md:text-4xl text-warm-rust mt-4">
              आम्ही पाहिलेय तिला... शाई आणि संघर्षातून स्वतःला घडवताना.
            </p>
          </div>

          <div className="md:w-1/2 h-64 md:h-96 w-full mt-12 md:mt-0 relative grayscale contrast-125">
            <img
              src="/mountainsmumma.png"
              alt="Resilience"
              className="object-cover w-full h-full rounded-sm shadow-2xl opacity-80 mix-blend-luminosity"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 3: The Lesson (Transition to Light) - 50% to 75% */}
      <div className="h-[100vh] relative z-30 pointer-events-none">
        <motion.div
          className="sticky top-0 h-screen flex flex-col items-center justify-center px-6"
          style={{
            opacity: useTransform(scrollYProgress, [0.45, 0.6, 0.8, 0.9], [0, 1, 1, 0]),
            color: mainTextColor
          }}
        >
          <div className="max-w-4xl w-full text-center relative">
            {/* Floating Collage Images */}
            <motion.img
              src="/withclass.png"
              alt="Teaching"
              className="absolute -top-32 -left-12 md:-left-32 w-48 md:w-72 h-64 md:h-96 object-cover shadow-2xl rounded-sm -rotate-6"
              style={{ y: useTransform(scrollYProgress, [0.5, 0.8], [100, -50]) }}
            />
            <motion.img
              src="/classbg.png"
              alt="Writing"
              className="absolute -bottom-32 -right-12 md:-right-32 w-56 md:w-80 h-48 md:h-72 object-cover shadow-2xl rounded-sm rotate-3"
              style={{ y: useTransform(scrollYProgress, [0.5, 0.8], [-50, 100]) }}
            />

            <motion.div className="relative z-10 bg-warm-pearl/80 backdrop-blur-md p-8 md:p-16 shadow-xl border border-warm-rust/10">
              <p className="text-2xl md:text-5xl font-playfair mb-6 leading-tight text-deep-charcoal">
                She taught a classroom by day, <br className="hidden md:block" />
                <span className="italic font-sans text-xl md:text-3xl text-slate-gray block mt-4">
                  but at night, she taught us the geometry of hope.
                </span>
              </p>
              <p style={{ fontFamily: "'Tiro Marathi', serif" }} className="text-3xl md:text-4xl text-warm-rust">
                ती फक्त आमची आई नाही, ती एक जळती ज्योत आहे.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section 4: The Astitva Reveal - 75% to 100% */}
      <div className="h-[100vh] relative z-40">
        <motion.div
          className="sticky top-0 h-screen flex flex-col items-center justify-center px-6"
          style={{
            opacity: useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1])
          }}
        >
          <div className="text-center max-w-4xl relative w-full flex flex-col items-center justify-center">

            {/* New Grown up photos */}
            <motion.img
              src="/us-as-grown-2.jpg"
              alt="Us grown up"
              className="absolute hidden md:block top-0 -left-12 lg:-left-24 w-40 md:w-56 h-auto object-cover shadow-2xl rounded-sm -rotate-6 z-0"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            />

            <motion.img
              src="/us-as-grown.jpg"
              alt="Us grown up 2"
              className="absolute hidden md:block bottom-32 -right-12 lg:-right-24 w-48 md:w-64 h-auto object-cover shadow-2xl rounded-sm rotate-3 z-0"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            />

            <div className="relative z-10 bg-warm-pearl/60 backdrop-blur-sm p-8 rounded-xl">
              <p className="text-xl md:text-2xl font-sans italic text-slate-gray mb-6">
                She is no longer a shadow in someone else’s story. <br />
                She is the author of her own peace. This is her Astitva.
              </p>
              <p style={{ fontFamily: "'Tiro Marathi', serif" }} className="text-2xl md:text-3xl text-deep-charcoal mb-16">
                हे तिचे अस्तित्व. आमची आई.
              </p>

              <motion.div
                className="relative inline-block mt-8"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img
                  src="/name.png"
                  alt="Sonali Signature"
                  className="h-32 md:h-48 object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
}
