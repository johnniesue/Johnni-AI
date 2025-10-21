import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If this is a project site like username.github.io/repo-name,
// set base to '/REPO-NAME/'.
// export default defineConfig({ plugins: [react()], base: '/REPO-NAME/' })

export default defineConfig({
  plugins: [react()]
})
