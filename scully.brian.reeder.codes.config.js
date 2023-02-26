"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
    projectRoot: './src',
    projectName: 'brian.reeder.codes',
    distFolder: './dist/brian.reeder.codes',
    outDir: './dist/static',
    defaultPostRenderers: [],
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './_posts/blog',
            },
        },
        '/notes/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './_posts/notes',
            },
        },
    },
    puppeteerLaunchOptions: {
        args: [
            "--disable-gpu",
            "--renderer",
            "--no-sandbox",
            "--no-service-autorun",
            "--no-experiments",
            "--no-default-browser-check",
            "--disable-dev-shm-usage",
            "--disable-setuid-sandbox",
            "--no-first-run",
            "--no-zygote",
            "--single-process",
            "--disable-extensions"
        ],
        executablePath: '/usr/bin/chromium-browser'
    }
};
