import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { OpeningSeal } from "@/components/wedding/OpeningSeal";
import { Hero } from "@/components/wedding/Hero";
import { Couple } from "@/components/wedding/Couple";
import { Events } from "@/components/wedding/Events";
import { Countdown } from "@/components/wedding/Countdown";
import { ScratchReveal } from "@/components/wedding/ScratchReveal";
import { Message } from "@/components/wedding/Message";
import { Gallery } from "@/components/wedding/Gallery";
import { Footer } from "@/components/wedding/Footer";
import { MusicButton } from "@/components/wedding/MusicButton";
import { CursorGlow } from "@/components/wedding/CursorGlow";
import { Particles } from "@/components/wedding/Particles";

export const Route = createFileRoute("/")({
  component: Invitation,
  head: () => ({
    meta: [
      { title: "Amrutha & Davis · Wedding Invitation" },
      { name: "description", content: "Together with their families, Amrutha Cyriac & Davis Shaji George invite you to celebrate their engagement & wedding." },
      { property: "og:title", content: "Amrutha & Davis · Wedding Invitation" },
      { property: "og:description", content: "A cinematic celebration of love · October 2026" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Great+Vibes&display=swap",
      },
    ],
  }),
});

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-center justify-center watercolor-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="mx-auto h-16 w-16 rounded-full border-2 border-transparent"
          style={{ borderTopColor: "var(--sky-deep)", borderRightColor: "var(--sky-mid)" }}
        />
        <p className="mt-6 font-script text-3xl text-gradient-sky">A & D</p>
      </div>
    </motion.div>
  );
}

function Invitation() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <AnimatePresence>{!loading && !opened && <OpeningSeal onOpen={() => setOpened(true)} />}</AnimatePresence>

      <CursorGlow />
      <MusicButton autoplay={opened} />

      <main className="relative">
        <Hero />

        {/* Decorative floating particles overlay */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Particles count={20} color="oklch(0.7 0.13 225 / 0.6)" />
          </div>
          <Couple />
          <Countdown />
          <ScratchReveal />
          <Events />
          
          
          <Message />
          {/* <Gallery /> */}
          <Footer />
        </div>
      </main>
    </>
  );
}
