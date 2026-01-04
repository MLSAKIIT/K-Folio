  import { useState } from "react";
import { ShineBorder } from "./ui/shine-border";

const SignUpcard: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log({ fullName, username, email, password, confirmPassword });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E0E15] ">
      <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-[#7F60AD33]/30 p-7 text-white shadow-lg">

        {/* Shine Border */}
        <ShineBorder shineColor={["#2F5BFF", "white"]} />

        {/* Tab Switcher */}
        <div className="flex mb-6 large p-1 bg-[#111123] text-sm font-medium">
          <button className="flex-1 py-2 rounded-md text-gray-400 text-sm transition hover:-translate-y-px ">
            Log In
          </button>
          <button className="flex-1 py-2 rounded-md bg-[#2F5BFF] text-sm font-medium transition hover:-translate-y-px">
            Sign Up
          </button>
        </div>

        {/* Header */}
        <h2 className="text-4xl font-bold mb-1 flex items-center justify-center">Create your account</h2>
        <p className=" text-1xl text-gray-400 font-bold text-sm mb-4 flex items-center justify-center">
          Join the community and start sharing today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@address.com"
              className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Passwords */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
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

            <div className="flex-1">
              <label className="text-sm text-gray-300">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
               className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center text-xs text-gray-400">
            <input type="checkbox" className="mr-2" />
            By signing up, you agree to our{" "}
            <span className="text-[#2F5BFF] underline ml-1 cursor-pointer">
              Terms & Privacy Policy
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#2F5BFF] py-2 rounded-md font-medium transition hover:-translate-y-px"
          >
            Create Account
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default SignUpcard;
