import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "todo-components",
      filename: "remoteEntry.js",
      exposes: {
        // "./List": "./src/components/List.tsx",
        "./Input": "./src/components/Input.tsx",
        "./MantineProviderWarper": "./src/components/MantineProviderWarper.tsx",
        "./ThemeChangerIcon": "./src/components/colorSchemeChanger.tsx",
        "./EditorComponent":"./src/components/editor/Editor-comp.tsx",
        "./Editor": "./src/components/Editor.tsx",
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
