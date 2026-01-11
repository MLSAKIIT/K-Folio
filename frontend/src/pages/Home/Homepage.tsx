import Navbar from "../../components/Home/Navbar";
import StoriesBar from "../../components/Home/StoriesBar";
import RightSidebar from "../../components/Home/RightSidebar";
import PostSection from "../../components/Post/PostSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050b1f] text-white">

      {/* Top Navbar */}
      <Navbar />

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto px-6 pt-24 flex gap-6">

        {/* Main Column */}
        <div className="flex-1 space-y-6">
          <StoriesBar />
          <PostSection />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />

      </div>
    </div>
  );
}
