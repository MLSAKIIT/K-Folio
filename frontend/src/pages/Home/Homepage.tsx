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
    <div className="min-h-screen bg-[#050b1f] text-white">

      {/* Sticky Navbar */}
      <Navbar onCreatePost={() => setIsCreatePostOpen(true)} />

      {/* Page Content */}
      <div className="pt-28 pb-10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">

          {/* Layout */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* FEED COLUMN */}
            <div className="flex-1 max-w-[820px] mx-auto lg:mx-0 space-y-6">

              {/* Stories */}
              <StoriesBar />

              {/* Create Post */}
              <CreatePostBox onCreatePost={() => setIsCreatePostOpen(true)} />

              {/* Feed */}
              <PostSection />

            </div>

            {/* SIDEBAR (Desktop Only) */}
            <div className="hidden lg:block w-[320px] shrink-0">
              <RightSidebar />
            </div>

          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {isCreatePostOpen && (
        <CreatePostModal onClose={() => setIsCreatePostOpen(false)} />
      )}
    </div>
  );
}
