import { platforma } from '@milaboratory/milaboratories.block-boilerplate.model';
import { defineApp } from '@milaboratory/sdk-vue';
import Page from './Page.vue';

export const sdkPlugin = defineApp(platforma, () => {
  return {
    routes: {
      '/': Page,
    }
  };
});

export const useApp = sdkPlugin.useApp;
