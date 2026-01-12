import { useEffect, useState } from "react";
import {
  fetchInfluencers,
  followUser,
  fetchFollowRequests,
} from "../../api/homeApi";

type Influencer = {
  id: number;
  name: string;
  followers: string;
  avatar: string;
};

type FollowRequest = {
  id: number;
  name: string;
  avatar: string;
};

export default function RightSidebar() {
  const [users, setUsers] = useState<Influencer[]>([]);
  const [following, setFollowing] = useState<number[]>([]);
  const [requests, setRequests] = useState<FollowRequest[]>([]);

  useEffect(() => {
    fetchInfluencers().then(setUsers);
    fetchFollowRequests().then(setRequests);
  }, []);

  const handleFollow = async (userId: number) => {
    await followUser(userId);
    setFollowing((prev) => [...prev, userId]);
  };

  const handleAccept = (id: number) => {
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleReject = (id: number) => {
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  return (
    <div className="w-[300px] space-y-6">

      {/* Influencers */}
      <div className="bg-[#0a1335] rounded-xl p-4 border border-white/10">
        <h3 className="font-semibold text-sm mb-3 text-gray-300">
          Most Influential Students
        </h3>

        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-3 bg-[#0d1b4c] p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-400">
                    {user.followers} Followers
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleFollow(user.id)}
                disabled={following.includes(user.id)}
                className={`px-3 py-1 text-xs rounded-md transition ${
                  following.includes(user.id)
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {following.includes(user.id) ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Requests */}
      <div className="bg-[#0a1335] rounded-xl p-4 border border-white/10">
        <h3 className="font-semibold text-sm mb-3 text-gray-300">
          Follow Requests
        </h3>

        {requests.length === 0 && (
          <p className="text-xs text-gray-500">No pending requests</p>
        )}

        <div className="space-y-3">
          {requests.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <p className="text-sm">{user.name}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(user.id)}
                  className="px-2 py-1 rounded text-xs bg-blue-600 hover:bg-blue-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(user.id)}
                  className="px-2 py-1 rounded text-xs bg-red-500 hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
