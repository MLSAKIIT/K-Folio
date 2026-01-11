import { useEffect, useState } from "react";
import { fetchStories } from "../../api/homeApi";

type Story = {
  id: number;
  name: string;
  avatar: string;
  media: string; // image or video
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
      {/* Stories Row */}
      <div className="flex gap-4 overflow-x-auto pb-3">

        {/* ➕ Add Story */}
        <label className="flex flex-col items-center cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-[#1b2b5c] border-2 border-dashed border-blue-400 flex items-center justify-center text-2xl">
            +
          </div>
          <span className="text-xs mt-1 text-gray-300">Your Story</span>

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
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              setActiveStory({
                id: 0,
                name: "You",
                avatar: myStoryPreview,
                media: myStoryPreview,
              })
            }
          >
            <div className="w-16 h-16 rounded-full border-2 border-blue-500 overflow-hidden">
              <img src={myStoryPreview} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs mt-1 text-blue-400">You</span>
          </div>
        )}

        {/* Other Stories */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActiveStory(story)}
          >
            <div className="w-16 h-16 rounded-full border-2 border-blue-500 p-[2px]">
              <img
                src={story.avatar}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs mt-1 text-gray-300">{story.name}</span>
          </div>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-[360px] h-[640px] bg-black rounded-xl overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-3 right-3 text-white text-xl z-50"
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
            <div className="absolute bottom-4 left-4 text-white text-sm">
              {activeStory.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
