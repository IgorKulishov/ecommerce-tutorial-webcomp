import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ecommerce-tutorial-webcomp',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
