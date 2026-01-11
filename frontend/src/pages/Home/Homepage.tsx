import Navbar from "../../components/Home/Navbar";
import StoriesBar from "../../components/Home/StoriesBar";
import RightSidebar from "../../components/Home/RightSidebar";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#050b1f] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6">
        <div className="flex-1">
          <StoriesBar />
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}
