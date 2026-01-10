import { useState } from "react";
import { ShineBorder } from "./ui/shine-border";

type SignInProps = {
  onSwitch: () => void;
};

const SignUpCard: React.FC<SignInProps> = ({ onSwitch }) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Account created successfully! Please log in.");
      onSwitch();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  className="relative min-h-screen w-full bg-black flex items-center">
      <div className="relative z-10 w-95 ml-20 rounded-2xl bg-[#524C90]/30 backdrop-blur-xl p-8 text-white">

        {/* Shine Border */}
        <ShineBorder shineColor={["#2F5BFF", "white"]} />

        {/* Tabs */}
        <div className="mb-6 flex p-1 bg-[#11101E] rounded-md text-xs font-medium">
          <button className="flex-1 py-2 rounded-md text-sm text-gray-400 transition hover:-translate-y-px">
            Log In
          </button>
          <button className="flex-1 py-2 rounded-md bg-[#2F5BFF] text-sm font-medium transition hover:-translate-y-px">
            Sign Up
          </button>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-semibold">
          Create Your Account
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Join the community and start sharing today.
        </p>

        {/* Form */}
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
              placeholder="dummydoe"
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
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative">
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
              <label className="text-sm text-gray-300">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 outline-none focus:border-[#2F5BFF]"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center text-[11px] text-[#A1A1B3]">
            <input type="checkbox" className="mr-2" />
            By signing up, you agree to our
            <span className="ml-1 cursor-pointer underline text-[#2F5BFF]">
              Terms & Privacy Policy
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-md bg-[#2F5BFF] py-2 font-medium transition hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpCard;