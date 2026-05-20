import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden">
      {/* Waves */}
      <div className="absolute inset-x-0 top-0 h-40 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-[200%] animate-wave h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" fill="oklch(0.85 0.07 220 / 0.5)" />
          <path d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" fill="oklch(0.85 0.07 220 / 0.5)" transform="translate(1200,0)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] animate-wave h-full opacity-70" style={{ animationDuration: "18s" }} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C400,20 800,140 1200,60 L1200,120 L0,120 Z" fill="oklch(0.6 0.13 230 / 0.4)" />
          <path d="M0,80 C400,20 800,140 1200,60 L1200,120 L0,120 Z" fill="oklch(0.6 0.13 230 / 0.4)" transform="translate(1200,0)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="mx-auto mb-6 h-24 w-24 rounded-full glass flex items-center justify-center animate-pulse-glow"
        >
          <span className="font-script text-4xl text-gradient-sky">A & D</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-4xl text-gradient-sky mb-4"
        >
          Thank you
        </motion.p>

        <p className="font-display text-lg md:text-xl italic text-foreground/90 max-w-xl mx-auto">
          Your presence will make our celebration truly special.
        </p>

        <div className="mx-auto mt-8 h-px w-32" style={{ background: "linear-gradient(90deg, transparent, var(--sky-mid), transparent)" }} />
        <p className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">
          Amrutha & Davis · October 2026
        </p>
      </div>
    </footer>
  );
}
