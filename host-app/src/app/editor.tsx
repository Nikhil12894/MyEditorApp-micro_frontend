import { useTheme } from "@/theme-provider";
import { fileToBase64 } from "@/util/fileUtil";
import Editor from "editor_components/Editor";
import MantineProviderWarper from "editor_components/MantineProviderWarper";
import { useState } from "react";

const AppEditor = () => {
        const [isEditorEnabled] = useState(true);
            const { theme } = useTheme();


 function onUpdate(content: string) {
   localStorage.setItem("Editor-content", content);
 }

 const content = localStorage.getItem("Editor-content");

 const handleImageUpload = async (file: File) => {
   if (file) {
    const data= await fileToBase64(file);
     return data;
   }
   return "";
 };

    return (
      <MantineProviderWarper>
        <Editor
          content={content ?? ""}
          onUpdate={(e: string) => onUpdate(e)}
          isEnabled={isEditorEnabled}
          onImageUpload={(file: File) => handleImageUpload(file)}
          setTheme={() => theme}
        />
      </MantineProviderWarper>
    );
}

export default AppEditor;
