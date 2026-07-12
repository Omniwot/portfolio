import { timeline } from "@/data/site";
import { slugify } from "@/lib/slug";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import PageFoot from "./PageFoot";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import { useBootReady } from "@/context/BootReadyContext";
import styles from "./Timeline.module.css";

const footNav = [
  { command: "cd ./work", to: "/work", label: "Work page" },
  { command: "ls ~/projects", to: "/projects", label: "Projects page" },
] as const;

export default function Timeline() {
  const ready = useBootReady();

  return (
    <section
      id="timeline"
      className={styles.section}
      aria-labelledby="timeline-title"
    >
      <div className={styles.inner}>
        <CommandLine
          command="history --timeline --reverse"
          speed={11}
          active={ready}
        />
        <Reveal>
          <h2 id="timeline-title" className={styles.title}>
            <TypeText
              text="Path"
              speed={28}
              active={ready}
              cursor={false}
            />
          </h2>
          <p className={styles.hint}>Latest → oldest. Tap a log line for details.</p>
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
                      <p className={styles.org}>
                        <span>{event.label}</span>
                        <span className={styles.orgSep} aria-hidden="true">
                          ·
                        </span>
                        <span className={styles.location}>{event.location}</span>
                      </p>
                      <CommandLink
                        command={`log read --at=${slugify(event.label, 20)}`}
                        to="/work"
                        ariaLabel={`${event.label} — ${event.detail}`}
                        className={styles.timelineCmd}
                        type={false}
                      />
                      <p className={styles.detail}>{event.detail}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <PageFoot
            items={footNav}
            ariaLabel="More pages"
            className={styles.crtFootNav}
          />
        </div>
      </div>
    </section>
  );
}
