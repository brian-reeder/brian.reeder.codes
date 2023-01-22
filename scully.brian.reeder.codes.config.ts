import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';


export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'brian.reeder.codes',
  distFolder: './dist/brian.reeder.codes', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './_posts/blog',
      },
    },
  },
};