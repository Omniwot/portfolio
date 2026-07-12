import { credentials, education } from "@/data/site";
import CommandLine from "./CommandLine";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className={styles.section}
      aria-labelledby="education-title"
    >
      <div className={styles.inner}>
        <CommandLine command="man credentials | less" speed={12} />
        <Reveal>
          <h2 id="education-title" className={styles.title}>
            <TypeText text="Education" speed={20} cursor={false} />
          </h2>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} grep GPA transcripts.txt
          </p>
        </Reveal>
        <ul className={styles.eduList}>
          {education.map((ed, i) => (
            <li key={ed.school}>
              <Reveal delay={i * 50}>
                <article className={styles.edu}>
                  <p className={styles.entryCmd} aria-hidden="true">
                    {">"} enroll --school={i === 0 ? "uiuc" : "bits"}
                  </p>
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
            <p className={styles.entryCmd} aria-hidden="true">
              {">"} certctl list --verified
            </p>
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
