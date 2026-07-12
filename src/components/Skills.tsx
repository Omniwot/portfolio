import { useState } from "react";
import { skillGroups } from "@/data/site";
import CommandLine from "./CommandLine";
import PageFoot from "./PageFoot";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Skills.module.css";

const footNav = [
  { command: "cd ./work", to: "/work", label: "Work page" },
  { command: "ls ~/projects", to: "/projects", label: "Projects page" },
  { command: "ping omniwot", to: "/contact", label: "Contact page" },
] as const;

export default function Skills() {
  const [ready, setReady] = useState(false);
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.inner}>
        <CommandLine
          command="ls ~/skills --tree --sort=impact"
          speed={11}
          onDone={() => setReady(true)}
        />
        <h2 id="skills-title" className={styles.title}>
          {ready ? (
            <TypeText text="Skills" speed={28} cursor={false} />
          ) : (
            <span className={styles.titleGhost}>Skills</span>
          )}
        </h2>
        <p className={styles.lede} aria-hidden={!ready}>
          {ready ? (
            <TypeText
              text="Languages, agent stack, and cloud — dump from the working tree."
              speed={8}
              cursor={false}
            />
          ) : (
            "\u00a0"
          )}
        </p>

        <div className={styles.term}>
          <div className={styles.termBar} aria-hidden="true">
            <span>omniwot@matrix:~/skills</span>
            <span>tty1</span>
          </div>

          <div className={styles.termBody}>
            {skillGroups.map((group, gi) => (
              <Reveal key={group.title} delay={ready ? 80 + gi * 90 : 400}>
                <div className={styles.group}>
                  <CommandLine
                    command={`cat ./${group.slug}/README.md`}
                    entry
                    type={false}
                  />
                  <div className={styles.groupHead}>
                    <h3 className={styles.groupTitle}>{group.title}</h3>
                    <span className={styles.count}>
                      {group.items.length} pkgs
                    </span>
                  </div>
                  <ul className={styles.chips} aria-label={group.title}>
                    {group.items.map((item, ii) => (
                      <li
                        key={item}
                        className={styles.chip}
                        style={{ animationDelay: `${ii * 28}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className={styles.termFoot} aria-hidden="true">
            <span>
              {">"} echo $STATUS · ok — {total} packages indexed
            </span>
            <span>exit 0</span>
          </div>
        </div>

        <PageFoot items={footNav} ariaLabel="More pages" />
      </div>
    </section>
  );
}
