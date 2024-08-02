import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

interface EditableParagraphProps {
  initialText: string;
  onTextChange: (text: string) => void;
  className?: string;
  maxLength: number;
}

const EditableParagraph: React.FC<EditableParagraphProps> = ({
  initialText,
  onTextChange,
  className,
  maxLength,
}) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
      onTextChange(newText);
    }
  };

  return (
    <div className={className}>
      {isEditing ? (
        <Textarea
          value={text}
          onChange={handleChange}
          onBlur={() => setIsEditing(false)}
          className="w-full p-2 border rounded"
          maxLength={maxLength}
        />
      ) : (
        <p onClick={() => setIsEditing(true)} className="cursor-pointer">
          {text || "Click to edit"}
        </p>
      )}
      <div className="text-right text-sm text-gray-500">
        {text.length}/{maxLength} characters
      </div>
    </div>
  );
};

export default EditableParagraph;
