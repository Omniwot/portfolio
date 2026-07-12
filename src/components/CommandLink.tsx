import { Link } from "react-router-dom";
import TypeText from "./TypeText";
import styles from "./CommandLine.module.css";

type Props = {
  command: string;
  href?: string;
  to?: string;
  external?: boolean;
  className?: string;
  type?: boolean;
  speed?: number;
  startDelay?: number;
  active?: boolean;
  ariaLabel?: string;
};

export default function CommandLink({
  command,
  href,
  to,
  external = false,
  className = "",
  type = true,
  speed = 12,
  startDelay = 0,
  active = true,
  ariaLabel,
}: Props) {
  const body = (
    <>
      <span className={styles.prompt} aria-hidden="true">
        {">"}
      </span>
      {type ? (
        <TypeText
          text={command}
          speed={speed}
          startDelay={startDelay}
          active={active}
          className={styles.cmd}
          cursor={false}
        />
      ) : (
        <span className={styles.cmd}>{command}</span>
      )}
    </>
  );

  const label = ariaLabel ?? command;

  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.link} ${className}`.trim()}
        aria-label={label}
      >
        {body}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${styles.link} ${className}`.trim()}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noreferrer" }
        : undefined)}
    >
      {body}
    </a>
  );
}
