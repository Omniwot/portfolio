import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageTransition.module.css";

const ROUTE_META: Record<string, { cmd: string; status: string }> = {
  "/": {
    cmd: "route_swap --to=home",
    status: "[ok] ~/home mounted",
  },
  "/work": {
    cmd: "route_swap --to=work --load=experience.log",
    status: "[ok] experience.log loaded",
  },
  "/projects": {
    cmd: "route_swap --to=projects --ls",
    status: "[ok] 8 projects indexed",
  },
  "/skills": {
    cmd: "route_swap --to=skills --tree",
    status: "[ok] skill tree parsed",
  },
  "/education": {
    cmd: "route_swap --to=education --man",
    status: "[ok] credentials verified",
  },
  "/contact": {
    cmd: "route_swap --to=contact --open",
    status: "[ok] channel open",
  },
};

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const [phase, setPhase] = useState<"idle" | "wipe" | "enter">("idle");
  const [typed, setTyped] = useState("");
  const [showStatus, setShowStatus] = useState(false);
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

    const meta = ROUTE_META[location.pathname] ?? {
      cmd: `route_swap --to=${location.pathname.replace(/^\//, "")}`,
      status: "[ok] route ready",
    };

    setTyped("");
    setShowStatus(false);
    setPhase("wipe");

    let i = 0;
    const typeTick = window.setInterval(() => {
      i += 1;
      setTyped(meta.cmd.slice(0, i));
      if (i >= meta.cmd.length) {
        window.clearInterval(typeTick);
        window.setTimeout(() => setShowStatus(true), 60);
      }
    }, 10);

    const enterAt = window.setTimeout(() => setPhase("enter"), 480);
    const idleAt = window.setTimeout(() => {
      setPhase("idle");
      setTyped("");
      setShowStatus(false);
    }, 820);

    return () => {
      window.clearInterval(typeTick);
      window.clearTimeout(enterAt);
      window.clearTimeout(idleAt);
    };
  }, [location.pathname]);

  const meta = ROUTE_META[location.pathname] ?? {
    cmd: `route_swap --to=${location.pathname.replace(/^\//, "")}`,
    status: "[ok] route ready",
  };

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
          <div className={styles.term}>
            <div className={styles.termBar}>
              <span>omniwot@matrix:~/routes</span>
              <span>route_swap</span>
            </div>
            <div className={styles.termBody}>
              <p className={styles.cmdLine}>
                <span className={styles.prompt}>{">"}</span>
                <span>{typed}</span>
                {!showStatus && (
                  <span className={styles.cursor} aria-hidden="true">
                    ▍
                  </span>
                )}
              </p>
              {showStatus && (
                <p className={styles.status}>{meta.status}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
