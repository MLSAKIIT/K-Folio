import { useEffect, useState } from "react";
import { fetchStories } from "../../api/homeApi";

type Story = {
  id: number;
  name: string;
  avatar: string;
  media: string;
};

export default function StoriesBar() {
  const [stories, setStories] = useState<Story[]>([]);
  const [myStoryPreview, setMyStoryPreview] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  useEffect(() => {
    fetchStories().then(setStories);
  }, []);

  // Upload your story (mock)
  const handleStoryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setMyStoryPreview(previewUrl);
  };

  return (
    <>
      {/* Stories Container */}
      <div className="bg-[#0a1335] rounded-2xl px-4 py-4 shadow-lg">
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">

          {/* ➕ Add Story */}
          <label className="flex flex-col items-center cursor-pointer snap-start shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full 
                            bg-[#1b2b5c] border-2 border-dashed border-blue-400 
                            flex items-center justify-center text-3xl
                            hover:scale-105 transition">
              +
            </div>
            <span className="text-xs mt-2 text-gray-300">Your Story</span>

            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleStoryUpload}
            />
          </label>

          {/* Your Story Preview */}
          {myStoryPreview && (
            <div
              className="flex flex-col items-center cursor-pointer snap-start shrink-0"
              onClick={() =>
                setActiveStory({
                  id: 0,
                  name: "You",
                  avatar: myStoryPreview,
                  media: myStoryPreview,
                })
              }
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full 
                              border-2 border-blue-500 overflow-hidden 
                              hover:scale-105 transition">
                <img
                  src={myStoryPreview}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-2 text-blue-400">You</span>
            </div>
          )}

          {/* Other Stories */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center cursor-pointer snap-start shrink-0"
              onClick={() => setActiveStory(story)}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full 
                              border-2 border-blue-500 p-[2px]
                              hover:scale-105 transition">
                <img
                  src={story.avatar}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xs mt-2 text-gray-300">{story.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

          <div className="relative w-full h-full sm:w-[380px] sm:h-[680px] 
                          bg-black rounded-none sm:rounded-2xl overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              ✕
            </button>

            {/* Media */}
            {activeStory.media.endsWith(".mp4") ? (
              <video
                src={activeStory.media}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={activeStory.media}
                className="w-full h-full object-cover"
              />
            )}

            {/* Username */}
            <div className="absolute top-4 left-4 text-white text-sm font-semibold">
              {activeStory.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
