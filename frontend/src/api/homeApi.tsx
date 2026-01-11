export async function fetchStories() {
  return [
    { id: 1, name: "Mayra S.", avatar: "/avatars/user1.png",media: "/stories/story1.jpg" },
    { id: 2, name: "Vikram", avatar: "/avatars/user2.png",media: "/stories/story2.jpg" },
    { id: 3, name: "Megha", avatar: "/avatars/user3.png" ,media: "/stories/story5.jpg"},
  ];
}

// Influencers list (for sidebar)
export async function fetchInfluencers() {
  return [
    {
      id: 1,
      name: "Aarav Mehta",
      followers: "12.3K",
      avatar: "/avatars/user1.png",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      followers: "9.8K",
      avatar: "/avatars/user2.png",
    },
    {
      id: 3,
      name: "Rahul Singh",
      followers: "7.5K",
      avatar: "/avatars/user3.png",
    },
  ];
}

// Follow action (mock)
export async function followUser(userId: number) {
  console.log("Followed user:", userId);
  return true;
}

// Follow requests
export async function fetchFollowRequests() {
  return [
    {
      id: 11,
      name: "Rohit Sharma",
      avatar: "/avatars/user4.png",
    },
    {
      id: 12,
      name: "Aditi Verma",
      avatar: "/avatars/user5.png",
    },
  ];
}
