import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#062b3d]">
      
      {/* Fallback background */}
      <div className="absolute inset-0 bg-[#062b3d]" />

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center scale-110 md:scale-100"
        src="/wedding-animated-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Sky-blue cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.55 0.13 230 / 0.35) 0%, oklch(0.35 0.13 240 / 0.55) 60%, oklch(0.2 0.1 245 / 0.72) 100%)",
        }}
      />

      {/* Floating particles */}
      <Particles count={35} color="oklch(1 0 0 / 0.9)" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="font-script text-3xl md:text-6xl leading-[1.35] py-2 overflow-visible mb-4 drop-shadow-2xl"
          style={{ color: "oklch(0.95 0.03 220)" }}
        >
          We're getting married
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl leading-tight tracking-wide drop-shadow-2xl"
        >
          Amrutha

          <span className="block font-script text-3xl md:text-5xl leading-[1.35] py-2 opacity-90">
            &
          </span>

          Davis
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-6 h-px w-40 md:w-64"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.8), transparent)",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mt-6 max-w-2xl text-sm md:text-lg italic opacity-95 font-display leading-relaxed px-2"
        >
          Together with their families, invite you to celebrate
          their engagement & wedding
        </motion.p>

        {/* Dates */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.7 }}
          className="mt-8 flex items-center gap-4 md:gap-10 text-[10px] md:text-base tracking-[0.3em] uppercase text-white/90"
        >
          <span>Oct 21, 2026</span>

          <span className="opacity-60">◆</span>

          <span>Oct 24, 2026</span>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-80"
        >
          <span className="block">Scroll</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mx-auto mt-2 h-8 w-px bg-white/70"
          />
        </motion.div>
      </div>
    </section>
  );
}