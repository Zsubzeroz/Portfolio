import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Portfolio/",
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "assets/images/*"],
      manifest: {
        name: "Luan Estifer | Software Engineer",
        short_name: "Portfolio",
        start_url: "/Portfolio/",
        scope: "/Portfolio/",
        display: "standalone",
        background_color: "#09090b",
        theme_color: "#cc1100",
        icons: [
          {
            src: "/assets/images/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/images/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
