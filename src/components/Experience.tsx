import { experience } from "@/data/site";
import CmdPrompt from "./CmdPrompt";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Experience() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <Reveal>
          <CmdPrompt size="sm" caret={false}>
            cd ./work && history
          </CmdPrompt>
          <p className={styles.kicker}>// experience</p>
          <h2 id="work-title" className={styles.title}>
            Work
          </h2>
          <p className={styles.lede}>
            Roles spanning ML/RAG research, full-stack product work, and cloud
            data platforms.
          </p>
          <p className={styles.cmdAside} aria-hidden="true">
            <span className={styles.cmdAsideText}>{">"} ssh work@theorem</span>
            <span className={styles.cmdAsideText}>{">"} git log --oneline -n 7</span>
          </p>
        </Reveal>
        <ol className={styles.timeline}>
          {experience.map((role) => (
            <li key={`${role.company}-${role.title}-${role.duration}`}>
              <Reveal>
                <article className={styles.role}>
                  <div className={styles.roleMeta}>
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
      </div>
    </section>
  );
}
