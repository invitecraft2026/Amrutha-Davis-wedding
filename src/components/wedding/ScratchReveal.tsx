import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScratchCircleProps {
  value: string;
  label: string;
  delay?: number;
}

function ScratchCircle({ value, label, delay = 0 }: ScratchCircleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const setup = () => {
      const size = container.offsetWidth;

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d")!;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, size, size);

      grad.addColorStop(0, "#b9d8f2");
      grad.addColorStop(0.5, "#7aa8d4");
      grad.addColorStop(1, "#4d7fb3");

      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();

      // Watercolor blobs
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = `rgba(255,255,255,${0.08 + Math.random() * 0.18})`;

        ctx.beginPath();

        ctx.arc(
          Math.random() * size,
          Math.random() * size,
          20 + Math.random() * 40,
          0,
          Math.PI * 2,
        );

        ctx.fill();
      }

      // Border
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
      ctx.stroke();

      // Text
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "italic 16px serif";
      ctx.textAlign = "center";

      ctx.fillText("Scratch", size / 2, size / 2 + 6);
    };

    setup();

    const ctx = canvas.getContext("2d")!;

    ctx.globalCompositeOperation = "destination-out";

    const scratch = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      checkReveal();
    };

    const checkReveal = () => {
      const { width, height } = canvas;

      const data = ctx.getImageData(0, 0, width, height).data;

      let cleared = 0;

      for (let i = 3; i < data.length; i += 32) {
        if (data[i] === 0) cleared++;
      }

      if (cleared / (data.length / 32) > 0.45) {
        setRevealed(true);
      }
    };

    const getPos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const down = (e: PointerEvent) => {
      drawing.current = true;

      const p = getPos(e);

      scratch(p.x, p.y);
    };

    const move = (e: PointerEvent) => {
      if (!drawing.current) return;

      const p = getPos(e);

      scratch(p.x, p.y);
    };

    const up = () => {
      drawing.current = false;
    };

    canvas.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    return () => {
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center"
    >
      <div
        ref={containerRef}
        className="relative h-32 w-32 md:h-44 md:w-44 rounded-full overflow-hidden glass shadow-2xl"
      >
        {/* Reveal Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={revealed ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-display text-3xl md:text-5xl text-gradient-sky">{value}</p>

            <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {label}
            </p>
          </motion.div>
        </div>

        {/* Scratch Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full cursor-grab"
          style={{
            touchAction: "none",
            display: revealed ? "none" : "block",
          }}
        />
      </div>
    </motion.div>
  );
}

export function ScratchReveal() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/20 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-6xl leading-[1.35] py-2 overflow-visible text-gradient-sky mb-5"
        >
          Save the Date
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-16"
        >
          Scratch each circle to reveal
        </motion.p>

        {/* Scratch Circles */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <ScratchCircle value="24" label="Date" delay={0.1} />

          <ScratchCircle value="October" label="Month" delay={0.25} />

          <ScratchCircle value="2026" label="Year" delay={0.4} />
        </div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <p className="text-lg md:text-2xl tracking-[0.2em] uppercase text-sky-900/70">11:00 AM</p>
          <p className="mt-4 font-script text-3xl md:text-5xl leading-[1.35] py-2 text-gradient-sky">
            St. George Forane Church
          </p>

          <p className="mt-2 text-sm md:text-base italic text-muted-foreground">Aruvithura</p>
        </motion.div>
      </div>
    </section>
  );
}
