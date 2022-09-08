import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";

export default defineConfig(async ({ command }) => {
    return {
        base: command === "serve" ? "" : "/build/",
        publicDir: false,
        build: {
            manifest: true,
            outDir: "public/build",
            rollupOptions: {
                input: {
                    app: "resources/js/app.js",
                },
            },
        },
        server: {
            strictPort: true,
            port: 3000,
            // https: true,
            hmr: {
                host: "localhost",
            },
        },
        plugins: [
            laravel({
                input: "resources/js/app.js",
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                "@": "/resources",
                ziggy: "/vendor/tightenco/ziggy/src/js/vue",
            },
        },
        optimizeDeps: {
            include: [
                "@inertiajs/inertia",
                "@inertiajs/inertia-vue3",
                "axios",
                "vue",
            ],
        },
    };
});
