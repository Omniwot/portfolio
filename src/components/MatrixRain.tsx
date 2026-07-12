import { useEffect, useRef } from "react";
import styles from "./MatrixRain.module.css";

const CHARS =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｧｨｩｪｫｬｭｮｯ";

type Column = {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  tick: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]!;
}

/** Movie-like: larger glyphs, slow step-drop cadence */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let columns: Column[] = [];
    let raf = 0;
    let running = true;
    let fontSize = 26;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fontSize = w < 640 ? 20 : 26;
      const gap = fontSize * 1.85;
      const count = Math.ceil(w / gap);
      columns = Array.from({ length: count }, (_, i) => ({
        x: i * gap + gap * 0.2,
        y: rand(-h, 0),
        speed: rand(0.35, 0.85),
        tick: Math.floor(rand(0, 8)),
        chars: Array.from({ length: Math.floor(rand(10, 18)) }, pickChar),
      }));
    };

    const draw = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.fillStyle = "rgba(7, 11, 10, 0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "IBM Plex Mono", "Hiragino Sans", monospace`;

      for (const col of columns) {
        col.tick += 1;
        // Step roughly every 3–5 frames for a film-like cadence
        if (col.tick % Math.max(3, Math.round(5 / col.speed)) === 0) {
          col.y += fontSize;
        }
        if (col.y - col.chars.length * fontSize > h) {
          col.y = rand(-h * 0.4, 0);
          col.speed = rand(0.35, 0.85);
          col.chars = Array.from(
            { length: Math.floor(rand(10, 18)) },
            pickChar,
          );
        }
        for (let i = 0; i < col.chars.length; i++) {
          if (Math.random() < 0.012) col.chars[i] = pickChar();
          const ch = col.chars[i]!;
          const yy = col.y - i * fontSize;
          if (yy < -fontSize || yy > h) continue;
          const head = i === 0;
          ctx.fillStyle = head
            ? "rgba(232, 245, 239, 0.7)"
            : `rgba(61, 220, 151, ${Math.max(0.06, 0.32 - i * 0.018)})`;
          ctx.fillText(ch, col.x, yy);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = !!entry?.isIntersecting && !document.hidden;
        if (running) raf = requestAnimationFrame(draw);
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
