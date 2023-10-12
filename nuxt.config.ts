import { join } from 'path';
import { __dirname, copyEmailsDir } from './helper';

copyEmailsDir();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css'],
  modules: ['vue-email/nuxt', '@vueuse/nuxt', '@unocss/nuxt'],
  imports: {
    dirs: [join(__dirname, './emails'), join(__dirname, './types')],
  },
  runtimeConfig: {
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
      senderEmail: process.env.SENDGRID_SENDER_MAIL,
      receiverEmail: process.env.SENDGRID_RECEIVER_MAIL,
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
});
