import {  Plus, Send, Bell, Menu, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchBar from "../Homepage/search/SearchBar";

type NavbarProps = {
  onCreatePost: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onCreatePost }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-6 left-1/2 z-50
        w-[94%] lg:w-[85%]
        -translate-x-1/2
      "
    >
      <nav
        className="
          relative flex items-center justify-between
          rounded-2xl
          border border-white/15
          bg-white/5
          backdrop-blur-xl
          px-4 lg:px-7
          py-3
          shadow-[0_20px_60px_rgba(0,0,0,0.65)]
        "
      >
        {/* Top Shine Line */}
        <div className="pointer-events-none absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

        {/* Logo */}
        <Link to="/home">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="
              text-lg lg:text-2xl font-extrabold
              tracking-wide
              bg-gradient-to-r from-white via-blue-300 to-cyan-300
              bg-clip-text text-transparent
              cursor-pointer
            "
          >
            K-Folio
          </motion.h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 justify-center px-10">
          <SearchBar
            onSearch={async (query) => {
              return [
                { id: 1, name: "Mayra S.", meta: "128k Followers" },
                { id: 2, name: "Vihan Singh", meta: "112k Followers" },
                { id: 3, name: "Megha Ghosh", meta: "98k Followers" },
              ].filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              );
            }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 lg:gap-5">

          {/* Create Post */}
          <motion.button
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.92 }}
            onClick={onCreatePost}
            className="
              relative flex items-center gap-2
              rounded-full
              px-4 py-2
              text-sm font-semibold text-white
              bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]
              shadow-[inset_0_0_18px_rgba(59,130,246,0.45),0_0_10px_rgba(59,130,246,0.9)]
            "
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-500/20 opacity-0 hover:opacity-70 duration-300 transition-opacity" />
            <Plus size={18} strokeWidth={3} />
            <span className="hidden lg:inline">Create</span>
          </motion.button>

          {/* Icons */}
          {[Send, Bell, Menu].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer text-white/70 hover:text-white"
            >
              <Icon />
            </motion.div>
          ))}

          {/* Profile */}
          <Link to="/profile">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="
                flex items-center justify-center
                w-9 h-9 rounded-full
                bg-gradient-to-br from-blue-500 to-cyan-400
                cursor-pointer
              "
            >
              <User size={18} className="text-black" />
            </motion.div>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
