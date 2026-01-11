import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Homepage/search/SearchBar";
import { searchUsers } from "../../api/homeApi";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between
                    bg-[#070f2d]/80 backdrop-blur-xl border-b border-white/10
                    sticky top-0 z-50">

      {/* Left Logo + Search */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-white cursor-pointer"
            onClick={() => navigate("/home")}>
          K-Folio
        </h1>

        {/* Search */}
        <SearchBar onSearch={searchUsers} />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">

        {/* Home */}
        <Link
          to="/home"
          className="text-sm text-white/80 hover:text-white transition"
        >
          Home
        </Link>

        {/* Profile Button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-[#0b1330] border border-white/10
                     hover:border-blue-500 transition"
        >
          <img
            src="/avatars/user1.png"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-sm">Profile</span>
        </button>
      </div>
    </div>
  );
}
