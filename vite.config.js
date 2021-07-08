// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

export default defineConfig({
    plugins: [
        createVuePlugin(),
    ],
    server: {
        port: 8080,
        hmr: { overlay: false }
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
});
