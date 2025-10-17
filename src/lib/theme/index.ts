import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#f5f7fa',
    100: '#ebeef5',
    200: '#d2dae8',
    300: '#adbdd6',
    400: '#829bc0',
    500: '#617aab',
    600: '#4c6195',
    700: '#3f4f7a',
    800: '#374465',
    900: '#303a55',
  },
}

export const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
})
