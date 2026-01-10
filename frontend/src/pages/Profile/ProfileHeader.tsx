import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type StatProps = {
  value: number;
  label: string;
};

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-lg sm:text-xl font-semibold">
      {value}{" "}
      <span className="text-xs sm:text-sm text-white/50">{label}</span>
    </p>
  </div>
);

const ProfileHeader: React.FC = () => {
  const [banner, setBanner] = useState("");
  const [avatar, setAvatar] = useState("");
  const [stats, setStats] = useState<
    { value: number; label: string }[]
  >([
    { value: 0, label: "posts" },
    { value: 0, label: "followers" },
    { value: 0, label: "following" },
  ]);

  useEffect(() => {
    setAvatar("https://avatars.githubusercontent.com/u/96404713?v=4");
    setBanner(
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    );
    setStats([
      { value: 128, label: "posts" },
      { value: 1024, label: "followers" },
      { value: 256, label: "following" },
    ]);
  }, []);

  return (
    <section className="w-full pt-17">
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#000722]/80 backdrop-blur-xl">
       
        <div className="relative h-50  sm:h-60 w-full">
          <img
            src={banner}
            alt="cover"
            className="h-full w-full object-cover"
          />

          <button className="absolute right-4 top-4 rounded-full cursor-pointer group bg-black/50 p-2  transition-all duration-300 text-white backdrop-blur hover:bg-black/70">
                            <svg
  className="
    h-5 w-5
    text-white/30 group-hover:text-white
    transition-all duration-300 ease-out
    group-hover:scale-105  
  "
  width="34"
  height="32"
  viewBox="0 0 34 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 26.6666H29.75"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M23.375 4.66668C23.9386 4.13625 24.703 3.83826 25.5 3.83826C25.8947 3.83826 26.2854 3.91142 26.65 4.05356C27.0147 4.1957 27.3459 4.40404 27.625 4.66668C27.9041 4.92933 28.1254 5.24113 28.2764 5.58429C28.4275 5.92745 28.5052 6.29525 28.5052 6.66668C28.5052 7.03812 28.4275 7.40592 28.2764 7.74908C28.1254 8.09224 27.9041 8.40404 27.625 8.66668L9.91667 25.3334L4.25 26.6667L5.66667 21.3334L23.375 4.66668Z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </button>
        </div>

  
        <div className="relative px-4 pb-8 pt-6 sm:px-6 lg:px-10">

          <div className="absolute -top-16 left-4 sm:left-6 lg:left-10">
            <img
              src={avatar}
              alt="avatar"
              className="
                h-28 w-28
                sm:h-32 sm:w-32
                lg:h-36 lg:w-36
                rounded-full border-4 border-[#020617] object-cover
              "
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">

            <div className="pt-16 sm:pt-20 text-white">
              <div className="flex items-center gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Dev Ray
                </h2>
                <svg
  className="
    h-6 w-6 cursor-pointer
    text-white/30 hover:text-white
    transition-all duration-300 ease-out
    hover:scale-105  
  "
  width="34"
  height="32"
  viewBox="0 0 34 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 26.6666H29.75"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M23.375 4.66668C23.9386 4.13625 24.703 3.83826 25.5 3.83826C25.8947 3.83826 26.2854 3.91142 26.65 4.05356C27.0147 4.1957 27.3459 4.40404 27.625 4.66668C27.9041 4.92933 28.1254 5.24113 28.2764 5.58429C28.4275 5.92745 28.5052 6.29525 28.5052 6.66668C28.5052 7.03812 28.4275 7.40592 28.2764 7.74908C28.1254 8.09224 27.9041 8.40404 27.625 8.66668L9.91667 25.3334L4.25 26.6667L5.66667 21.3334L23.375 4.66668Z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


              </div>

              <p className="text-sm text-white/50">@dummydev</p>

              <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
                India based | Creating screens for impact! <br />
                Digital Artist & UI Designer
              </p>

              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-400 hover:underline"
              >
                k-folio.com/john
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="
                    relative flex items-center gap-2
                    rounded-full px-4 py-2
                    text-sm font-semibold text-white
                    bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]
                    shadow-[inset_0_0_18px_rgba(59,130,246,0.4),0_0_7px_rgba(59,130,246,0.9)]
                  "
                >
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <span className="absolute inset-0 rounded-full cursor-pointer bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-500/20 opacity-0 hover:opacity-70 transition-opacity" />
                  Edit Profile
                </motion.button>

                <button
                  className="
                    flex items-center gap-2 rounded-full
                    border border-white/30 px-7 py-3 text-sm text-white
                    hover:bg-white/10
                  "
                >
                  <Settings size={16} />
                  Settings
                </button>
              </div>
            </div>


            <div
              className="
                flex justify-between gap-8
                pt-2 lg:pt-10 lg:gap-16
                text-white
              "
            >
              {stats.map((stat) => (
                <Stat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
