import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.200}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.700}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.600}',
          contrastColor: '{primary.50}',
          hoverColor: '{primary.500}',
          activeColor: '{primary.600}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
        surface: {
          50: 'rgba(255, 255, 255, 0.8)',
        },
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        surface: {
          50: 'rgba(24, 24, 27, 0.9)',
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{custom.cardcolor}',
            borderRadius: '4px',
          },
        },
        dark: {
          root: {
            background: '{custom.cardcolor}',
            borderRadius: '4px',
          },
        },
      },
    },
  },
});
