import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import purgecss from 'rollup-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    purgecss({
      content: ['./index.html', './src/**/*.{tsx,ts}'],
      safelist: ['body', 'html', ':root'],
      output: true,
    }),
  ],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'gsap': ['gsap', 'gsap/ScrollTrigger'],
        },
      },
    },
  },
});