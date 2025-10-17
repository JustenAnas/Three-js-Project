// vite.config.js
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@shaders': path.resolve(__dirname, 'src/shaders'), // optional alias
    },
  },
  plugins: [
    glsl({
      include: '**/*.glsl', // this covers all .glsl files in your src
      // exclude: /node_modules/, // optional, skip node_modules
    }),
  ],
});
