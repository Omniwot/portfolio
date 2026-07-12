import { site } from "@/data/site";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import Reveal from "./Reveal";
import TypeText from "./TypeText";
import styles from "./Contact.module.css";

const channels = [
  {
    command: `mailx -s "hello" ${site.email}`,
    href: `mailto:${site.email}`,
    label: `Email ${site.name}`,
  },
  {
    command: "curl linkedin.com/in/harshal-a-omni --follow",
    href: site.links.linkedin,
    external: true,
    label: "LinkedIn profile",
  },
  {
    command: "open github.com/Omniwot --repo",
    href: site.links.github,
    external: true,
    label: "GitHub profile",
  },
  {
    command: "cd ./work",
    to: "/work",
    label: "Work page",
  },
  {
    command: "ls ~/projects",
    to: "/projects",
    label: "Projects page",
  },
] as const;

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
        </Reveal>

        <nav className={styles.cmdList} aria-label="Contact and profile links">
          {channels.map((ch, i) => (
            <Reveal key={ch.command} delay={i * 55}>
              <CommandLink
                command={ch.command}
                href={"href" in ch ? ch.href : undefined}
                to={"to" in ch ? ch.to : undefined}
                external={"external" in ch ? ch.external : undefined}
                ariaLabel={ch.label}
                startDelay={i * 120}
              />
            </Reveal>
          ))}
        </nav>
      </div>
    </section>
  );
}
