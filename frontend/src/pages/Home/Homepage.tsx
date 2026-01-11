import { useState } from "react";

import Navbar from "../../components/Home/Navbar";
import StoriesBar from "../../components/Home/StoriesBar";
import RightSidebar from "../../components/Home/RightSidebar";
import CreatePostBox from "../../components/Home/CreatePostBox";
import PostSection from "../../components/Post/PostSection";
import CreatePostModal from "../../components/Create Post/createPost";

export default function Homepage() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050b1f] text-white pt-28">

      {/* NAVBAR */}
      <Navbar onCreatePost={() => setIsCreatePostOpen(true)} />

      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6">

        {/* MAIN FEED */}
        <div className="flex-1 space-y-6">

          {/* Stories */}
          <StoriesBar />

          {/* Create Post Box */}
          <CreatePostBox onCreatePost={() => setIsCreatePostOpen(true)} />

          {/* Feed */}
          <PostSection />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Create Post Modal */}
      {isCreatePostOpen && (
        <CreatePostModal onClose={() => setIsCreatePostOpen(false)} />
      )}
    </div>
  );
}
