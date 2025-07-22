import { useMedia } from "react-use";

export default function useIsXl() {
  return useMedia("(min-width: 1440px)", false);
}
