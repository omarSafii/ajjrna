import { useMedia } from "react-use";

export default function useIsSm() {
  return useMedia("(min-width: 640px)", false);
}
