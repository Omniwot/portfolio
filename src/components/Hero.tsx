import { Link } from "react-router-dom";
import MatrixRain from "./MatrixRain";
import CmdPrompt from "./CmdPrompt";
import { homeLinks, site } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <MatrixRain />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <CmdPrompt size="md">boot --identity</CmdPrompt>
        <p className={styles.brand}>{site.brand}</p>
        <h1 className={styles.headline}>{site.headline}</h1>
        <p className={styles.sub}>{site.subline}</p>
        <p className={styles.decoy} aria-hidden="true">
          <span className={styles.decoyCmd}>{">"} whoami</span>
          <span className={styles.decoyOut}>forward-deployed · agentic · RAG</span>
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
        <p className={styles.decoyRow} aria-hidden="true">
          <span className={styles.decoyCmd}>{">"} load_matrix --fast</span>
          <span className={styles.decoyCmd}>{">"} route_swap</span>
        </p>
      </div>
    </section>
  );
}
