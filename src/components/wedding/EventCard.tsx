import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Church } from "lucide-react";

interface Props {
  title: string;
  date: string;
  time: string;
  venue: string;
  reception: string;
  mapUrl: string;
  delay?: number;
}

export function EventCard({ title, date, time, venue, reception, mapUrl, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl p-10 md:p-12 text-center relative overflow-hidden group"
    >
      {/* Glow */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-2xl"
        style={{ background: "var(--gradient-glow)" }}
      />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full glass-dark text-white"
      >
        <Church className="h-9 w-9" />
      </motion.div>

      <h3 className="font-script text-4xl md:text-5xl text-gradient-sky mb-2">{title}</h3>
      <div className="mx-auto h-px w-24 my-5" style={{ background: "linear-gradient(90deg, transparent, var(--sky-mid), transparent)" }} />

      <div className="space-y-4 text-foreground/90 font-display text-lg">
        <div className="flex items-center justify-center gap-3">
          <Calendar className="h-5 w-5" style={{ color: "var(--sky-mid)" }} />
          <span>{date}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Clock className="h-5 w-5" style={{ color: "var(--sky-mid)" }} />
          <span>{time}</span>
        </div>
        <div className="flex items-start justify-center gap-3 max-w-md mx-auto">
          <MapPin className="h-5 w-5 mt-1 shrink-0" style={{ color: "var(--sky-mid)" }} />
          <span>{venue}</span>
        </div>
        <p className="italic text-sm text-muted-foreground pt-1">{reception}</p>
      </div>

      <motion.a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm tracking-widest uppercase text-white"
        style={{
          background: "var(--gradient-ocean)",
          boxShadow: "0 10px 30px oklch(0.4 0.13 240 / 0.4)",
        }}
      >
        <MapPin className="h-4 w-4" />
        View Live Location
      </motion.a>
    </motion.div>
  );
}
