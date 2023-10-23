import { join } from 'path';
import { __dirname } from './helper';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css'],
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  components: [
    {
      path: './components/ui',
      prefix: 'UI',
    },
  ],
  imports: {
    dirs: [join(__dirname, './types')],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
});
