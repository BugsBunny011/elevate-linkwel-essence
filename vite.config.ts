import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: [
          "/",
          "/about",
          "/contact",
          "/products/double-girder-cranes",
          "/products/single-girder-cranes",
          "/products/goliath-cranes",
          "/products/jib-crane",
          "/products/goods-lift",
          "/products/industrial-lift",
          "/products/gearbox",
        ],
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 2500,
          headless: "new",
          maxConcurrentRoutes: 2,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(renderedRoute: any) {
          // Strip the preloader overlay & ensure absolute asset URLs
          renderedRoute.html = renderedRoute.html.replace(
            /<div[^>]*data-preloader[^>]*>[\s\S]*?<\/div>/gi,
            ""
          );
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
