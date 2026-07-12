import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { commandForPath } from "@/data/commands";
import CmdPrompt from "./CmdPrompt";
import styles from "./PageTransition.module.css";

const KATAKANA =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const [phase, setPhase] = useState<"idle" | "wipe" | "enter">("idle");
  const [glyphs, setGlyphs] = useState("::::::::");
  const [cmd, setCmd] = useState(() => commandForPath(location.pathname));
  const first = useRef(true);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      prevPath.current = location.pathname;
      return;
    }
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("idle");
      return;
    }

    setCmd(commandForPath(location.pathname));
    setPhase("wipe");
    const scramble = window.setInterval(() => {
      setGlyphs(
        Array.from(
          { length: 32 },
          () => KATAKANA[Math.floor(Math.random() * KATAKANA.length)],
        ).join(""),
      );
    }, 45);

    const enterAt = window.setTimeout(() => {
      window.clearInterval(scramble);
      setPhase("enter");
    }, 420);

    const idleAt = window.setTimeout(() => setPhase("idle"), 900);

    return () => {
      window.clearInterval(scramble);
      window.clearTimeout(enterAt);
      window.clearTimeout(idleAt);
    };
  }, [location.pathname]);

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.page} ${
          phase === "wipe" ? styles.hidden : phase === "enter" ? styles.enter : ""
        }`}
      >
        {children}
      </div>
      {phase === "wipe" && (
        <div className={styles.wipe} aria-hidden="true">
          <div className={styles.scan} />
          <p className={styles.glyphs}>{glyphs}</p>
          <div className={styles.cmdWrap}>
            <CmdPrompt size="lg" caret>
              {cmd}
            </CmdPrompt>
            <p className={styles.routeHint}>route_swap · {location.pathname}</p>
          </div>
        </div>
      )}
    </div>
  );
}
