import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:5000', // Замените на соответствующий URL вашего сервера
        changeOrigin: true,
        ws: true,
      },
    },
  },
})

