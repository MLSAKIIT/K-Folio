import { useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

type SignInProps = {
  onSwitch?: () => void;
};

const LoginPage: React.FC<SignInProps> = ({ onSwitch }) => {
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
    <div className="fixed inset-0 w-screen h-screen bg-[#050b1f] bg-[url('/topo-bg.svg')] bg-cover bg-center flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-[#524C90]/30 backdrop-blur-xl p-6 sm:p-8 text-white shadow-2xl">

        <ShineBorder shineColor={["#2F5BFF", "white"]} />

        {/* Switch Tabs */}
        <div className="flex mb-6 bg-black/30 rounded-lg p-1">
          <button className="flex-1 py-2 rounded-md bg-[#2F5BFF] text-sm font-medium transition hover:-translate-y-px">
            Log In
          </button>
          <button
            className="flex-1 py-2 rounded-md text-sm text-gray-400 transition hover:-translate-y-px"
            onClick={() => onSwitch?.()}
          >
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
      </div>
    </div>
  );
};

export default LoginPage;
