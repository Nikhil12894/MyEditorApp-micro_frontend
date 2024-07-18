import './App.css';
// import List from "editor_components/List";
// import Input from "editor_components/Input";
import ThemeChangerIcon from "editor_components/ThemeChangerIcon";
import MantineProviderWarper from "editor_components/MantineProviderWarper";
import Editor from "editor_components/Editor";
import { useState } from 'react';
function App() {
    const [isEditorEnabled, setIsEditorEnabled] = useState(false);

 
 function onUpdate(content: string) {
   localStorage.setItem("Editor-content", content);
 }

 const content = localStorage.getItem("Editor-content");
  return (
    <div>
      <h1>Host App</h1>
      <button onClick={() => setIsEditorEnabled((prev) => !prev)}>
        EnableDisableEditor
      </button>
      <MantineProviderWarper>
        <ThemeChangerIcon
          onThemeChange={(theme: string) => console.log(theme)}
        />

        {/* <EditorComponent
          content={content ?? ""}
          isEnabled={isEditorEnabled}
          onUpdate={(e: string) => onUpdate(e)}
        /> */}

        <Editor content={content ?? ""} onUpdate={(e: string) => onUpdate(e)}  isEnabled={isEditorEnabled}/>  
      </MantineProviderWarper>
    </div>
  );
}

export default App


// const content = `<h2 style="text-align: center">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a target="_blank" rel="noopener noreferrer" href="https://tiptap.dev/">Tiptap.dev</a> and supports all of its features:</p><ul><li><p>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></p></li><li><p>Headings (h1-h6)</p></li><li><p>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</p></li><li><p>Ordered and bullet lists</p></li><li><p>Text align&nbsp;</p></li><li><p>And all <a target="_blank" rel="noopener noreferrer" href="https://tiptap.dev/extensions">other extensions</a></p></li></ul><pre><code class="language-tsx">
// // Valid braces Kata – https://www.codewars.com/kata/5277c8a221e209d3f6000b56

// const pairs: Record = {
//   '[': ']',
//   '{': '}',
//   '(': ')',
// };

// const openBraces = Object.keys(pairs);

// export function validBraces(braces: string) {
//   const opened: string[] = [];

//   for (let i = 0; i &lt; braces.length; i += 1) {
//     const brace = braces[i];

//     if (openBraces.includes(brace)) {
//       opened.push(brace);
//       continue;
//     }

//     if (pairs[opened[opened.length - 1]] !== brace) {
//       return false
//     }

//     opened.pop();
//   }

//   return opened.length === 0;
// }
//   </code></pre><pre><code class="language-java">import io.swagger.v3.oas.annotations.media.Schema;
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Data
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// @Schema(description = "Post image request", requiredMode = Schema.RequiredMode.REQUIRED)
// public class ImageDTO {
//     private Long id;

//     private String name;

//     private byte[] data;
// }</code></pre>
//   `;
