import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const CustomPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
          primary: {
              color: '{primary.500}',
              contrastColor: '#ffffff',
              hoverColor: '{primary.600}',
              activeColor: '{primary.700}'
          },
          highlight: {
              background: '{primary.50}',
              focusBackground: '{primary.100}',
              color: '{primary.700}',
              focusColor: '{primary.800}'
          }
      },
      dark: {
          primary: {
              color: '{primary.400}',
              contrastColor: '{surface.900}',
              hoverColor: '{primary.300}',
              activeColor: '{primary.200}'
          },
          highlight: {
              background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
              focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
              color: 'rgba(255,255,255,.87)',
              focusColor: 'rgba(255,255,255,.87)'
          }
      }
  }
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
