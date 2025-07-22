import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

export default function useSetSearchParams() {
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = useCallback(
    (
      params: Record<string, string> | ((prevSearchParams: Record<string, string>) => Record<string, string>),
      method: "replace" | "push" = "replace",
      useHistoryObject: boolean = false,
      state: any = null,
    ) => {
      let newSearchParams: URLSearchParams;
      if (typeof params === "function") {
        const prevSearchParams = Object.fromEntries(searchParams);
        newSearchParams = new URLSearchParams(params(prevSearchParams));
      } else {
        newSearchParams = new URLSearchParams(params);
      }

      let newSearchParamsString = newSearchParams.toString();

      if (newSearchParamsString) newSearchParamsString = `?${newSearchParamsString}`;

      const newPathname = `${pathname}${newSearchParamsString}`;

      if (method === "push") {
        if (useHistoryObject) history.pushState(state, "", newPathname);
        else startTransition(() => router.push(newPathname, { scroll: false }));
      } else {
        if (useHistoryObject) history.replaceState(state, "", newPathname);
        else startTransition(() => router.replace(newPathname, { scroll: false }));
      }
    },
    [router, pathname, searchParams],
  );

  return { searchParams, setSearchParams, pending };
}
