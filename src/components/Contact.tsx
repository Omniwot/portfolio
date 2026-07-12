import { site } from "@/data/site";
import CommandLine from "./CommandLine";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Section.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <CommandLine command="ping omniwot --open --ttl=forever" speed={11} />
        <Reveal>
          <h2 id="contact-title" className={styles.title}>
            <TypeText text="Contact" speed={22} cursor={false} />
          </h2>
          <p className={styles.lede}>
            Open to roles in agentic systems, RAG, and forward-deployed AI —
            based in {site.location}.
          </p>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} mailx -s &quot;hello&quot; {site.email}
          </p>
          <div className={styles.contactLinks}>
            <a className={styles.primaryLink} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className={styles.socialRow}>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} ssh omniwot@matrix · connection ready
          </p>
        </Reveal>
      </div>
    </section>
  );
}
