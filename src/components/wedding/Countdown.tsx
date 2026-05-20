import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-24T18:00:00+05:30").getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const i = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(i);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-5xl text-gradient-sky mb-3"
        >
          Counting the moments
        </motion.p>
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-12">Until we say I do</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-6 md:p-8 animate-pulse-glow"
            >
              <div className="font-display text-5xl md:text-7xl font-light text-gradient-sky tabular-nums">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
                {u.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
