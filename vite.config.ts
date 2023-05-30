import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from "@vitejs/plugin-vue-jsx"
import fs from 'fs'
let mode = 1
let dirName = '/'
function resolve(path1) {
    return path.resolve(__dirname, path1)
}
const webpack_vue = {
    envDir: __dirname,
    root: resolve('./'),
    base: dirName,
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [
            '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',
        ]
    },
    plugins: [
        jsx(),

    ],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1890ff',
                    'link-color': '#1890FF',
                    'border-radius-base': '4px',
                    '@light_color': '#fff',
                    '@dark_color': '#001529',
                    '@edition-center': '1200px',
                },
                javascriptEnabled: true,
            },
        },
        postcss: {}
    },
    server: {
        host: '0.0.0.0',
        port: 8888,
        strictPort: false,
    },
    build: {
        outDir: dirName,
    },
    optimizeDeps: {

    }
}
export default defineConfig(({ mode }) => {
    return webpack_vue
})



