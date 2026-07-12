import { experience } from "@/data/site";
import CommandLine from "./CommandLine";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

export default function Experience() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <CommandLine command="cat ./experience.log | head -n 40" speed={11} />
        <Reveal>
          <h2 id="work-title" className={styles.title}>
            <TypeText text="Work" speed={24} cursor={false} />
          </h2>
          <p className={styles.lede}>
            Roles spanning ML/RAG research, full-stack product work, and cloud
            data platforms.
          </p>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} grep -n &quot;impact&quot; experience.log
          </p>
        </Reveal>
        <ol className={styles.timeline}>
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.title}-${role.duration}`}>
              <Reveal delay={i * 40}>
                <article className={styles.role}>
                  <div className={styles.roleMeta}>
                    <p className={styles.entryCmd} aria-hidden="true">
                      {">"} jobctl show --id={i + 1}
                    </p>
                    <h3 className={styles.roleTitle}>{role.title}</h3>
                    <p className={styles.company}>
                      {role.url ? (
                        <a href={role.url} target="_blank" rel="noreferrer">
                          {role.company}
                        </a>
                      ) : (
                        <span>{role.company}</span>
                      )}
                      <span className={styles.dot} aria-hidden="true">
                        ·
                      </span>
                      <span className={styles.location}>{role.location}</span>
                    </p>
                    <p className={styles.duration}>{role.duration}</p>
                  </div>
                  <ul className={styles.points}>
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className={styles.cmdHint} aria-hidden="true">
          {">"} # EOF experience.log · more in ./projects
        </p>
      </div>
    </section>
  );
}
