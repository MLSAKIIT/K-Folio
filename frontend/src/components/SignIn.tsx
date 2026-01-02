import { useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex items-center">

      {/* LOGIN CARD */}
      <div className="relative z-10 w-95 ml-20 rounded-2xl bg-[#524C90]/30 backdrop-blur-xl p-8 text-white">
        <ShineBorder shineColor={["#2F5BFF", "white"]} />

        <div className="flex mb-6 bg-black/30 rounded-lg p-1">
          <button className="flex-1 py-2 rounded-md bg-[#2F5BFF] text-sm font-medium transition hover:-translate-y-px">
            Log In
          </button>
          <button className="flex-1 py-2 rounded-md text-sm text-gray-400 transition hover:-translate-y-px">
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-semibold">Welcome Back</h2>
        <p className="text-gray-400 text-sm mt-1">
          Please enter your details to sign in.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </div>
          )}

          <div>
            <label className="text-sm text-gray-300">Username or Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-sm text-gray-300">Password</label>
              <span className="text-xs text-[#2F5BFF] cursor-pointer hover:underline select-none">
                Forgot password?
              </span>
            </div>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 pr-14 outline-none focus:border-[#2F5BFF]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2F5BFF]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#2F5BFF] transition cursor-pointer hover:-translate-y-px rounded-md py-2 font-medium"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 flex items-center gap-3">
          {/* Left line */}
          <div className="flex-1">
            <svg
              className="w-full"
              height="2"
              viewBox="0 0 145 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1"
                x2="145"
                y2="1"
                stroke="white"
                strokeOpacity="0.63"
                strokeWidth="1.2"
              />
            </svg>
          </div>

          {/* Text */}
          <span className="text-sm text-gray-400 whitespace-nowrap">
            Or continue with
          </span>

          {/* Right line */}
          <div className="flex-1">
            <svg
              className="w-full"
              height="2"
              viewBox="0 0 145 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1"
                x2="145"
                y2="1"
                stroke="white"
                strokeOpacity="0.63"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>


        {/* SOCIAL BUTTONS */}
        <div className="mt-4 flex gap-3">
          {/* GOOGLE */}
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black/40 border border-white/20 py-2 text-sm transition hover:-translate-y-px hover:border-[#2F5BFF] hover:shadow-[0_0_16px_rgba(47,91,255,0.5)]">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7168 5.7429C13.8051 6.21609 13.8532 6.71082 13.8532 7.22709C13.8532 11.2654 11.1505 14.1368 7.06841 14.1368C6.14007 14.1372 5.22075 13.9546 4.363 13.5995C3.50525 13.2444 2.72588 12.7238 2.06945 12.0674C1.41301 11.4109 0.892369 10.6316 0.537282 9.77382C0.182195 8.91607 -0.000376868 7.99675 5.84065e-07 7.06841C-0.000376868 6.14006 0.182195 5.22075 0.537282 4.363C0.892369 3.50525 1.41301 2.72588 2.06945 2.06945C2.72588 1.41301 3.50525 0.892369 4.363 0.537282C5.22075 0.182195 6.14007 -0.000376868 7.06841 5.84065e-07C8.97696 5.84065e-07 10.5717 0.702246 11.7953 1.8425L9.80271 3.83506C9.06098 3.12348 8.11962 2.76087 7.06841 2.76087C4.73621 2.76087 2.84058 4.73118 2.84058 7.0641C2.84058 9.39702 4.73621 11.3716 7.06841 11.3716C9.18448 11.3716 10.6249 10.161 10.9207 8.49946H7.06841V5.7429H13.7168Z"
                fill="#2F5BFF"
              />
            </svg>
            <span>Google</span>
          </button>

          {/* FACEBOOK */}
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black/40 border border-white/20 py-2 text-sm transition hover:-translate-y-px hover:border-[#2F5BFF] hover:shadow-[0_0_16px_rgba(47,91,255,0.5)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8532 6.92659C13.8532 3.10311 10.7501 0 6.92659 0C3.10311 0 0 3.10311 0 6.92659C0 10.2791 2.38275 13.0705 5.54128 13.7147V9.00457H4.15596V6.92659H5.54128V5.19495C5.54128 3.85811 6.62875 2.77064 7.96558 2.77064H9.69723V4.84862H8.31191C7.93095 4.84862 7.61925 5.16031 7.61925 5.54128V6.92659H9.69723V9.00457H7.61925V13.8186C11.1172 13.4722 13.8532 10.5215 13.8532 6.92659Z"
                fill="#2F5BFF"
              />
            </svg>
            <span>Facebook</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
