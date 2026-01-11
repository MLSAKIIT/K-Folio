import SearchBar from "../Homepage/search/SearchBar";
import type { SearchItemData } from "../Homepage/search/types";

export default function Navbar() {

  // Mock search handler (later backend will replace this)
  const handleSearch = async (query: string): Promise<SearchItemData[]> => {
    if (!query) return [];

    // MOCK DATA (replace later with API)
    return [
      { id: 1, name: "Mayra S.", meta: "128k Followers" },
      { id: 2, name: "Vihan Singh", meta: "112k Followers" },
      { id: 3, name: "Megha Ghosh", meta: "98k Followers" },
    ].filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#070e2a]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-lg font-semibold">K-Folio</div>

        {/* Search */}
        <div className="flex-1 mx-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Profile */}
        <img src="/avatars/user1.png" className="w-9 h-9 rounded-full cursor-pointer" />

      </div>
    </div>
  );
}
