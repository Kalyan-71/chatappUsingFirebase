import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



export default defineConfig({

  base: "./", 
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit (1000KB = 1MB)
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },

  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    allowedHosts: ['lets-chat-tprv.onrender.com'], // Allow your Render domain
  },

  server: {
    port: process.env.PORT || 4173, // Use Render's assigned port
    host: '0.0.0.0', // Allow external access
  }
})
