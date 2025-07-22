import { useMedia } from "react-use";

export default function useIsMd() {
  return useMedia("(min-width: 768px)", false);
}
