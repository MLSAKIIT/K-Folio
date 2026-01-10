import React, { useState } from 'react';
import { LayoutGrid, Film, Bookmark, SquareUser } from 'lucide-react';

const ProfileContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Corgi
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Dog
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Dog
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Dog
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800', // Stones
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800', // Mountains
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800', // Landscape
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800', // Landscape
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Forest
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Nature
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Nature
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Nature
  ];

  return (
    <div className="w-full mt-4 sm:mt-8">
      {/* Tabs */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="flex w-full justify-between items-center bg-[#000722]/60 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 flex justify-center py-3 sm:py-4 transition-all duration-300 relative ${
              activeTab === 'posts' ? 'text-blue-500' : 'text-white/40 hover:text-white'
            }`}
          >
            <LayoutGrid size={20} className="sm:w-[22px] sm:h-[22px]" />
            {activeTab === 'posts' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('reels')}
            className={`flex-1 flex justify-center py-3 sm:py-4 transition-all duration-300 relative ${
              activeTab === 'reels' ? 'text-blue-500' : 'text-white/40 hover:text-white'
            }`}
          >
            <Film size={20} className="sm:w-[22px] sm:h-[22px]" />
            {activeTab === 'reels' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 flex justify-center py-3 sm:py-4 transition-all duration-300 relative ${
              activeTab === 'saved' ? 'text-blue-500' : 'text-white/40 hover:text-white'
            }`}
          >
            <Bookmark size={20} className="sm:w-[22px] sm:h-[22px]" />
            {activeTab === 'saved' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex-1 flex justify-center py-3 sm:py-4 transition-all duration-300 relative ${
              activeTab === 'tagged' ? 'text-blue-500' : 'text-white/40 hover:text-white'
            }`}
          >
            <SquareUser size={20} className="sm:w-[22px] sm:h-[22px]" />
            {activeTab === 'tagged' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[8px] sm:gap-[11px] py-[10px]">
        {posts.map((post, index) => (
          <div key={index} className="w-full aspect-square md:h-[277px] overflow-hidden rounded-lg sm:rounded-xl border border-white/5 group cursor-pointer relative shadow-lg">
            <img
              src={post}
              alt={`post-${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8 sm:mt-12 mb-10 relative z-30">
        <button className="px-6 sm:px-10 py-2 sm:py-2.5 rounded-full border border-white/20 text-[12px] sm:text-[14px] text-white font-medium hover:bg-white/10 transition-all duration-300 bg-[#000d3d] shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
