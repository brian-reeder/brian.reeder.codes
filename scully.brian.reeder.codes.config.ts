import { ScullyConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'brian.reeder.codes',
  distFolder: './dist/brian.reeder.codes', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [Http404Plugin],
  routes: {},
};
