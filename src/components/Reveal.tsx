import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms after mount / intersection */
  delay?: number;
};

/** Terminal-style reveal with a hard visible fallback for mobile browsers. */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.classList.add(styles.visible);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    let delayTimer: number | undefined;
    let fallbackTimer: number | undefined;
    let shown = false;

    const reveal = () => {
      if (shown) return;
      shown = true;
      if (delay > 0) {
        delayTimer = window.setTimeout(show, delay);
      } else {
        show();
      }
    };

    // Android: negative % rootMargin / high threshold can never fire
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "64px 0px 64px 0px" },
    );
    io.observe(el);

    // Absolute fallback — never leave CRT blocks invisible
    fallbackTimer = window.setTimeout(reveal, 900 + delay);

    return () => {
      io.disconnect();
      if (delayTimer) window.clearTimeout(delayTimer);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`.trim()}>
      {children}
    </div>
  );
}
