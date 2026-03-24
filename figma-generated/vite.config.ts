import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// Shared externals — never bundle these into the library output
const EXTERNALS = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'tailwindcss',
  'lucide-react',
  'motion/react',
  'motion',
  'sonner',
  'next-themes',
  'react-hook-form',
  'recharts',
  'embla-carousel-react',
  'react-day-picker',
  'vaul',
  'cmdk',
  'input-otp',
  'react-resizable-panels',
  /^@radix-ui\/.*/,
  /^@hookform\/.*/,
]

const isLibBuild = process.env.BUILD_TARGET === 'lib'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(isLibBuild
      ? [
        dts({
          include: ['src/app/components/baole-ui'],
          outDir: 'dist',
          insertTypesEntry: true,
          tsconfigPath: './tsconfig.json',
        }),
      ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  ...(isLibBuild && {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/app/components/baole-ui/index.ts'),
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      },
      rollupOptions: {
        external: EXTERNALS,
        output: {
          // Preserve CSS in a single style.css file
          assetFileNames: (assetInfo) =>
            assetInfo.name === 'style.css' ? 'style.css' : assetInfo.name ?? 'asset',
        },
      },
      cssCodeSplit: false,
      sourcemap: true,
    },
  }),
})
