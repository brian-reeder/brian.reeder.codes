import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import '@scullyio/scully-plugin-puppeteer';

setPluginConfig(baseHrefRewrite, 'https://brian-reeder.github.io/brian.reeder.codes/');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'brian.reeder.codes',
  distFolder: './dist/brian.reeder.codes', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [baseHrefRewrite],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './_posts/blog',
      },
    },
  },
};