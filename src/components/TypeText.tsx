import { useEffect, useRef, useState } from "react";
import styles from "./TypeText.module.css";

type Props = {
  text: string;
  /** ms per character — keep low for a snappy terminal feel */
  speed?: number;
  className?: string;
  cursor?: boolean;
  startDelay?: number;
  onDone?: () => void;
  as?: "span" | "p" | "h1" | "h2" | "h3";
};

export default function TypeText({
  text,
  speed = 14,
  className = "",
  cursor = true,
  startDelay = 0,
  onDone,
  as: Tag = "span",
}: Props) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(startDelay === 0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    setShown("");
    setDone(false);
    setStarted(startDelay === 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(text);
      setDone(true);
      setStarted(true);
      onDoneRef.current?.();
      return;
    }

    let i = 0;
    let tick: number | undefined;
    let delayTimer: number | undefined;

    const run = () => {
      setStarted(true);
      tick = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(tick);
          setDone(true);
          onDoneRef.current?.();
        }
      }, speed);
    };

    if (startDelay > 0) {
      delayTimer = window.setTimeout(run, startDelay);
    } else {
      run();
    }

    return () => {
      if (tick) window.clearInterval(tick);
      if (delayTimer) window.clearTimeout(delayTimer);
    };
  }, [text, speed, startDelay]);

  return (
    <Tag className={className}>
      {shown}
      {cursor && started && !done && (
        <span className={styles.cursor} aria-hidden="true">
          ▍
        </span>
      )}
    </Tag>
  );
}
