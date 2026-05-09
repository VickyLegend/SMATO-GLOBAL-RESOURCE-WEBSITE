import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        divisions: path.resolve(__dirname, 'divisions.html'),
        services: path.resolve(__dirname, 'services.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      }
    }
  },
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 3000
  }
});
