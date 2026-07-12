import { timeline } from "@/data/site";
import CommandLine from "./CommandLine";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className={styles.section}
      aria-labelledby="timeline-title"
    >
      <div className={styles.inner}>
        <CommandLine command="history --timeline --reverse" speed={11} />
        <Reveal>
          <h2 id="timeline-title" className={styles.title}>
            <TypeText text="Path" speed={28} cursor={false} />
          </h2>
          <p className={styles.hint}>Latest → oldest. Details on other pages.</p>
          <p className={styles.cmdHint} aria-hidden="true">
            {">"} tail -f /var/log/career.log
          </p>
        </Reveal>

        <div className={styles.crt}>
          <div className={styles.crtTop} aria-hidden="true">
            <span>{">"} SYS.LOG --follow</span>
            <span>SCROLL_OK</span>
          </div>
          <ol className={styles.track}>
            {timeline.map((event, i) => (
              <li key={`${event.year}-${event.label}`} className={styles.node}>
                <Reveal delay={i * 45}>
                  <div className={styles.row}>
                    <span className={styles.year}>[{event.year}]</span>
                    <span className={styles.arrow} aria-hidden="true">
                      {i < timeline.length - 1 ? "---->" : "====*"}
                    </span>
                    <div className={styles.copy}>
                      <p className={styles.label}>{event.label}</p>
                      <p className={styles.detail}>{event.detail}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className={styles.crtFoot} aria-hidden="true">
            {">"} # end of stream · cd ./work for details
          </p>
        </div>
      </div>
    </section>
  );
}
