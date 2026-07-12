import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms after mount / intersection */
  delay?: number;
};

/** Fast terminal-style reveal — content snaps in like a typed dump. */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(styles.visible);
      return;
    }

    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          timer = window.setTimeout(() => {
            el.classList.add(styles.visible);
          }, delay);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`.trim()}>
      {children}
    </div>
  );
}
