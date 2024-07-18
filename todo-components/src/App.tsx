import { Button } from '@mantine/core';
import './App.css';

import MantineProviderWarper from './components/MantineProviderWarper';
import ThemeChangerIcon from './components/colorSchemeChanger';
import  EditorComponent  from './components/editor/Editor-comp';
import { useState } from 'react';

function App() {
  const [isEditorEnabled , setIsEditorEnabled] = useState(false)
  function onUpdate(content: string) {
    // console.log(content);
    localStorage.setItem("Editor-content", content);
  }

  const content = localStorage.getItem("Editor-content");
  return (
    <MantineProviderWarper>
      <ThemeChangerIcon onThemeChange={(theme) => console.log(theme)} />
        <Button variant="outline" onClick={()=> setIsEditorEnabled((prev)=> !prev)}>Button</Button>
      <EditorComponent
        content={content??""}
        isEditable={isEditorEnabled}
        onUpdate={(e) => onUpdate(e)}
      />
    </MantineProviderWarper>
  );
}

export default App;