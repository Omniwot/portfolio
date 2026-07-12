import { useEffect, useState } from "react";

type Options = {
  /** ms per character — lower = faster */
  speed?: number;
  /** delay before typing starts */
  delay?: number;
  /** when true, skip animation and show full text */
  disabled?: boolean;
  onDone?: () => void;
};

/**
 * Fast typewriter — reveals `text` character by character.
 * Respects prefers-reduced-motion via `disabled`.
 */
export function useTypewriter(text: string, options: Options = {}) {
  const { speed = 12, delay = 0, disabled = false, onDone } = options;
  const [shown, setShown] = useState(disabled ? text : "");
  const [done, setDone] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setShown(text);
      setDone(true);
      return;
    }

    setShown("");
    setDone(false);
    let i = 0;
    let intervalId = 0;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
    // intentionally omit onDone from deps — callers pass inline lambdas
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay, disabled]);

  return { shown, done };
}

/** Prefer reduced motion → skip typing. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
