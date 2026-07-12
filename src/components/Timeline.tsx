import { timeline } from "@/data/site";
import CmdPrompt from "./CmdPrompt";
import Reveal from "./Reveal";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className={styles.section}
      aria-labelledby="timeline-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <CmdPrompt size="sm" caret={false}>
            tail -f SYS.LOG
          </CmdPrompt>
          <p className={styles.kicker}>// timeline</p>
          <h2 id="timeline-title" className={styles.title}>
            Path
          </h2>
          <p className={styles.hint}>Latest → oldest. Details on other pages.</p>
        </Reveal>

        <div className={styles.crt}>
          <div className={styles.crtTop} aria-hidden="true">
            <span>SYS.LOG</span>
            <span className={styles.crtCmd}>{">"} route_swap</span>
            <span>SCROLL_OK</span>
          </div>
          <ol className={styles.track}>
            {timeline.map((event, i) => (
              <li key={`${event.year}-${event.label}`} className={styles.node}>
                <Reveal>
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
        </div>
      </div>
    </section>
  );
}
