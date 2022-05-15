import * as path from "path";

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
});
