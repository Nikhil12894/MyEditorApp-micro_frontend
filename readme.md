### How to create Micro Frontend Using React Vite app and vite-plugin-federation

### Remote app
1. Create a remote app from which will host the actual component.
   
Install vite-plugin-federation plugin
 ```sh
 npm install -D @originjs/vite-plugin-federation
 ```

2. Create your components. ie `DemoComponent`
3. add this demo component in vite config to be exported algo with other config
   
In `vite.config.ts`

```ts
import { defineConfig } from "vite";
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
});
```

4. now run `npm run build`
5. run `npm run preview`

I'm importing as default the federation of the plugin, and we need to provide some properties:

- name: the name of our object of module federation

- filename: This is very important, because the build of the app will generate a single file that will be our manifest to expose the componets. (I recommended to use remoteEntry.js as default)

- filename: This is very important, because the build of the app will generate a single file that will be our manifest to expose the componets.

- exposes: The object where we will let's say what we're going to expose. In the example the atom of jotai and the PokemonList component.

- shared: It's important because when we have other applications running our MF, we need to provide what is needed to render the MF. In this case, react and react-dom.
  
And even if the other application that consumes it is in react, the module federations plugin will define the import and if you already have it, it will not reimport.
---
### Host App
6. Now create Host app using vite
7. run `npm install -D @originjs/vite-plugin-federation`
8. add blow config in `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "<Any name>",
      remotes: {
        microFrontend: "http://localhost:4173//assets/remoteEntry.js",
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
});
```

9. Now use `microFrontend/DemoComponent` in your host app

#### example --

```ts
import DemoComponent from "microFrontend/DemoComponent";

import "./App.css";

function App() {

  return (
    <>
      <h3 style={{ color: "#1e3a8a", fontSize: "20px" }}>
        Created using Vite + vite-plugin-federation
      </h3>
      <DemoComponent />
    </>
  );
}

export default App;
```
10. run `npm run dev`
---
