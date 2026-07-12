import { useEffect, useRef } from "react";
import styles from "./MatrixLoader.module.css";

const KATAKANA =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｧｨｩｪｫｬｭｮｯ";
const WORD = "Omniwot";
const TERM_FONT = '"Share Tech Mono", "IBM Plex Mono", monospace';

type AmbientCol = {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  tick: number;
};

type LetterStream = {
  target: string;
  x: number;
  y: number;
  trail: string[];
  tick: number;
  speed: number;
  /** falling | scramble | locked */
  state: "falling" | "scramble" | "locked";
  scrambleLeft: number;
  display: string;
  lockDelay: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick() {
  return KATAKANA[Math.floor(Math.random() * KATAKANA.length)]!;
}

type Props = {
  onDone: () => void;
};

export default function MatrixLoader({ onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const doneRef = useRef(false);
  const outRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      const t = window.setTimeout(() => {
        if (!doneRef.current) {
          doneRef.current = true;
          onDone();
        }
      }, 400);
      return () => window.clearTimeout(t);
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      const t = window.setTimeout(() => {
        if (!doneRef.current) {
          doneRef.current = true;
          onDone();
        }
      }, 200);
      return () => window.clearTimeout(t);
    }

    let ambient: AmbientCol[] = [];
    let letters: LetterStream[] = [];
    let raf = 0;
    let running = true;
    let rainSize = 22;
    let brandSize = 64;
    let start = performance.now();
    let fade = 1;
    let lockedAt: number | null = null;

    const layoutLetters = (w: number, h: number) => {
      brandSize = Math.min(96, Math.max(42, w * 0.09));
      const gap = brandSize * 0.72;
      const total = gap * (WORD.length - 1);
      const originX = w / 2 - total / 2;
      letters = WORD.split("").map((ch, i) => ({
        target: ch,
        x: originX + i * gap,
        y: rand(-h * 0.6, -brandSize * 2),
        trail: Array.from({ length: Math.floor(rand(8, 14)) }, pick),
        tick: Math.floor(rand(0, 6)),
        speed: rand(0.75, 1.1),
        state: "falling" as const,
        scrambleLeft: 10 + i * 2,
        display: pick(),
        lockDelay: 12 + i * 5,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rainSize = w < 640 ? 18 : 22;
      const gap = rainSize * 1.85;
      const count = Math.ceil(w / gap);
      ambient = Array.from({ length: count }, (_, i) => ({
        x: i * gap + gap * 0.2,
        y: rand(-h, h),
        speed: rand(0.3, 0.7),
        tick: Math.floor(rand(0, 10)),
        chars: Array.from({ length: Math.floor(rand(8, 16)) }, pick),
      }));
      if (letters.length === 0) layoutLetters(w, h);
      else {
        const brandGap = brandSize * 0.72;
        const total = brandGap * (WORD.length - 1);
        const originX = w / 2 - total / 2;
        const targetY = h * 0.48;
        letters.forEach((L, i) => {
          L.x = originX + i * brandGap;
          if (L.state !== "falling") L.y = targetY;
        });
      }
    };

    const allLocked = () => letters.every((L) => L.state === "locked");

    const draw = (now: number) => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const targetY = h * 0.48;
      const elapsed = now - start;

      ctx.fillStyle = `rgba(7, 11, 10, ${0.12})`;
      ctx.fillRect(0, 0, w, h);

      // Ambient rain (dims once brand forms)
      const ambAlpha = allLocked() ? 0.35 : 1;
      ctx.font = `${rainSize}px ${TERM_FONT}`;
      for (const col of ambient) {
        col.tick += 1;
        if (col.tick % Math.max(3, Math.round(6 / col.speed)) === 0) {
          col.y += rainSize;
        }
        if (col.y - col.chars.length * rainSize > h) {
          col.y = rand(-h * 0.3, 0);
          col.chars = Array.from(
            { length: Math.floor(rand(8, 16)) },
            pick,
          );
        }
        for (let i = 0; i < col.chars.length; i++) {
          if (Math.random() < 0.01) col.chars[i] = pick();
          const yy = col.y - i * rainSize;
          if (yy < -rainSize || yy > h) continue;
          const head = i === 0;
          ctx.fillStyle = head
            ? `rgba(180, 255, 180, ${0.25 * ambAlpha})`
            : `rgba(57, 255, 20, ${Math.max(0.04, 0.18 - i * 0.012) * ambAlpha})`;
          ctx.fillText(col.chars[i]!, col.x, yy);
        }
      }

      // Forming streams → Omniwot
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const L of letters) {
        L.tick += 1;

        if (L.state === "falling") {
          if (L.lockDelay > 0) {
            L.lockDelay -= 1;
          } else if (L.tick % Math.max(1, Math.round(3 / L.speed)) === 0) {
            L.y += brandSize * 0.65;
            if (Math.random() < 0.08) L.display = pick();
            // shift trail
            L.trail.pop();
            L.trail.unshift(pick());
          }

          // trail above the falling head
          ctx.font = `${brandSize * 0.55}px ${TERM_FONT}`;
          for (let i = 0; i < L.trail.length; i++) {
            const yy = L.y - (i + 1) * brandSize * 0.55;
            ctx.fillStyle = `rgba(57, 255, 20, ${Math.max(0.05, 0.4 - i * 0.04)})`;
            ctx.fillText(L.trail[i]!, L.x, yy);
          }

          ctx.font = `${brandSize}px ${TERM_FONT}`;
          ctx.fillStyle = "rgba(220, 255, 220, 0.95)";
          ctx.shadowColor = "rgba(57, 255, 20, 0.55)";
          ctx.shadowBlur = 12;
          ctx.fillText(L.display, L.x, L.y);
          ctx.shadowBlur = 0;

          if (L.lockDelay <= 0 && L.y >= targetY) {
            L.y = targetY;
            L.state = "scramble";
            L.display = pick();
          }
        } else if (L.state === "scramble") {
          if (L.tick % 2 === 0) {
            L.scrambleLeft -= 1;
            L.display = L.scrambleLeft <= 0 ? L.target : pick();
          }
          ctx.font = `${brandSize}px ${TERM_FONT}`;
          ctx.fillStyle = "#39ff14";
          ctx.shadowColor = "rgba(57, 255, 20, 0.85)";
          ctx.shadowBlur = 18;
          ctx.fillText(L.display, L.x, L.y);
          ctx.shadowBlur = 0;
          if (L.scrambleLeft <= 0) {
            L.state = "locked";
            L.display = L.target;
          }
        } else {
          ctx.font = `${brandSize}px ${TERM_FONT}`;
          ctx.fillStyle = "#39ff14";
          ctx.shadowColor = "rgba(57, 255, 20, 0.7)";
          ctx.shadowBlur = 16;
          ctx.fillText(L.target, L.x, L.y);
          ctx.shadowBlur = 0;
          // subtle underline cursor feel
          ctx.fillStyle = "rgba(57, 255, 20, 0.35)";
          ctx.fillRect(
            L.x - brandSize * 0.28,
            L.y + brandSize * 0.42,
            brandSize * 0.56,
            2,
          );
        }
      }
      ctx.textAlign = "start";
      ctx.textBaseline = "alphabetic";

      // Terminal prompt under formed word
      if (allLocked()) {
        if (lockedAt === null) lockedAt = now;
        ctx.font = `${Math.max(14, brandSize * 0.22)}px ${TERM_FONT}`;
        ctx.fillStyle = "rgba(57, 255, 20, 0.65)";
        ctx.textAlign = "center";
        ctx.fillText("> identity_resolved", w / 2, targetY + brandSize * 0.95);
        ctx.textAlign = "start";

        if (!outRef.current && lockedAt !== null && now - lockedAt > 1000) {
          outRef.current = true;
        }
      }

      if (outRef.current) {
        fade = Math.max(0, fade - 0.03);
        ctx.fillStyle = `rgba(7, 11, 10, ${1 - fade})`;
        ctx.fillRect(0, 0, w, h);
        if (fade <= 0 && !doneRef.current) {
          doneRef.current = true;
          onDone();
          return;
        }
      }

      // Safety timeout
      if (elapsed > 8000 && !doneRef.current) {
        doneRef.current = true;
        onDone();
        return;
      }

      raf = requestAnimationFrame(draw);
    };

    // Hard failsafe for Android / backgrounded tabs
    const hardCap = window.setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        onDone();
      }
    }, 4200);

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(hardCap);
      window.removeEventListener("resize", resize);
    };
  }, [onDone]);

  return (
    <div className={styles.loader} role="status" aria-live="polite" aria-label="Loading">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <p className={styles.fallback}>Omniwot</p>
      <span className={styles.srOnly}>Loading portfolio</span>
    </div>
  );
}
