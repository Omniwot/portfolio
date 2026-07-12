import { credentials, education } from "@/data/site";
import { slugify } from "@/lib/slug";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import PageFoot from "./PageFoot";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

const schoolCmd = ["uiuc", "bits"] as const;

const footNav = [
  { command: "cd ./work", to: "/work", label: "Work page" },
  { command: "ls ~/skills", to: "/skills", label: "Skills page" },
] as const;

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
          <p className={styles.lede}>
            Degrees and verified credentials from transcripts and cert stores.
          </p>
        </Reveal>

        <ul className={styles.eduList}>
          {education.map((ed, i) => (
            <li key={ed.school}>
              <Reveal delay={i * 50}>
                <article className={styles.edu}>
                  <CommandLink
                    command={`enroll --school=${schoolCmd[i] ?? slugify(ed.school, 12)}`}
                    href={ed.url}
                    external
                    ariaLabel={ed.school}
                    className={styles.entryLink}
                    type={false}
                  />
                  <div className={styles.eduTop}>
                    <h3 className={styles.eduSchool}>{ed.school}</h3>
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
            <CommandLine
              command="certctl list --verified"
              entry
              type={false}
            />
            <ul className={styles.credList}>
              {credentials.map((c) => (
                <li key={c.title}>
                  <CommandLink
                    command={`verify --cert=${slugify(c.title, 24)}`}
                    href={c.url}
                    external
                    ariaLabel={c.title}
                    className={styles.entryLink}
                    type={false}
                  />
                  <span className={styles.credOrg}>{c.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <PageFoot items={footNav} ariaLabel="More pages" />
      </div>
    </section>
  );
}
