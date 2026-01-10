import React, { useState } from "react";
import { LayoutGrid, Clapperboard, Bookmark, Users } from "lucide-react";

const ProfileContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const initialPosts = [
    { id: 1, image: "/post.jpg" },
    { id: 2, image: "/post.jpg" },
    { id: 3, image: "/post.jpg" },
    { id: 4, image: "/post.jpg" },
    { id: 5, image: "/postgrid.jpg" },
    { id: 6, image: "/postgrid.jpg" },
    { id: 7, image: "/postgrid.jpg" },
    { id: 8, image: "/postgrid.jpg" },
    { id: 9, image: "/postgrid.jpg" },
    { id: 10, image: "/postgrid.jpg" },
    { id: 11, image: "/postgrid.jpg" },
    { id: 12, image: "/postgrid.jpg" },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleLoadMore = () => {
    const nextBatch = initialPosts.map((post) => ({
      ...post,
      id: posts.length + post.id,
    }));
    setPosts([...posts, ...nextBatch]);
  };

  const tabs = [
    { id: "posts", icon: <LayoutGrid size={22} /> },
    { id: "reels", icon: <Clapperboard size={22} /> },
    { id: "saved", icon: <Bookmark size={22} /> },
    { id: "tagged", icon: <Users size={22} /> },
  ];

  return (
    <div className="mt-6 w-full pb-20">
      {/* Tabs */}
      <div className="flex justify-center border border-white/20 rounded-xl bg-[#000722]/80 backdrop-blur-xl overflow-hidden mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex justify-center py-5 relative transition-colors duration-200 cursor-pointer ${
              activeTab === tab.id ? "text-[#3B82F6]" : "text-white/50 hover:text-white"
            }`}
          >
            {tab.icon}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.8)] mx-1 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative border border-white/5"
          >
            <img 
              src={post.image} 
              alt="post" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-16 flex justify-center">
        <button 
          onClick={handleLoadMore}
          className="
          px-12 py-3.5 rounded-full 
          border border-[#3B82F6]/30 
          bg-[#000722]/80 text-white font-medium 
          hover:bg-[#000722] hover:border-[#3B82F6]/60 
          transition-all duration-300 
          shadow-[0_0_20px_rgba(0,0,0,0.4)]
          active:scale-95 cursor-pointer
        ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
