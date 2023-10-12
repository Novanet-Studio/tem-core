import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xs: '340px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
    container: {
      center: true,
      maxWidth: {
        xs: '330px',
        sm: '520px',
        md: '920px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1690px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
});
