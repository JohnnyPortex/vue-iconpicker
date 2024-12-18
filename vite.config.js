import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Garante que "@" aponta para a pasta "src"
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueIconPicker',
      fileName: (format) => `vue-icon-picker.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/fontawesome-free'],
      output: {
        globals: {
          vue: 'Vue',
          '@fortawesome/fontawesome-free': 'FontAwesome',
        },
      },
    },
  },
});
