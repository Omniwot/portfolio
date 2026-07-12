import { useEffect, useMemo, useState } from "react";
import { skillGroups } from "@/data/site";
import CmdPrompt from "./CmdPrompt";
import { prefersReducedMotion, useTypewriter } from "@/hooks/useTypewriter";
import styles from "./Section.module.css";
import skillStyles from "./Skills.module.css";

type Phase = "cmd" | "header" | "groups" | "done";

export default function Skills() {
  const reduce = useMemo(() => prefersReducedMotion(), []);
  const [phase, setPhase] = useState<Phase>(reduce ? "done" : "cmd");
  const [groupCount, setGroupCount] = useState(reduce ? skillGroups.length : 0);

  const cmd = useTypewriter("ls ./stack --verbose", {
    speed: 10,
    delay: 80,
    disabled: reduce || phase !== "cmd",
    onDone: () => {
      if (!reduce) setPhase("header");
    },
  });

  const kicker = useTypewriter("// stack", {
    speed: 14,
    delay: 40,
    disabled: reduce || phase === "cmd",
  });

  const title = useTypewriter("Skills", {
    speed: 18,
    delay: reduce || phase === "cmd" ? 0 : 180,
    disabled: reduce || phase === "cmd",
    onDone: () => {
      if (!reduce) setPhase("groups");
    },
  });

  // Reveal skill groups in quick succession once header is typed
  useEffect(() => {
    if (phase !== "groups" || reduce) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setGroupCount(i);
      if (i >= skillGroups.length) {
        window.clearInterval(id);
        setPhase("done");
      }
    }, 220);
    return () => window.clearInterval(id);
  }, [phase, reduce]);

  const showHeader = phase !== "cmd";
  const visibleGroups = skillGroups.slice(0, groupCount);

  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.inner}>
        <div className={skillStyles.terminal}>
          <CmdPrompt caret={!cmd.done} size="md">
            {cmd.shown || (reduce ? "ls ./stack --verbose" : "")}
          </CmdPrompt>

          {showHeader && (
            <div className={skillStyles.headerBlock}>
              <p className={styles.kicker}>
                {kicker.shown}
                {!kicker.done && !reduce ? (
                  <span className={skillStyles.inlineCaret} aria-hidden="true" />
                ) : null}
              </p>
              <h2 id="skills-title" className={styles.title}>
                {title.shown || (reduce ? "Skills" : "\u00a0")}
                {!title.done && kicker.done && !reduce ? (
                  <span className={skillStyles.inlineCaret} aria-hidden="true" />
                ) : null}
              </h2>
              <p className={styles.lede}>
                {phase === "done" || reduce ? (
                  <>
                    Languages, AI tooling, and cloud — typed live from{" "}
                    <code className={skillStyles.inlineCmd}>$STACK</code>.
                  </>
                ) : (
                  <span className={skillStyles.ghost}>
                    Languages, AI tooling, and cloud…
                  </span>
                )}
              </p>
            </div>
          )}

          <div className={styles.skillGrid}>
            {visibleGroups.map((group, gi) => (
              <SkillGroupCard
                key={group.title}
                title={group.title}
                items={group.items}
                reduce={reduce}
                stagger={gi}
              />
            ))}
          </div>

          {(phase === "done" || reduce) && (
            <div className={skillStyles.footerCmds}>
              <CmdPrompt size="sm" caret={false}>
                export PATH=$STACK
              </CmdPrompt>
              <CmdPrompt size="sm" caret={false}>
                grep -r &apos;agent&apos; .
              </CmdPrompt>
              <CmdPrompt size="sm">
                ready --status=ok
              </CmdPrompt>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SkillGroupCard({
  title,
  items,
  reduce,
  stagger,
}: {
  title: string;
  items: readonly string[];
  reduce: boolean;
  stagger: number;
}) {
  const [visibleItems, setVisibleItems] = useState(reduce ? items.length : 0);

  useEffect(() => {
    if (reduce) {
      setVisibleItems(items.length);
      return;
    }
    setVisibleItems(0);
    let i = 0;
    let intervalId = 0;
    const start = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setVisibleItems(i);
        if (i >= items.length) window.clearInterval(intervalId);
      }, 28);
    }, 60 + stagger * 40);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(intervalId);
    };
  }, [items, reduce, stagger]);

  const shown = items.slice(0, visibleItems);

  return (
    <div className={`${styles.skillGroup} ${skillStyles.groupEnter}`}>
      <p className={skillStyles.groupCmd} aria-hidden="true">
        <span className={skillStyles.groupGt}>{">"}</span> cat {title.toLowerCase().replace(/[\s/]+/g, "_")}.txt
      </p>
      <h3 className={styles.skillTitle}>{title}</h3>
      <ul className={skillStyles.chipRow} aria-label={title}>
        {shown.map((item) => (
          <li key={item} className={skillStyles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
