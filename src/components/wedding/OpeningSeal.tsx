import { motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";

export function OpeningSeal({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(onOpen, 1800);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] watercolor-bg overflow-hidden"
      initial={{ opacity: 1 }}
      animate={opening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.2 }}
    >
      {/* Floating particles */}
      <Particles count={40} color="oklch(1 0 0 / 0.8)" />

      {/* Left Curtain */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 watercolor-bg z-10"
        style={{
          boxShadow: "20px 0 60px oklch(0.4 0.13 240 / 0.3)",
        }}
        animate={opening ? { x: "-100%" } : { x: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.7, 0, 0.3, 1],
        }}
      />

      {/* Right Curtain */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 watercolor-bg z-10"
        style={{
          boxShadow: "-20px 0 60px oklch(0.4 0.13 240 / 0.3)",
        }}
        animate={opening ? { x: "100%" } : { x: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.7, 0, 0.3, 1],
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-script text-3xl md:text-4xl leading-[1.35] py-2 overflow-visible mb-8"
          style={{ color: "var(--sky-deep)" }}
        >
          You are cordially invited
        </motion.p>

        {/* Seal Button */}
        <motion.button
          onClick={handleOpen}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.2,
            type: "spring",
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
          aria-label="Open invitation"
        >
          {/* Ripple Effects */}
          <span
            className="absolute inset-0 rounded-full animate-ripple"
            style={{
              background: "oklch(0.7 0.13 225 / 0.4)",
            }}
          />

          <span
            className="absolute inset-0 rounded-full animate-ripple"
            style={{
              background: "oklch(0.7 0.13 225 / 0.3)",
              animationDelay: "1.5s",
            }}
          />

          {/* Seal */}
          <div
            className="relative h-32 w-32 md:h-44 md:w-44 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.7 0.13 225), oklch(0.35 0.13 240) 70%, oklch(0.25 0.1 245))",
              boxShadow: "var(--shadow-seal)",
            }}
          >
            {/* Inner Border */}
            <div
              className="absolute inset-2 rounded-full border-2"
              style={{
                borderColor: "oklch(1 0 0 / 0.35)",
                borderStyle: "dashed",
              }}
            />

            {/* Initials */}
            <div className="text-center">
              <div className="font-script text-4xl md:text-5xl text-white drop-shadow-lg leading-none">
                A{" "}
                <span className="text-2xl md:text-3xl align-middle opacity-80">
                  &
                </span>{" "}
                D
              </div>

              <div className="mt-1 text-[8px] md:text-[10px] tracking-[0.25em] text-white/80 uppercase">
                Forever
              </div>
            </div>

            {/* Shimmer */}
            <span className="absolute inset-0 rounded-full shimmer opacity-50 mix-blend-overlay" />
          </div>
        </motion.button>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          className="mt-10 max-w-md text-center px-6"
        >
          <p
            className="font-script text-2xl md:text-3xl leading-[1.4] py-2 overflow-visible"
            style={{ color: "var(--sky-deep)" }}
          >
            Let all that you do
            <span className="block">
              be done in love
            </span>
          </p>

          <p
            className="mt-3 text-[11px] md:text-xs tracking-[0.35em] uppercase opacity-70"
            style={{ color: "var(--sky-deep)" }}
          >
            1 Corinthians 16:14
          </p>
        </motion.div>

        {/* Tap to Open */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{
            delay: 1.4,
            duration: 2.5,
            repeat: Infinity,
          }}
          className="mt-10 text-sm tracking-[0.4em] uppercase"
          style={{ color: "var(--sky-deep)" }}
        >
          Tap to Open
        </motion.p>
      </div>
    </motion.div>
  );
}