import TypeText from "./TypeText";
import styles from "./CommandLine.module.css";

type Props = {
  command: string;
  /** Optional muted status line under the command */
  status?: string;
  className?: string;
  type?: boolean;
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
};

export default function CommandLine({
  command,
  status,
  className = "",
  type = true,
  speed = 12,
  startDelay = 0,
  onDone,
}: Props) {
  return (
    <div className={className}>
      <p className={styles.line} aria-label={`command ${command}`}>
        <span className={styles.prompt}>{">"}</span>
        {type ? (
          <TypeText
            text={command}
            speed={speed}
            startDelay={startDelay}
            className={styles.cmd}
            onDone={onDone}
          />
        ) : (
          <span className={styles.cmd}>{command}</span>
        )}
      </p>
      {status ? <p className={styles.hint}>{status}</p> : null}
    </div>
  );
}
