/**
 * Terminal-style command prompt — high-visibility easter egg text.
 */

import styles from "./CmdPrompt.module.css";

type Props = {
  children: string;
  /** Show blinking caret after the command */
  caret?: boolean;
  /** Larger / brighter (e.g. page-transition wipe) */
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export default function CmdPrompt({
  children,
  caret = true,
  size = "md",
  className = "",
  "aria-hidden": ariaHidden = true,
}: Props) {
  return (
    <p
      className={`${styles.cmd} ${styles[size]} ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
      <span className={styles.gt}>{">"}</span>
      <span className={styles.text}>{children}</span>
      {caret ? <span className={styles.caret} /> : null}
    </p>
  );
}
