import { Container } from '@mantine/core';
import './App.css';

import EditorDemo from './components/Editor';
import MantineProviderWarper from './components/MantineProviderWarper';
import { HeaderSimple } from './components/header/HeaderSimple';

function App() {
  function onUpdate(content: string) {
    // console.log(content);
    localStorage.setItem("Editor-content", content);
  }

  const content = localStorage.getItem("Editor-content");
  return (
    <MantineProviderWarper>
      <HeaderSimple />
      <Container size="xl">
        <EditorDemo
          content={content ?? ""}
          isEnabled={true}
          onUpdate={(e) => onUpdate(e)}
        />
      </Container>
    </MantineProviderWarper>
  );
}

export default App;