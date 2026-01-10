import ProfileTopbar from "./ProfileTopbar";
import ProfileHeader from "./ProfileHeader";
import ProfileBackground from "./ProfileBackgound";
import ProfileContent from "./ProfileContent";

const ProfilePage = () => {
  return (<>
    <ProfileBackground />
    <div className="min-h-screen relative z-10 pb-32">
      <div className="w-[94%] lg:w-[85%] mx-auto">
        <ProfileTopbar />
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  </>
  );
};

export default ProfilePage;
