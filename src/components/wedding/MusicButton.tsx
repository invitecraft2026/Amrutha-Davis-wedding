import { motion } from "framer-motion";
import { Music2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicButton({ autoplay }: { autoplay: boolean }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoplay || !ref.current) return;
    ref.current.volume = 0.4;
    ref.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [autoplay]);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) ref.current.pause();
    else ref.current.play();
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={ref}
        loop
        src="/song.mpeg"
      />
      <motion.button
        onClick={toggle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full glass-dark flex items-center justify-center text-white shadow-2xl animate-pulse-glow"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
            <Music2 className="h-6 w-6" />
          </motion.div>
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
      </motion.button>
    </>
  );
}
