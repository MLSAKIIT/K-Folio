import { useState, useRef } from "react";
import { Image, MapPin, UserPlus, Clock, X, Send, Calendar, Video } from "lucide-react";

type CreatePostModalProps = {
  onClose: () => void;
};

export default function CreatePostModal({ onClose }: CreatePostModalProps) {
  const [content, setContent] = useState("");
  const [visibility, setVisibility] = useState<"ANYONE" | "CLOSE_FRIENDS">(
    "ANYONE"
  );
  const [loading, setLoading] = useState(false);

  // --- STATE: Image/Video ---
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [media, setMedia] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  // --- STATE: Location ---
  const [location, setLocation] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // --- Timer/Schedule State ---
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");

  // --- HANDLERS ---

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      const objectUrl = URL.createObjectURL(file);
      setMediaPreview(objectUrl);
    }
  };

  const clearMedia = () => {
    setMedia(null);
    setMediaPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLocationClick = () => {
    if (location) return;
    
    setIsLocating(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not detect location. Please allow permissions.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsLocating(false);
    }
  };

  const clearLocation = () => {
    setLocation(null);
  };

  const handlePost = async () => {
    if (!content.trim() && !media) return;

    setLoading(true);

    console.log({
      content,
      visibility,
      scheduledDate: scheduledDate || "NOW", 
      mediaFile: media?.name,
      location,
    });

    setTimeout(() => {
      setContent("");
      setScheduledDate("");
      setShowDatePicker(false);
      setVisibility("ANYONE");
      clearMedia();
      clearLocation();
      setLoading(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/2 backdrop-blur-[3px]"
        onClick={onClose}
      />

      {/* MODAL CONTAINER:*/}
      <div className="relative flex flex-col w-[95%] md:w-[680px] h-auto rounded-3xl bg-[#00092A] p-5 shadow-2xl transition-all">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white z-10"
        >
          <X size={20} />
        </button>

        {/* Title: Reduced margin and font size */}
        <h2 className="mb-4 text-center text-xl font-semibold text-[#7582B5] shrink-0">
          Create new post
        </h2>

        {/* Visibility */}
        <div className="mb-3 text-sm text-white/80 shrink-0">
          <p className="mb-2 font-medium">Who can see this post?</p>
          <div className="flex gap-4">
            <label className=" flex w-fit items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input
                type="radio"
                name="visibility"
                checked={visibility === "ANYONE"}
                onChange={() => setVisibility("ANYONE")}
                className="accent-blue-500"
              />
              Anyone
            </label>

            <label className="flex w-fit items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input
                type="radio"
                name="visibility"
                checked={visibility === "CLOSE_FRIENDS"}
                onChange={() => setVisibility("CLOSE_FRIENDS")}
                className="accent-blue-500"
              />
              Close Friends
            </label>
          </div>
        </div>

        {/* WHITE BOX:*/}
        <div className="flex flex-col h-56 rounded-2xl bg-white p-3 min-h-0 overflow-hidden shrink-0">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What’s on your mind?"
            className="flex-1 w-full resize-none bg-transparent text-gray-800 outline-none placeholder-gray-500 mb-2 overflow-y-auto"
          />

          {/* --- PREVIEWS SECTION (Media & Location) --- */}
          {(mediaPreview || location) && (
            <div className="mb-2 flex flex-wrap gap-2 shrink-0">
              {/* Media Preview */}
              {mediaPreview && (
                <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                  {media?.type.startsWith("image/") ? (
                    <img
                      src={mediaPreview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                      <Video size={16} />
                    </div>
                  )}
                  <button
                    onClick={clearMedia}
                    className="absolute right-0.5 top-0.5 rounded-full bg-black/50 p-0.5 text-white hover:bg-black/70"
                  >
                    <X size={8} />
                  </button>
                </div>
              )}

              {/* Location Badge */}
              {location && (
                <div className="flex h-fit items-center gap-2 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-800">
                  <MapPin size={10} />
                  <span className="max-w-[80px] truncate">{location}</span>
                  <button
                    onClick={clearLocation}
                    className="ml-1 rounded-full p-0.5 hover:bg-blue-200"
                  >
                    <X size={10} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Actions inside White Box */}
          <div className="mt-auto flex flex-wrap gap-3 text-xs border-t border-gray-300 pt-2 shrink-0">
            {/* 1. Image Upload Action */}
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,video/*"
              />
              <button 
                onClick={handleFileClick}
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Image size={14} className="text-blue-600" />
                <span className="hidden sm:inline">{media ? "Change" : "Add Image/Video"}</span>
                <span className="sm:hidden">{media ? "Change" : "Media"}</span>
              </button>
            </div>

            {/* 2. Location Action */}
            <button 
                onClick={handleLocationClick}
                disabled={isLocating}
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
            >
              <MapPin size={14} className="text-blue-600" />
              <span className="hidden sm:inline">{isLocating ? "Locating..." : location ? "Update" : "Add Location"}</span>
              <span className="sm:hidden">{isLocating ? "..." : location ? "Update" : "Location"}</span>
            </button>

            {/* 3. Tag People */}
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
              <UserPlus size={14} className="text-blue-600" />
              <span className="hidden sm:inline">Tag people</span>
              <span className="sm:hidden">Tag</span>
            </button>
          </div>
        </div>

        {/* Date Picker Input (Appears below white box) */}
        {showDatePicker && (
          <div className="mt-3 animate-in fade-in slide-in-from-top-2 shrink-0">
            <label className="mb-1 block text-xs text-white/80">
              Schedule for later:
            </label>
            <input
              type="datetime-local"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full rounded-lg bg-white/10 p-2 text-sm text-white placeholder-white/50 backdrop-blur-sm outline-none focus:bg-white/20 [color-scheme:dark]"
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              showDatePicker ? "bg-blue-500 hover:bg-blue-600" : "bg-white hover:bg-gray-200"
            }`}
          >
            <Clock
              size={16}
              className={showDatePicker ? "text-white" : "text-[#07163a]"}
            />
          </button>

          <button
            onClick={handlePost}
            disabled={loading || (!content.trim() && !media)}
            className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm text-white hover:bg-white/30 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              "..."
            ) : scheduledDate && showDatePicker ? (
              <>
                Schedule <Calendar size={14} fill="currentColor" />
              </>
            ) : (
              <>
                Post <Send size={14} fill="currentColor" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}