import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(() => {
  return {
    plugins: [
      nodePolyfills(),
      react()
    ]
  }
}) 