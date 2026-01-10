import LandingBackground from "@/components/Landing/LandingBackground";
import PostSection from "@/components/Post/PostSection";

const Home = () => {
  return (
    <LandingBackground activeSection="home">
      <div className="w-full py-10">
      <PostSection />
      </div>
    </LandingBackground>
  );
};

export default Home;