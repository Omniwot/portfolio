import { skillGroups } from "@/data/site";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>// stack</p>
          <h2 id="skills-title" className={styles.title}>
            Skills
          </h2>
        </Reveal>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div className={styles.skillGroup}>
                <h3 className={styles.skillTitle}>{group.title}</h3>
                <p className={styles.skillItems}>{group.items.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
