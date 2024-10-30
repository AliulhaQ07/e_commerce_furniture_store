import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



// CHAT-GPT CODE TO CHANGE THE PORT IF NEEDED.
// import {defineConfig} from 'vite'
// import react from '@vitejs/plugin-react'
//
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // Change this to any port you prefer
//   },
// })
