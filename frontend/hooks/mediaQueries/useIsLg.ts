import { useMedia } from "react-use";

export default function useIsLg() {
  return useMedia("(min-width: 1024px)", false);
}
