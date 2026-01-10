import ProfileTopbar from "./ProfileTopbar";
import ProfileHeader from "./ProfileHeader";
import ProfileBackground from "./ProfileBackgound";
import ProfileContent from "./ProfileContent";

const ProfilePage = () => {
  return (<>
    <ProfileBackground />
    <div className="min-h-screen h-auto relative z-10">
      <div className="w-[85%] mx-auto">
        <ProfileTopbar />
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  </>
  );
};

export default ProfilePage;
