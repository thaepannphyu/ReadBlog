import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    transformRequest(code) {
      // Check if the content starts with the HTML doctype declaration
      if (code.startsWith(('{') || code.startsWith('['))) {
        // Return the code as is if it's HTML
        return code;
      }
      // Otherwise, continue with the default transformation (usually parsing JSON)
      return null;
    }}
})
