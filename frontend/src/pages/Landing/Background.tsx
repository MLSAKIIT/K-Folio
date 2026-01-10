
import SignUpcard from "@/components/Signup_card.tsx";
import MainContent from "../../components/LeftComponent/MainContent";
import SignIn from "../../components/ui/SignIn.tsx"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


type AuthView = "signin" | "signup";

const Background: React.FC = () => {
  const [authView, setAuthView] = useState<AuthView>("signin");
  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[linear-gradient(140deg,#020B3A_0%,#01030A_30%,#01030A_40%,#020B3A_90%,#010B6A_5%)]">
      <div className="relative hidden lg:flex lg:w-7/12 min-h-screen">
        <div
          className="absolute top-0 left-0 h-screen w-full bg-repeat bg-left bg-contain opacity-65"
          style={{
            backgroundImage: "url('/bg-pattern.svg')",
          }}
        />

        <div className="relative z-10 h-screen w-full flex">
          <MainContent />
        </div>
      </div>

      <div className="relative w-full lg:w-5/12 min-h-screen mx-auto lg:mx-0 bg-black flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {authView === "signin" && (
            <motion.div
              key="signin"
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <SignIn onSwitch={() => setAuthView("signup")} />
            </motion.div>
          )}

          {authView === "signup" && (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <SignUpcard onSwitch={() => setAuthView("signin")} />
            </motion.div>
          )}
      
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Background;