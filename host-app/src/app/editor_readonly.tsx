import { useTheme } from "@/theme-provider";
import { fileToBase64 } from "@/util/fileUtil";
import Editor from "editor_components/Editor";
import MantineProviderWarper from "editor_components/MantineProviderWarper";

const AppEditorReadOnly = () => {
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
        <div className="w-screen md:container">
          <Editor
            content={content ?? exampleContent}
            onUpdate={(e: string) => onUpdate(e)}
            isEnabled={false}
            onImageUpload={(file: File) => handleImageUpload(file)}
            setTheme={() => theme}
          />
        </div>
      </MantineProviderWarper>
    );
}

export default AppEditorReadOnly;


const exampleContent = `<h4 style="text-align: center">How to create Micro Frontend Using React Vite app and vite-plugin-federation</h4><img src="https://github.com/Nikhil12894/MyEditorApp-micro_frontend/raw/main/editor_demo.gif" style="width: 653px; height: auto; cursor: pointer; margin: 0px auto;" draggable="true"><h4><strong>Remote app</strong></h4><h4><em>Demo</em>: <a target="_blank" rel="noopener noreferrer nofollow" href="https://app-editor.learnwithnk.in/">Editor app</a></h4><ol><li><p>Create a remote app from which you will host the actual component.</p></li></ol><p>Install vite-plugin-federation plugin</p><p><code>npm install -D @originjs/vite-plugin-federation</code></p><ol start="2"><li><p>Create your components. ie <code>DemoComponent</code></p></li><li><p>Add this demo component in the vite config to be exported along with other configs.</p></li></ol><p>In <code>vite.config.ts</code></p><pre><code>import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microFrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./DemoComponent": "./src/components/DemoComponent",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});</code></pre><ol start="4"><li><p>now run <code>npm run build</code></p></li><li><p>run <code>npm run preview</code></p></li></ol><p>I'm importing as default the federation of the plugin, and we need to provide some properties:</p><ul><li><p>name: the name of our object of module federation</p></li><li><p>filename: This is very important because the app's build will generate a single file that will be our manifest to expose the components. (I recommended to use remoteEntry.js as default)</p></li><li><p>filename: This is very important because the build of the app will generate a single file that will be our manifest to expose the components.</p></li><li><p>exposes: The object where we will let's say what we're going to expose. In the example the atom of jotai and the PokemonList component.</p></li><li><p>shared: It's important because when we have other applications running our MF, we need to provide what is required to render the MF. In this case, react and react-dom.</p></li></ul><p>And even if the other application that consumes it is in react, the module federations plugin will define the import and if you already have it, it will not reimport.</p><hr><h4>Host App</h4><p><em>Demo</em>: <a target="_blank" rel="noopener noreferrer nofollow" href="https://micro-frontend-editor.learnwithnk.in/">Host-app</a></p><ol start="6"><li><p>Now create a Host app using vite</p></li><li><p>run <code>npm install -D @originjs/vite-plugin-federation</code></p></li><li><p>add blow config in <code>vite.config.ts</code></p></li></ol><pre><code>import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "&lt;Any name&gt;",
      remotes: {
        microFrontend: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});</code></pre><ol start="9"><li><p>Now use <code>microFrontend/DemoComponent</code> in your host app</p></li></ol><h4>example --</h4><pre><code>import DemoComponent from "microFrontend/DemoComponent";

import "./App.css";

function App() {

  return (
    &lt;&gt;
      &lt;h3 style={{ color: "#1e3a8a", fontSize: "20px" }}&gt;
        Created using Vite + vite-plugin-federation
      &lt;/h3&gt;
      &lt;DemoComponent /&gt;
    &lt;/&gt;
  );
}

export default App;</code></pre><ol start="10"><li><p>run <code>npm run dev</code></p></li></ol><pre><code class="language-java">import com.codewithbisky.keycloak.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/groups")
@RequiredArgsConstructor
public class GroupApi {


    private final GroupService groupService;


    @PutMapping("/{groupId}/assign/users/{userId}")
    public ResponseEntity&lt;?&gt; assignGroup(@PathVariable String userId, @PathVariable String groupId) {

        groupService.assignGroup(userId, groupId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @DeleteMapping("/{groupId}/remove/users/{userId}")
    public ResponseEntity&lt;?&gt; unAssignGroup(@PathVariable String userId, @PathVariable String groupId) {

        groupService.deleteGroupFromUser(userId, groupId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}</code></pre>`;
