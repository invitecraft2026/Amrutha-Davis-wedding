import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Sky-blue overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.55 0.13 230 / 0.35) 0%, oklch(0.35 0.13 240 / 0.55) 60%, oklch(0.2 0.1 245 / 0.7) 100%)",
        }}
      />
      <Particles count={35} color="oklch(1 0 0 / 0.9)" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="font-script text-4xl md:text-6xl mb-4 drop-shadow-2xl"
          style={{ color: "oklch(0.95 0.03 220)" }}
        >
          We're getting married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl leading-tight tracking-wide drop-shadow-2xl"
        >
          Amrutha
          <span className="block font-script text-3xl md:text-5xl my-2 opacity-90">&</span>
          Davis
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-6 h-px w-40 md:w-64"
          style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.8), transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mt-6 max-w-2xl text-base md:text-lg italic opacity-95 font-display"
        >
          Together with their families, invite you to celebrate their engagement & wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.7 }}
          className="mt-8 flex items-center gap-6 md:gap-10 text-sm md:text-base tracking-[0.3em] uppercase"
        >
          <span>Oct 21, 2026</span>
          <span className="opacity-60">◆</span>
          <span>Oct 24, 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] uppercase opacity-80"
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
