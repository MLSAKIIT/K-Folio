
import { useEffect, useState } from "react";
import type {SearchItemData} from "./types.ts";
export function useSearch(
  searchFn: (query: string) => Promise<SearchItemData[]>,
  delay = 300
) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchItemData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchFn(query);
        setResults(data ?? []);
      } catch (err) {
        console.error("Search failed:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [query, searchFn, delay]);

  return {
    query,
    setQuery,
    results,
    loading,
  };
}
