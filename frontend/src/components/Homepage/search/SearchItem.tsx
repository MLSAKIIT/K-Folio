
import { X } from "lucide-react";
import type { SearchItemData } from "./types";

interface Props {
  item: SearchItemData;
  onSelect: (item: SearchItemData) => void;
}

export default function SearchItem({ item, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg
                 text-left transition
                 hover:bg-white/5 active:bg-white/10"
    >
      <div
        className="w-9 h-9 shrink-0 rounded-full
                   bg-gradient-to-br from-blue-500/30 to-purple-500/30
                   flex items-center justify-center
                   text-sm font-semibold text-white"
      >
        {item.name[0]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white truncate">{item.name}</p>
        {item.meta && (
          <p className="text-xs text-white/60 truncate">{item.meta}</p>
        )}
      </div>
      <X className="w-4 h-4 text-white/20 group-hover:text-white/40 transition" />
    </button>
  );
}
