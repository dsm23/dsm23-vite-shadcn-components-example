import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from "@nabla/vite-plugin-eslint";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

const isStorybook = process.argv[1]?.includes("storybook");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    !process.env.VITEST && !isStorybook && reactRouter(),
    tailwindcss(),
    !!process.env.CI &&
      eslint({
        formatter: "stylish",
      }),
    tsconfigPaths({
      projectDiscovery: "lazy",
    }),
  ],
});
