import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode })=>{
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  console.log(JSON.stringify(env.EDITOR_COMPONENTS_URL));
  return {
    define: {
      // __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      host: true,
    },
    plugins: [
      react(),
      federation({
        name: "host-app",
        remotes: {
          editor_components: String(env.EDITOR_COMPONENTS_URL),
        },
        shared: ["react", "react-dom"],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      modulePreload: false,
      target: "esnext",

      minify: false,
      cssCodeSplit: false,
    },
  };
});