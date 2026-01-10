
import { useState } from "react";
import { Search, X } from "lucide-react";
import { useSearch } from "./useSearch";
import type { SearchItemData } from "./types";
import SearchItem from "./SearchItem";

interface Props {
  onSearch: (query: string) => Promise<SearchItemData[]>;
}

export default function SearchBar({ onSearch }: Props) {
  const [open, setOpen] = useState(false);

  const [recent, setRecent] = useState<SearchItemData[]>([
    { id: 1, name: "Mayra S.", meta: "128k Followers" },
    { id: 2, name: "Vihan Singh", meta: "112k Followers" },
  ]);

  const { query, setQuery, results, loading } = useSearch(onSearch);

  const handleSelect = (item: SearchItemData) => {
    setRecent((prev) =>
      [item, ...prev.filter((i) => i.id !== item.id)].slice(0, 5)
    );
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-lg">
      <div
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                   bg-[#0b1330] border border-white/10
                   focus-within:ring-2 focus-within:ring-blue-500/70
                   transition"
      >
        <Search className="w-4 h-4 text-white/60" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for something..."
          className="flex-1 bg-transparent outline-none
                     text-sm text-white placeholder-white/50"
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-white/50 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {open && (
        <div
          className="absolute z-50 mt-2 w-full rounded-2xl
                     bg-[#0a1130] border border-white/10
                     shadow-2xl overflow-hidden"
        >
          <div
            className="flex items-center justify-between px-4 py-3
                       border-b border-white/10"
          >
            <span className="text-xs font-medium text-white/70">
              {query ? "Search results" : "Recent"}
            </span>

            {!query && recent.length > 0 && (
              <button
                type="button"
                onClick={() => setRecent([])}
                className="text-white/40 hover:text-white transition"
                title="Clear all"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="p-2 max-h-72 overflow-y-auto">
            {loading && (
              <p className="text-center text-xs text-white/50 py-4">
                Searching…
              </p>
            )}

            {!loading && query && results.length === 0 && (
              <p className="text-center text-xs text-white/40 py-4">
                No results found
              </p>
            )}

            {!query &&
              recent.map((item) => (
                <SearchItem
                  key={item.id}
                  item={item}
                  onSelect={handleSelect}
                />
              ))}

            {query &&
              results.map((item) => (
                <SearchItem
                  key={item.id}
                  item={item}
                  onSelect={handleSelect}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
 }
