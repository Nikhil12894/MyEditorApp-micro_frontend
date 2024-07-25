import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  process.env = {
    ...process.env,
    ...loadEnv(configEnv.mode, process.cwd(), ""),
  };
  return {
    plugins: [
      react(),
      federation({
        name: "host-app",
        remotes: {
          editor_components: process.env.EDITOR_COMPONENTS_URL||"",
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
