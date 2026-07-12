import MatrixRain from "./MatrixRain";
import CommandLine from "./CommandLine";
import CommandLink from "./CommandLink";
import TypeText from "./TypeText";
import { useBootReady } from "@/context/BootReadyContext";
import { homeLinks, site } from "@/data/site";
import styles from "./Hero.module.css";

const routeCommand: Record<string, string> = {
  "/work": "cat ./work/experience.log",
  "/projects": "ls ~/projects",
  "/skills": "ls ~/skills --tree",
  "/contact": "ping omniwot --open",
  "/education": "man credentials | less",
};

const navCommands = [
  ...homeLinks.map((item) => ({
    command: routeCommand[item.to] ?? `cd ${item.to}`,
    to: item.to,
    label: `${item.label} — ${item.blurb}`,
  })),
  {
    command: routeCommand["/education"],
    to: "/education",
    label: "Education — Degrees & certs",
  },
];

export default function Hero() {
  const ready = useBootReady();

  return (
    <section className={styles.hero} aria-label="Introduction">
      <MatrixRain />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <CommandLine
          command="boot --identity --quiet"
          speed={10}
          active={ready}
        />
        <p className={styles.brand}>
          <TypeText
            text={site.brand}
            speed={22}
            startDelay={220}
            active={ready}
            cursor={false}
          />
        </p>
        <h1 className={styles.headline}>
          <TypeText
            text={site.headline}
            speed={10}
            startDelay={420}
            active={ready}
            cursor={false}
          />
        </h1>
        <p className={styles.sub}>
          <TypeText
            text={site.subline}
            speed={9}
            startDelay={720}
            active={ready}
            cursor={false}
          />
        </p>
        <CommandLink
          command={`whoami · ${site.name.toLowerCase().replace(/\s+/g, "_")}`}
          to="/contact"
          ariaLabel={`About ${site.name}`}
          className={styles.heroCmd}
          startDelay={900}
          active={ready}
        />

        <nav className={styles.cmdList} aria-label="Site navigation">
          {navCommands.map((item, i) => (
            <CommandLink
              key={item.to}
              command={item.command}
              to={item.to}
              ariaLabel={item.label}
              className={styles.heroCmd}
              startDelay={1000 + i * 80}
              active={ready}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
