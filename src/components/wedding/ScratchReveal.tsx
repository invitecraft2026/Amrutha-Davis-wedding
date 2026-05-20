import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setup = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      grad.addColorStop(0, "#a8c8e8");
      grad.addColorStop(0.5, "#7aa8d4");
      grad.addColorStop(1, "#5a8bbe");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, rect.width, rect.height);
      // Watercolor blobs
      for (let i = 0; i < 12; i++) {
        ctx.fillStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.2})`;
        ctx.beginPath();
        ctx.arc(Math.random() * rect.width, Math.random() * rect.height, 30 + Math.random() * 60, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "italic 18px serif";
      ctx.textAlign = "center";
      ctx.fillText("✦ Scratch to reveal ✦", rect.width / 2, rect.height / 2);
    };
    setup();

    const ctx = canvas.getContext("2d")!;
    ctx.globalCompositeOperation = "destination-out";

    const scratch = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
      checkReveal();
    };

    const checkReveal = () => {
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, width, height).data;
      let cleared = 0;
      for (let i = 3; i < data.length; i += 40) if (data[i] === 0) cleared++;
      if (cleared / (data.length / 40) > 0.5) setRevealed(true);
    };

    const pos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const down = (e: PointerEvent) => { drawing.current = true; const p = pos(e); scratch(p.x, p.y); };
    const move = (e: PointerEvent) => { if (!drawing.current) return; const p = pos(e); scratch(p.x, p.y); };
    const up = () => { drawing.current = false; };

    canvas.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("resize", setup);
    return () => {
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-5xl text-gradient-sky mb-8"
        >
          A little secret...
        </motion.p>

        <div
          ref={containerRef}
          className="relative mx-auto h-64 md:h-72 max-w-2xl glass rounded-3xl overflow-hidden select-none touch-none"
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              animate={revealed ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-2xl md:text-3xl italic text-gradient-sky leading-relaxed"
            >
              "We cannot wait to celebrate our special moments with you."
            </motion.p>
          </div>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full cursor-grab"
            style={{ touchAction: "none", display: revealed ? "none" : "block" }}
          />
        </div>
      </div>
    </section>
  );
}
