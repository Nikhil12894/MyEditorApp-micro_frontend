import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import React, { useState } from "react";
interface SocialProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (platform: string, url: string) => void;
}

const SocialProfileModal: React.FC<SocialProfileModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");

  const handleSave = () => {
    if (platform && url) {
      onSave(platform, url);
      setPlatform("");
      setUrl("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg mb-4">Add Social Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Platform</label>
          {/* <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Platform</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="github">GitHub</option>
          </select> */}
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="border p-2 rounded w-full">
              <SelectValue placeholder="Select a account" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="github">GitHub</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">URL</label>
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialProfileModal;
