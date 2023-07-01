import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: { '@/alias/': path.join(__dirname, '/src/assets/styles/alias/') },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles" as *;`,
                importer(...args) {
                    if (args[0] !== '@/styles') {
                        return
                    }
                    return {
                        file: `${path.resolve(__dirname,  './src/assets/styles')}`,
                    }
                },
            },
        },
    },
    plugins: [
        react(),
        sassDts({
            enabledMode: ['development', 'production'],
        }),
    ],
})
