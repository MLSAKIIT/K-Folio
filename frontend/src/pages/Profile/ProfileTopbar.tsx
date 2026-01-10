import { Search, Plus, Send, Bell, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const ProfileTopbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 120) setHidden(true);
    if (latest < previous) setHidden(false);
  });

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: hidden ? "-140%" : "0%",
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed top-7 left-1/2 z-50
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
          backdrop-blur-sm
          px-4 lg:px-7
          py-3
          shadow-[0_20px_60px_rgba(0,0,0,0.65)]
        "
      >
        <div className="pointer-events-none absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

        <motion.h1
          whileHover={{ scale: 1.04 }}
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

        <div className="hidden lg:flex items-center ml-24">
          <div
            className="
              group flex items-center gap-2
              rounded-full
              border border-white/20
              bg-black/40
              px-5 py-2
              transition-all
              focus-within:border-blue-400
              focus-within:shadow-[0_0_9px_rgba(59,130,246,0.7)]
            "
          >
            <Search
              size={18}
              className="text-white/50 group-focus-within:text-blue-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="
                w-52 bg-transparent text-sm text-white
                placeholder:text-white/40
                outline-none
              "
            />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          <motion.button
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.92 }}
            className="
              relative flex items-center gap-2
              rounded-full
              px-4 py-2
              text-sm font-semibold text-white
              bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]
              shadow-[inset_0_0_18px_rgba(59,130,246,0.45),0_0_10px_rgba(59,130,246,0.9)]
            "
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-500/20 opacity-0 hover:opacity-70 duration-300 cursor-pointer transition-opacity" />
            <Plus size={20} strokeWidth={3.5} />
            <span className="hidden lg:inline">Create</span>
          </motion.button>

          {[Search, Send, Bell, Menu].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer text-white/70 hover:text-white"
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default ProfileTopbar;
