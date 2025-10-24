    // vite.config.js
    import { defineConfig } from 'vite';
    import glsl from 'vite-plugin-glsl';

    export default defineConfig({
      plugins: [
        glsl(), // Add the GLSL plugin here
        // other plugins if you have them
      ],
    });