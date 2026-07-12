import { experience } from "@/data/site";
import { hostFromUrl, slugify } from "@/lib/slug";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import PageFoot from "./PageFoot";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

const footNav = [
  { command: "cd ./projects", to: "/projects", label: "Projects page" },
  { command: "ls ~/skills", to: "/skills", label: "Skills page" },
  { command: "man education", to: "/education", label: "Education page" },
] as const;

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
        </Reveal>
        <ol className={styles.timeline}>
          {experience.map((role, i) => {
            const slug = slugify(role.company);
            const cmd = role.url
              ? `curl ${hostFromUrl(role.url)} --role=${slug}`
              : `jobctl show --id=${i + 1} · ${slug}`;

            return (
              <li key={`${role.company}-${role.title}-${role.duration}`}>
                <Reveal delay={i * 40}>
                  <article className={styles.role}>
                    <div className={styles.roleMeta}>
                      {role.url ? (
                        <CommandLink
                          command={cmd}
                          href={role.url}
                          external
                          ariaLabel={`${role.company} — ${role.title}`}
                          className={styles.entryLink}
                          type={false}
                        />
                      ) : (
                        <CommandLine command={cmd} entry type={false} />
                      )}
                      <h3 className={styles.roleTitle}>{role.title}</h3>
                      <p className={styles.company}>
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
            );
          })}
        </ol>
        <PageFoot items={footNav} ariaLabel="More pages" />
      </div>
    </section>
  );
}
