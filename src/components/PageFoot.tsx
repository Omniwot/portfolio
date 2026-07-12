import CommandLink from "./CommandLink";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

type NavItem = {
  command: string;
  href?: string;
  to?: string;
  external?: boolean;
  label: string;
};

type Props = {
  items: readonly NavItem[];
  ariaLabel: string;
  delayStart?: number;
  className?: string;
};

export default function PageFoot({
  items,
  ariaLabel,
  delayStart = 0,
  className = "",
}: Props) {
  return (
    <nav
      className={`${styles.pageFoot} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {items.map((item, i) => (
        <Reveal key={item.command} delay={delayStart + i * 40}>
          <CommandLink
            command={item.command}
            href={item.href}
            to={item.to}
            external={item.external}
            ariaLabel={item.label}
            className={styles.entryLink}
            type={false}
          />
        </Reveal>
      ))}
    </nav>
  );
}
