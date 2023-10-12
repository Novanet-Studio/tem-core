export default defineNuxtSchema({
  appConfig: {
    /**
     * Config for email templates
     */
    email: {
      /**
       * Receipt email configuration
       */
      receipt: {
        /**
         * Email subject, you can pass special variables that will be replaced with
         * the right values from request:
         * %orderId% => 1
         */
        subject: 'Tienda en Mano - Recibo de compra %orderId%',

        /**
         * Text passed to the email sendrid payload
         */
        text: 'Tienda en mano - Recibo de compra',

        /**
         * Template styles and content configuration
         */
        template: {
          /**
           * Email preview
           */
          preview: 'Recibo de compra - Tienda en Mano',
          /**
           * Theme colors for tailwindCSS
           */
          theme: {
            primary: '#f2f2f2',
            primaryTop: '#f6f6f6',
            secondary: '#d2d2d2',
            secondaryInfo: '#000',
            foreground: '#e5e5e5',
            info: '#f2f2f2',
          },
          /**
           * Email template header
           */
          header: {
            /**
             * Top header icon
             */
            icon: {
              url: 'https://nuxtjs.org/images/logo.png',
              alt: 'Nuxt Logo',
            },
            /**
             * Bussiness contact
             */
            contact: {
              instagram: '@tem-demo',
              phone: '+58 412 1234567',
              email: 'temdemo@gmail.com',
            },
          },
          /**
           * Email template footer
           */
          footer: {
            /**
             * Call to action button, redirect to specified url
             */
            cta: {
              text: 'Ir a la tienda',
              link: 'https://tem-demo.netlify.app',
            },
            /**
             * Bussiness social networks
             */
            social: [
              {
                icon: 'https://raw.githubusercontent.com/Novanet-Studio/cmstem-fe/develop/static/email/x.png',
                link: '#',
              },
            ],
            /**
             * Bussiness copyright
             */
            copyright: {
              text: '© 2022 Caracas Multisport',
              location: 'Caracas, Venezuela',
            },
          },
        },
      },

      /**
       * Merchant email configuration
       */
      merchant: {
        /**
         * Email subject, you can pass special variables that will be replaced with
         * the right values from request:
         * %orderId% => 1
         */
        subject: 'Tienda en Mano - Nueva orden %orderId%',

        /**
         * Text passed to the email sendrid payload
         */
        text: 'Tienda en mano - Nueva orden',

        /**
         * Template styles and content configuration
         */
        template: {
          /**
           * Email preview
           */
          preview: 'Recibo de compra - Tienda en Mano',
          /**
           * Theme colors for tailwindCSS
           */
          theme: {
            primary: '#f2f2f2',
            primaryTop: '#f6f6f6',
            secondary: '#d2d2d2',
            secondaryInfo: '#000',
            foreground: '#e5e5e5',
            info: '#f2f2f2',
          },
          /**
           * Email template header
           */
          header: {
            /**
             * Top header icon
             */
            icon: {
              url: 'https://nuxtjs.org/images/logo.png',
              alt: 'Nuxt Logo',
            },
          },
          /**
           * Email template footer
           */
          footer: {
            /**
             * Call to action button, redirect to specified url
             */
            cta: {
              text: 'Ir a la tienda',
              link: 'https://tem-demo.netlify.app',
            },
            /**
             * Bussiness copyright
             */
            copyright: {
              text: '© 2022 Caracas Multisport',
              location: 'Caracas, Venezuela',
            },
          },
        },
      },
    },
  },
});
