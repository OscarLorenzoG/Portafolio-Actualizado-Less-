import { defineConfig } from "vite";
import HtmlCssPurgePlugin from "vite-plugin-purgecss";


export default defineConfig({

    base: process.env.DEPLOY_BASE_URL ?? '/',

    plugins:[

        HtmlCssPurgePlugin()

    ]

});