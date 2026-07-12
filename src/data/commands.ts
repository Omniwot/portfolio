/**
 * Path → easter-egg shell command shown during route transitions and page headers.
 */

export const routeCommands: Record<string, string> = {
  "/": "boot --home",
  "/work": "cd ./work && history",
  "/projects": "open projects --selected",
  "/skills": "ls ./stack --verbose",
  "/education": "cat education.md | less",
  "/contact": "ping contact --ttl=∞",
};

export function commandForPath(pathname: string): string {
  return routeCommands[pathname] ?? "route_swap --force";
}

/** Extra decoy commands sprinkled through page copy */
export const decoyCommands = [
  "whoami",
  "load_matrix --fast",
  "export PATH=$STACK",
  "grep -r 'agent' .",
  "make deploy",
  "git log --oneline -n 7",
  "ssh work@theorem",
  "clear && history",
  "docker compose up agents",
  "kubectl get pods -n rag",
] as const;
