import { createContext } from "react";

export const sectionCount = createContext<{
  count: number;
  setCount: (count: number) => void;
}>({
  count: 1,
  setCount: () => {},
});
