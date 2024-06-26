import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
          name: "Bitrestaurant",
          short_name: "Bitrestaurant",
          description: "Bitrestaurant es un sistema para administrar cadenas de restaurantes",
          theme_color: "#274690",
      }
  })
  ]
})  