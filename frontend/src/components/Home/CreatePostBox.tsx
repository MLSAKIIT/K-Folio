import { Image, Video, Smile } from "lucide-react";

type Props = {
  onCreatePost: () => void;
};

export default function CreatePostBox({ onCreatePost }: Props) {
  return (
    <div className="bg-[#0b1330] border border-white/10 rounded-2xl p-4 mb-6">

      {/* Input Row */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/avatars/user1.png"
          className="w-10 h-10 rounded-full object-cover"
        />

        <button
          onClick={onCreatePost}
          className="flex-1 bg-[#050b1f] border border-white/10 rounded-full px-4 py-2 text-left text-sm text-white/60 hover:bg-[#0d173d] transition"
        >
          What's on your mind?
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-sm">

        <button
          onClick={onCreatePost}
          className="flex items-center gap-2 text-white/60 hover:text-white transition"
        >
          <Video className="w-5 h-5 text-red-500" />
          Live Video
        </button>

        <button
          onClick={onCreatePost}
          className="flex items-center gap-2 text-white/60 hover:text-white transition"
        >
          <Image className="w-5 h-5 text-green-500" />
          Photo/Video
        </button>

        <button
          onClick={onCreatePost}
          className="flex items-center gap-2 text-white/60 hover:text-white transition"
        >
          <Smile className="w-5 h-5 text-yellow-400" />
          Feeling
        </button>

        <button
          onClick={onCreatePost}
          className="px-5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
}
