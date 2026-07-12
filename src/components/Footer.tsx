import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>{site.brand}</span>
        <span className={styles.copy}>
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
