import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/images')],
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    resolve:{
        alias: {
            "@": path.resolve("./src")
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                charset: false,
                additionalData: '@import "./src/styles/commons.less";',
            }
        }
    }
})
