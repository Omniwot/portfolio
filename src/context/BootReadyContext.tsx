import { createContext, useContext } from "react";

/** False while MatrixLoader is showing; hero typing should wait for true. */
export const BootReadyContext = createContext(true);

export function useBootReady() {
  return useContext(BootReadyContext);
}
