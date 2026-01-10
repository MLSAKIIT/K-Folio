import ProfileTopbar from "./ProfileTopbar";
import ProfileHeader from "./ProfileHeader";
import ProfileBackground from "./ProfileBackgound";

const ProfilePage = () => {
  return (<>
    <ProfileBackground />
    <div className="min-h-screen h-700 ">
      <div className="w-[85%] mx-auto">
        <ProfileTopbar />
        <ProfileHeader />
      </div>
    </div>
  </>
  );
};

export default ProfilePage;
