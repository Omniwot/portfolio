import { Link } from "react-router-dom";
import MatrixRain from "./MatrixRain";
import CommandLine from "./CommandLine";
import TypeText from "./TypeText";
import { homeLinks, site } from "@/data/site";
import styles from "./Hero.module.css";

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
        <p className={styles.easter} aria-hidden="true">
          {">"} whoami · {site.name.toLowerCase().replace(/\s+/g, "_")}
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} to="/contact">
            Contact
          </Link>
          <Link className={styles.secondary} to="/work">
            Work
          </Link>
        </div>
        <ul className={styles.quick}>
          {homeLinks.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className={styles.quickLink}>
                <span className={styles.quickLabel}>{item.label}</span>
                <span className={styles.quickBlurb}>{item.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.footerCmd} aria-hidden="true">
          {">"} hint: cd ./skills && cat README.md
        </p>
      </div>
    </section>
  );
}
