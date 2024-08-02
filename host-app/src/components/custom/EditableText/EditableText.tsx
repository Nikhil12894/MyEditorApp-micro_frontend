import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";

interface EditableTextProps {
  initialText: string;
  onTextChange?: (newText: string) => void;
  className?: string;
  isEditable?: boolean;
  isEditEnabled?: boolean;
}

const EditableText = ({
  initialText,
  onTextChange,
  className,
  isEditEnabled=false,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (onTextChange) {
      onTextChange(event.target.value);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className={className}>
      {isEditing && isEditEnabled ? (
        <Input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={cn(["border-b-2 outline-none w-full"])}
        />
      ) : (
        <div onClick={handleTextClick} className={ isEditEnabled?"cursor-pointer":""}>
          {text}
        </div>
      )}
    </div>
  );
};

export default EditableText;
