export const fonts = {
  heading: `var(--font-degular), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  body: `var(--font-degular), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
} as const

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export const fontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '3.75rem', // 60px
} as const

export const lineHeights = {
  normal: 'normal' as const,
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
} as const
