import { projects } from "@/data/site";
import CommandLine from "./CommandLine";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
    >
      <div className={styles.inner}>
        <CommandLine command="ls ./projects --sort=impact -1" speed={11} />
        <Reveal>
          <h2 id="projects-title" className={styles.title}>
            <TypeText text="Projects" speed={22} cursor={false} />
          </h2>
          <p className={styles.lede}>
            A curated set of RAG, agents, and data platform work.
          </p>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} find . -name &quot;*agent*&quot; -o -name &quot;*rag*&quot;
          </p>
        </Reveal>
        <ul className={styles.projectList}>
          {projects.map((project, i) => (
            <li key={project.name}>
              <Reveal delay={i * 35}>
                <article className={styles.project}>
                  <p className={styles.entryCmd} aria-hidden="true">
                    {">"} open ./{project.name.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 28)}
                  </p>
                  <div className={styles.projectHead}>
                    <h3 className={styles.projectName}>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <ul className={styles.tags} aria-label="Technologies">
                      {project.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className={styles.cmdHint} aria-hidden="true">
          {">"} echo &quot;see also: github.com/Omniwot&quot;
        </p>
      </div>
    </section>
  );
}
