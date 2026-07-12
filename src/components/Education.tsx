import { credentials, education } from "@/data/site";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className={styles.section}
      aria-labelledby="education-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>// background</p>
          <h2 id="education-title" className={styles.title}>
            Education
          </h2>
        </Reveal>
        <ul className={styles.eduList}>
          {education.map((ed) => (
            <li key={ed.school}>
              <Reveal>
                <article className={styles.edu}>
                  <div className={styles.eduTop}>
                    <h3 className={styles.eduSchool}>
                      <a href={ed.url} target="_blank" rel="noreferrer">
                        {ed.school}
                      </a>
                    </h3>
                    <span className={styles.duration}>{ed.duration}</span>
                  </div>
                  <p className={styles.eduDegree}>{ed.degree}</p>
                  <p className={styles.eduDetail}>{ed.detail}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <div className={styles.creds}>
            <h3 className={styles.credsTitle}>Selected credentials</h3>
            <ul className={styles.credList}>
              {credentials.map((c) => (
                <li key={c.title}>
                  <a href={c.url} target="_blank" rel="noreferrer">
                    {c.title}
                  </a>
                  <span className={styles.credOrg}>{c.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
