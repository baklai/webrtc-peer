import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/webrtc-peer/',
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'WebRTC Peer',
        short_name: 'WebRTC Peer',
        description:
          'WebRTC Peer - Web application responsible for establishing and managing direct P2P connections between users using WebRTC technology',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 1500
  },
  preview: {
    port: 5173,
    host: true,
    cors: true,
    open: false,
    strictPort: true
  }
});
