import { site } from "@/data/site";
import CmdPrompt from "./CmdPrompt";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <CmdPrompt size="sm" caret={false}>
            ping contact --ttl=∞
          </CmdPrompt>
          <p className={styles.kicker}>// connect</p>
          <h2 id="contact-title" className={styles.title}>
            Contact
          </h2>
          <p className={styles.lede}>
            Open to roles in agentic systems, RAG, and forward-deployed AI —
            based in {site.location}.
          </p>
          <p className={styles.cmdAside} aria-hidden="true">
            <span className={styles.cmdAsideText}>{">"} whoami</span>
            <span className={styles.cmdAsideText}>{">"} make deploy</span>
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
        </Reveal>
      </div>
    </section>
  );
}
