import EditableText from "@/components/custom/EditableText/EditableText";
import ProfilePic from "@/components/custom/profile/profile-pic";
import UserAboutSection from "@/components/custom/profile/UserAboutSection";

const ProfileSetting = () => {
  const handleTextChange = (newText: string) => {
    console.log("Text changed to:", newText);
  };

  return (
    <div className="col-span-8 overflow-hidden rounded-xl  sm:px-8 sm:shadow bg-background">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">Profile settings</h1>
      </div>

      {/* Profile Pic */}
      <div className="flex justify-center items-center gap-4">
        <ProfilePic isEditable={true} />
        <div>
          <EditableText
            isEditEnabled={true}
            initialText="Nalin Kumer"
            onTextChange={handleTextChange}
            className="text-xl font-semibold sm:text-2xl md:text-4xl"
          />
          <EditableText
            isEditEnabled={true}
            initialText="Developer"
            onTextChange={handleTextChange}
            className="text-muted-foreground text-sm sm:text-xl md:text-2xl"
          />
        </div>
      </div>
      <div className="mt-8">
        {/* Bio */}
        <UserAboutSection />
      </div>
    </div>
  );
};

export default ProfileSetting;
