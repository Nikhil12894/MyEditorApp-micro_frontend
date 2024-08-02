import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import React, { useState } from "react";

import SocialProfileModal from "./SocialProfileModal";

interface SocialProfileProps {
  profiles: { platform: string; url: string }[];
  onProfilesChange: (profiles: { platform: string; url: string }[]) => void;
}

const SocialProfile: React.FC<SocialProfileProps> = ({
  profiles,
  onProfilesChange,
}) => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleAddProfile = (platform: string, url: string) => {
   if (!profiles.find((profile) => profile.platform === platform)) {
     onProfilesChange([...profiles, { platform, url }]);
   } else {
     alert("This social profile already exists.");
   }
 };

 const handleRemoveProfile = (index: number) => {
   const newProfiles = profiles.filter((_, i) => i !== index);
   onProfilesChange(newProfiles);
 };

  const renderIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook />;
      case "twitter":
        return <Twitter />;
      case "linkedin":
        return <Linkedin />;
      case "github":
        return <Github />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Social Profile
      </Button>
      <SocialProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddProfile}
      />
      <div className="flex space-x-4">
        {profiles.map((profile, index) => (
          <div key={index} className="flex items-center space-x-2">
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              {renderIcon(profile.platform)}
            </a>
            <Button
              variant="ghost"
              onClick={() => handleRemoveProfile(index)}
              className="text-red-500"
            >
              x
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProfile;
