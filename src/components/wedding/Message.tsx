import { motion } from "framer-motion";

export function Message() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center relative">
        {/* Decorative florals */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 0.4, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -top-6 left-0 text-7xl md:text-8xl font-script select-none pointer-events-none"
          style={{ color: "var(--sky-mid)" }}
        >
          ❀
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 20 }}
          whileInView={{ opacity: 0.4, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -bottom-6 right-0 text-7xl md:text-8xl font-script select-none pointer-events-none"
          style={{ color: "var(--sky-mid)" }}
        >
          ❀
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-4xl md:text-5xl text-gradient-sky mb-8"
        >
          With love & blessings
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-xl md:text-3xl italic leading-relaxed text-foreground/90"
        >
          "With joyful hearts and the blessings of our families, we warmly invite you to be part of
          our beautiful journey and celebrate the most precious moments of our lives."
        </motion.blockquote>
      </div>
    </section>
  );
}
