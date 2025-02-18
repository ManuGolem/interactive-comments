import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode } ) =>({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "docs",
    },
    base: mode === "production" ? "interactive-comments" : "/",
}));
