import React, { useState } from "react";
import EditableParagraph from "../EditableText/EditableParagraph";
import SocialProfile from "../EditableText/SocialProfile";

const MAX_PARAGRAPHS = 1;
const MAX_CHARACTERS = 1000;

const UserAboutSection: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([
    "This is an editable paragraph. Click to edit.",
  ]);
  const [profiles, setProfiles] = useState<{ platform: string; url: string }[]>(
    []
  );

  const handleAddParagraph = () => {
    if (paragraphs.length < MAX_PARAGRAPHS) {
      setParagraphs([...paragraphs, ""]);
    }
  };

  const handleParagraphChange = (index: number, newText: string) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = newText;
    setParagraphs(newParagraphs);
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-4">
            <EditableParagraph
              initialText={paragraph}
              onTextChange={(newText: string) => handleParagraphChange(index, newText)}
              className="text-base sm:text-lg md:text-xl"
              maxLength={MAX_CHARACTERS}
            />
          </div>
        ))}
        {paragraphs.length < MAX_PARAGRAPHS && (
          <button
            onClick={handleAddParagraph}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Paragraph
          </button>
        )}
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">
          Social Profiles:
        </label>
        <SocialProfile profiles={profiles} onProfilesChange={setProfiles} />
      </div>
    </div>
  );
};

export default UserAboutSection;
