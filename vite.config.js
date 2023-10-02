import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
console.log(resolve(__dirname, 'src/components/Input'))
export default defineConfig({
  base: './',
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
            `
          }
        }
      }
})