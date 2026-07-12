import MatrixRain from "./MatrixRain";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import TypeText from "./TypeText";
import { homeLinks, site } from "@/data/site";
import styles from "./Hero.module.css";

const navCommands = [
  { command: "ping omniwot --open", to: "/contact", label: "Contact" },
  { command: "cat ./work/experience.log", to: "/work", label: "Work" },
  ...homeLinks.map((item) => ({
    command: `cd ${item.to}`,
    to: item.to,
    label: `${item.label} — ${item.blurb}`,
  })),
  {
    command: "cd ./skills && cat README.md",
    to: "/skills",
    label: "Skills page",
  },
] as const;

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <MatrixRain />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <CommandLine command="boot --identity --quiet" speed={10} />
        <p className={styles.brand}>
          <TypeText text={site.brand} speed={22} startDelay={220} cursor={false} />
        </p>
        <h1 className={styles.headline}>
          <TypeText
            text={site.headline}
            speed={10}
            startDelay={420}
            cursor={false}
          />
        </h1>
        <p className={styles.sub}>
          <TypeText
            text={site.subline}
            speed={9}
            startDelay={720}
            cursor={false}
          />
        </p>
        <CommandLink
          command={`whoami · ${site.name.toLowerCase().replace(/\s+/g, "_")}`}
          to="/contact"
          ariaLabel={`About ${site.name}`}
          className={styles.heroCmd}
          startDelay={900}
        />

        <nav className={styles.cmdList} aria-label="Site navigation">
          {navCommands.map((item, i) => (
            <CommandLink
              key={item.command}
              command={item.command}
              to={item.to}
              ariaLabel={item.label}
              className={styles.heroCmd}
              startDelay={1000 + i * 80}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
