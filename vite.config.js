import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
    base: process.env.BASE_URL || '/',
    plugins: [
        purgecss()
    ]
})