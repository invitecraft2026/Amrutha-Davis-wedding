import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=900&q=80",
  "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=900&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80",
];

const sizes = ["row-span-2", "", "", "row-span-2", "", "", "row-span-2", ""];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-script text-4xl md:text-5xl text-gradient-sky">Our Moments</p>
          <p className="mt-3 text-sm tracking-[0.4em] uppercase text-muted-foreground">A glimpse of forever</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpen(src)}
              className={`relative overflow-hidden rounded-2xl group glass ${sizes[i]}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(180deg, transparent, oklch(0.35 0.13 240 / 0.5))" }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
            style={{ background: "oklch(0.15 0.05 240 / 0.85)", backdropFilter: "blur(20px)" }}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setOpen(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={open}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
