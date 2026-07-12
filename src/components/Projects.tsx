import { projects } from "@/data/site";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>// selected</p>
          <h2 id="projects-title" className={styles.title}>
            Projects
          </h2>
          <p className={styles.lede}>
            A curated set of RAG, agents, and data platform work.
          </p>
        </Reveal>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li key={project.name}>
              <Reveal>
                <article className={styles.project}>
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
      </div>
    </section>
  );
}
