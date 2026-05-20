import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setShow(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!show) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
      style={{
        background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, oklch(0.85 0.1 220 / 0.25), transparent 60%)`,
        transition: "background 0.1s linear",
      }}
    />
  );
}
