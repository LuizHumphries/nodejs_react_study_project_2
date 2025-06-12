import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: { sourcemap: false },
  server: { sourcemapIgnoreList: false },
  logLevel: 'error',
})
