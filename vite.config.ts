import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginTypescriptTransform } from 'vite-plugin-typescript-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginTypescriptTransform({
      enforce: "pre",
      filter: {
        files: {
          include: ["**/src/models/*.ts"]
        }
      }
    }),
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        }
      }
    }
  },
})
