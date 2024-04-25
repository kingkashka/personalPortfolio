import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pdf": {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false,
      },
      "/mail": {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false,
    },
  },
}});
