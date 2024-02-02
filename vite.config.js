import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import path from 'path';

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/components'),
    })],
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                additionalData: `
              @import "src/styles/_variables.scss";
              @import "src/styles/_global.scss";
            `,
            },
        },
    },
});
