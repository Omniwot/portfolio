import { projects, site } from "@/data/site";
import { hostFromUrl, slugify } from "@/lib/slug";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import PageFoot from "./PageFoot";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

const footNav = [
  {
    command: `open github.com/${site.brand} --repo`,
    href: site.links.github,
    external: true,
    label: "GitHub profile",
  },
  { command: "cd ./work", to: "/work", label: "Work page" },
  { command: "ping omniwot", to: "/contact", label: "Contact page" },
] as const;

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
        </Reveal>
        <ul className={styles.projectList}>
          {projects.map((project, i) => {
            const slug = slugify(project.name, 28);
            const cmd = project.url
              ? `open ${hostFromUrl(project.url)} --project=${slug}`
              : `cat ./${slug}/README.md`;

            return (
              <li key={project.name}>
                <Reveal delay={i * 35}>
                  <article className={styles.project}>
                    {project.url ? (
                      <CommandLink
                        command={cmd}
                        href={project.url}
                        external
                        ariaLabel={project.name}
                        className={styles.entryLink}
                        type={false}
                      />
                    ) : (
                      <CommandLine command={cmd} entry type={false} />
                    )}
                    <div className={styles.projectHead}>
                      <h3 className={styles.projectName}>{project.name}</h3>
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
            );
          })}
        </ul>
        <PageFoot items={footNav} ariaLabel="More pages" />
      </div>
    </section>
  );
}
